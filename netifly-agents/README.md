# Netlify Deployment Tools

This directory contains a set of tools to help monitor, verify, and respond to Netlify deployments.

## Available Tools

### 1. Deploy Status Checker (Python)

`netlify-deploy-checker.py` - Checks the status of a Netlify deployment and takes actions based on the result.

### 2. Deploy Status Checker (Node.js)

`netlify-node-checker.js` - A JavaScript version of the deployment checker.

### 3. Webhook Integration

`netlify-hooks-integration.js` - An Express server that receives Netlify webhook notifications and processes them.

### 4. Automated Debugger

`netlify-debugger.sh` - A comprehensive debugging tool that runs all diagnostics automatically without requiring user input.

### 5. Setup Guide

`netlify-setup-guide.md` - Detailed documentation on how to set up and use these tools.

## Getting Started

1. Install dependencies:

   ```bash
   npm run setup-deploy-checker
   ```

2. Check a deployment status (replace `your-site-name` with your Netlify site name):

   ```bash
   # Using Python version
   npm run check-deploy -- your-site-name

   # Using Node.js version
   npm run check-deploy-js -- your-site-name
   ```

3. Set up webhook integration:

   ```bash
   npm run integrate-hooks
   ```

4. Run the automated debugger:
   ```bash
   # Automatically detects site name or use provided one
   npm run netlify-debugger [your-site-name]
   ```

## Configuration

All tools use environment variables from your `.env` file. Required variables:

- `OPENAI_API_KEY`: Your OpenAI API key
- `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token

Optional variables for webhook integration:

- `SLACK_WEBHOOK_URL`: URL for Slack notifications
- `ENABLE_SLACK_NOTIFICATIONS`: Set to 'true' to enable Slack notifications
- `ENABLE_EMAIL_NOTIFICATIONS`: Set to 'true' to enable email notifications
- `EMAIL_TO`: Email address for notifications

## Features

- **Real-time deployment status checking** - Monitor deployments and take actions based on success or failure
- **AI-powered build log analysis** - Automatically diagnose and suggest fixes for failed builds
- **Notification system** - Send updates to Slack, email, or other channels
- **Webhook integration** - Trigger actions on deploy events
- **Automated debugging** - Run comprehensive diagnostics with a single command

## Integration with CI/CD

These tools can be integrated into CI/CD pipelines. See the setup guide for examples.
