#!/usr/bin/env node

/**
 * Netlify Deploy Status Checker (Node.js)
 * 
 * A practical implementation of a Netlify deploy status checker using a web-based approach.
 * This script checks if a Netlify deployment has been published successfully before proceeding
 * with post-deploy tasks.
 */

require('dotenv').config();

const axios = require('axios');
const cheerio = require('cheerio');
const { OpenAI } = require('openai');
const readline = require('readline');

// Check required environment variables
if (!process.env.OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY environment variable is required");
  process.exit(1);
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

class NetlifyDeployChecker {
  /**
   * Initialize the Netlify deploy checker.
   * 
   * @param {Object} config - Configuration object
   * @param {string} config.siteName - Netlify site name (e.g., 'nyreehinton')
   * @param {number} config.maxRetries - Maximum number of status check attempts
   * @param {number} config.retryInterval - Seconds to wait between retries
   * @param {boolean} config.verbose - Whether to print verbose output
   */
  constructor({ siteName, maxRetries = 12, retryInterval = 10, verbose = false }) {
    this.siteName = siteName;
    this.maxRetries = maxRetries;
    this.retryInterval = retryInterval * 1000; // Convert to milliseconds
    this.verbose = verbose;
    
    this.deployUrl = `https://app.netlify.com/sites/${this.siteName}/deploys`;
    
    if (this.verbose) {
      console.log(`Initialized deploy checker for site: ${this.siteName}`);
      console.log(`Deploy URL to check: ${this.deployUrl}`);
    }
  }

  /**
   * Fetch the deploy page HTML
   * 
   * @returns {Promise<string>} HTML content of the deploy page
   */
  async fetchDeployPage() {
    try {
      const response = await axios.get(this.deployUrl);
      return response.data;
    } catch (error) {
      if (this.verbose) {
        console.error(`Error fetching deploy page: ${error.message}`);
      }
      throw new Error(`Failed to fetch deploy page: ${error.message}`);
    }
  }

  /**
   * Extract deploy status using OpenAI
   * 
   * @param {string} html - HTML content of the deploy page
   * @returns {Promise<string>} Deploy status
   */
  async extractStatusWithOpenAI(html) {
    // Clean HTML to reduce token usage - we can use Cheerio for this
    const $ = cheerio.load(html);
    // Get the main content, removing scripts, styles, etc.
    const mainContent = $('body').text().trim().substring(0, 4000); // Limit length

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a deploy status extractor. Extract the most recent deploy status from the Netlify deploy page. Return ONLY one of these exact values: 'Published', 'Failed', or 'In Progress'. Nothing else."
        },
        {
          role: "user",
          content: `Extract the latest deploy status from this Netlify page content: ${mainContent}`
        }
      ],
      temperature: 0.1, // Low temperature for more deterministic results
      max_tokens: 10,   // We only need a short response
    });

    const status = completion.choices[0].message.content.trim();
    return status;
  }

  /**
   * Check the deployment status of the Netlify site.
   * 
   * @returns {Promise<Object>} Status information including success flag, status string, 
   * and optional error
   */
  async checkDeployStatus() {
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        if (this.verbose) {
          console.log(`\nAttempt ${attempt}/${this.maxRetries} to check deploy status...`);
        }
        
        // Fetch the deploy page
        const html = await this.fetchDeployPage();
        
        // Extract the status using OpenAI
        const status = await this.extractStatusWithOpenAI(html);
        
        if (this.verbose) {
          console.log(`Raw status response: ${status}`);
        }
        
        // Check status
        const normalizedStatus = status.toLowerCase();
        
        if (normalizedStatus.includes('published') || normalizedStatus === 'published') {
          if (this.verbose) {
            console.log("✅ Deploy published successfully!");
          }
          return { status: "published", success: true, attempt };
        } else if (normalizedStatus.includes('failed') || normalizedStatus === 'failed') {
          if (this.verbose) {
            console.log("❌ Deploy failed!");
          }
          return { status: "failed", success: false, attempt };
        } else if (
          normalizedStatus.includes('in progress') || 
          normalizedStatus === 'in progress' ||
          normalizedStatus.includes('building')
        ) {
          if (this.verbose) {
            console.log(`⏳ Deploy still in progress. Waiting ${this.retryInterval/1000} seconds before checking again...`);
          }
          await this.sleep(this.retryInterval);
          continue;
        } else {
          if (this.verbose) {
            console.log(`⚠️ Unrecognized status: ${status}. Retrying...`);
          }
          await this.sleep(this.retryInterval);
        }
      } catch (error) {
        if (this.verbose) {
          console.error(`❌ Error checking deploy status: ${error.message}`);
        }
        await this.sleep(this.retryInterval);
      }
    }
    
    // If we've exhausted all retries
    if (this.verbose) {
      console.log("❌ Max retries exceeded without determining deploy status.");
    }
    return { 
      status: "unknown", 
      success: false, 
      error: "Max retries exceeded", 
      attempt: this.maxRetries 
    };
  }

  /**
   * Sleep for a specified duration
   * 
   * @param {number} ms - Duration in milliseconds
   * @returns {Promise<void>}
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/**
 * Run post-deploy tasks
 * 
 * @param {string} siteName - Netlify site name
 * @returns {Promise<void>}
 */
