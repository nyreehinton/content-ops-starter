/**
 * Netlify Webhook Integration
 * 
 * This script sets up an Express server that receives Netlify webhook notifications
 * and uses an AI agent to analyze deploy statuses and take appropriate actions.
 * 
 * How to use:
 * 1. Deploy this script to a server or serverless function
 * 2. Set up a webhook in your Netlify site settings pointing to this endpoint
 * 3. Configure the environment variables
 */

require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai');
const axios = require('axios');

// Check required environment variables
if (!process.env.OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY environment variable is required");
  process.exit(1);
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Initialize Express app
const app = express();
app.use(express.json());

// Configure notification channels
const notificationChannels = {
  /**
   * Send a Slack notification
   * 
   * @param {string} message - Message to send
   * @param {string} level - Notification level (info, warning, error)
   * @returns {Promise<void>}
   */
  slack: async (message, level = 'info') => {
    if (!process.env.SLACK_WEBHOOK_URL) {
      console.warn("SLACK_WEBHOOK_URL not set. Skipping Slack notification.");
      return;
    }
    
    // Customize emoji based on level
    const emoji = level === 'error' ? '🚨' : level === 'warning' ? '⚠️' : '📣';
    
    try {
      await axios.post(process.env.SLACK_WEBHOOK_URL, {
        text: `${emoji} *Netlify Deploy Notification*: ${message}`
      });
      console.log(`Slack notification sent: ${message}`);
    } catch (error) {
      console.error(`Failed to send Slack notification: ${error.message}`);
    }
  },
  
  /**
   * Send an email notification
   * 
   * @param {string} message - Message to send
   * @param {string} level - Notification level (info, warning, error)
   * @returns {Promise<void>}
   */
  email: async (message, level = 'info') => {
    if (!process.env.EMAIL_TO || !process.env.SENDGRID_API_KEY) {
      console.warn("Email settings not complete. Skipping email notification.");
      return;
    }
    
    // This is a placeholder for email sending logic
    // In production, you would use a service like SendGrid, Mailgun, etc.
    console.log(`Email notification would be sent: ${message}`);
  }
};

/**
 * Send a notification to all configured channels
 * 
 * @param {string} message - Message to send
 * @param {string} level - Notification level (info, warning, error)
 * @returns {Promise<void>}
 */
async function sendNotification(message, level = 'info') {
  const promises = [];
  
  // Send to Slack if enabled
  if (process.env.ENABLE_SLACK_NOTIFICATIONS === 'true') {
    promises.push(notificationChannels.slack(message, level));
  }
  
  // Send to email if enabled
  if (process.env.ENABLE_EMAIL_NOTIFICATIONS === 'true') {
    promises.push(notificationChannels.email(message, level));
  }
  
  // Wait for all notifications to be sent
  await Promise.all(promises);
}

/**
 * Analyze a failed build using the AI agent
 * 
 * @param {string} buildLog - Build log content
 * @returns {Promise<Object>} Analysis results
 */
async function analyzeBuildFailure(buildLog) {
  try {
    // Limit the build log to a reasonable size for the API
    const truncatedLog = buildLog.length > 10000 
      ? buildLog.substring(0, 10000) + '... [log truncated]' 
      : buildLog;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a Netlify build expert. Analyze the build log to identify the root cause of failure and suggest concrete solutions."
        },
        {
          role: "user",
          content: `This Netlify build has failed. Analyze the log and provide: 1) The root cause, 2) A concise explanation, and 3) Specific steps to fix it. Format as JSON with fields: rootCause, explanation, and fixSteps (array).\n\nBuild log:\n${truncatedLog}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });
    
    // Parse the response
    const analysisText = completion.choices[0].message.content;
    const analysis = JSON.parse(analysisText);
    
    return {
      rootCause: analysis.rootCause,
      explanation: analysis.explanation,
      fixSteps: analysis.fixSteps,
      full: analysisText
    };
  } catch (error) {
    console.error(`Error analyzing build failure: ${error.message}`);
    return {
      rootCause: "Analysis failed",
      explanation: `Could not analyze the build log: ${error.message}`,
      fixSteps: ["Check the build log manually"],
      full: null
    };
  }
}

/**
 * Fetch build logs from Netlify API
 * 
 * @param {string} siteId - Netlify site ID
 * @param {string} deployId - Netlify deploy ID
 * @returns {Promise<string>} Build log content
 */
async function fetchBuildLogs(siteId, deployId) {
  if (!process.env.NETLIFY_AUTH_TOKEN) {
    throw new Error("NETLIFY_AUTH_TOKEN environment variable is required");
  }
  
  try {
    const response = await axios.get(
      `https://api.netlify.com/api/v1/sites/${siteId}/deploys/${deployId}/log`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NETLIFY_AUTH_TOKEN}`
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error(`Error fetching build logs: ${error.message}`);
    throw new Error(`Failed to fetch build logs: ${error.message}`);
  }
}

// Netlify webhook endpoint
app.post('/netlify-webhook', async (req, res) => {
  // Extract data from webhook payload
  const { state, deploy_id, site_id, site_name, context } = req.body;
  
  console.log(`Received deploy notification: ${state} for ${site_name} (${context})`);
  
  try {
    // Handle different deploy states
    if (state === 'ready') {
      // Deploy succeeded
      await sendNotification(`✅ Deploy for ${site_name} was successful! Site is live at ${req.body.deploy_ssl_url}`, 'info');
      
      // Here you could trigger any post-deploy tasks
      // For example:
      // - Running end-to-end tests
      // - Refreshing cache
      // - Updating a status page
      
    } else if (state === 'error') {
      // Deploy failed - fetch the build logs and analyze the failure
      console.log(`Fetching build logs for ${site_name} (${deploy_id})...`);
      
      try {
        const buildLogs = await fetchBuildLogs(site_id, deploy_id);
        
        console.log(`Analyzing build failure for ${site_name}...`);
        const analysis = await analyzeBuildFailure(buildLogs);
        
        // Send detailed notification
        const message = `❌ Deploy for ${site_name} failed!\n*Root cause:* ${analysis.rootCause}\n*Fix:* ${analysis.fixSteps.join(', ')}`;
        await sendNotification(message, 'error');
        
      } catch (error) {
        // If we can't fetch logs or analyze, send a simple notification
        await sendNotification(`❌ Deploy for ${site_name} failed! Check the logs manually.`, 'error');
      }
    }
    
    // Send a 200 response to Netlify
    res.status(200).json({ received: true });
    
  } catch (error) {
    console.error(`Error processing webhook: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Netlify webhook server running on port ${PORT}`);
});