async function runPostDeployTasks(siteName) {
  console.log(`\n🚀 Running post-deploy tasks for ${siteName}...`);
  
  // Here you would implement your specific post-deploy tasks
  // Examples:
  // - Send notification emails
  // - Update DNS records
  // - Refresh CDN caches
  // - Run post-deploy tests
  // - Update status dashboards
  
  console.log("✅ Post-deploy tasks completed successfully!");
}

/**
 * Handle a failed deployment
 * 
 * @param {string} siteName - Netlify site name
 * @param {Object} statusResult - Status check result
 * @returns {Promise<void>}
 */
async function handleFailedDeploy(siteName, statusResult) {
  console.log(`\n⚠️ Handling failed deploy for ${siteName}...`);
  
  // Here you would implement your specific failure handling logic
  // Examples:
  // - Send alerts to the team
  // - Create incident reports
  // - Roll back to previous working deploy
  // - Analyze build logs
  
  console.log(`📝 Deploy failed after ${statusResult.attempt} status checks`);
  if (statusResult.error) {
    console.log(`Error: ${statusResult.error}`);
  }
  
  console.log("✅ Failure handling completed!");
}

/**
 * Parse command line arguments
 * 
 * @returns {Object} Parsed arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    siteName: null,
    maxRetries: 12,
    retryInterval: 10,
    verbose: false
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--retries' && i + 1 < args.length) {
      options.maxRetries = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--interval' && i + 1 < args.length) {
      options.retryInterval = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--verbose') {
      options.verbose = true;
    } else if (!options.siteName) {
      options.siteName = args[i];
    }
  }

  if (!options.siteName) {
    console.error("Error: Netlify site name is required");
    console.log("Usage: node netlify-deploy-checker.js SITE_NAME [--retries N] [--interval SEC] [--verbose]");
    process.exit(1);
  }

  return options;
}

/**
 * Main function
 */
async function main() {
  const options = parseArgs();
  
  console.log(`🔍 Checking deploy status for Netlify site: ${options.siteName}`);
  
  // Create the deploy checker
  const checker = new NetlifyDeployChecker({
    siteName: options.siteName,
    maxRetries: options.maxRetries,
    retryInterval: options.retryInterval,
    verbose: options.verbose
  });
  
  // Check deploy status
  const statusResult = await checker.checkDeployStatus();
  
  // Take action based on deploy status
  if (statusResult.success) {
    await runPostDeployTasks(options.siteName);
    process.exit(0);
  } else {
    await handleFailedDeploy(options.siteName, statusResult);
    process.exit(1);
  }
}

// Run the main function
main().catch(error => {
  console.error("Unhandled error:", error);
  process.exit(1);
});
