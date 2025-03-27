# Setup Guide for Netlify Deploy Status Checker

This guide helps you set up and use the Netlify Deploy Status Checker tools to verify deployment status before running post-deploy tasks.

## Prerequisites

Before you start, make sure you have:

- Node.js v16+ or Python 3.8+ installed
- A Netlify account and site
- API keys for the required services

## Installation

### Python Version

1. Clone the repo or download the `netlify-deploy-checker.py` file
2. Install dependencies:

```bash
pip install agno openai duckduckgo-search python-dotenv
```

3. Create a `.env` file with the following content:

```
OPENAI_API_KEY=your-openai-key-here
```

### Node.js Version

1. Clone the repo or download the `netlify-deploy-checker.js` file
2. Install dependencies:

```bash
npm install axios cheerio openai dotenv
```

3. Create a `.env` file as shown above

## Configuration

Both versions support the following configuration options:

- `site_name`: Your Netlify site name (e.g., "nyreehinton")
- `max_retries`: Maximum number of status check attempts (default: 12)
- `retry_interval`: Seconds to wait between retries (default: 10)
- `verbose`: Whether to print detailed output (default: false)

## Usage

### Python Version

```bash
# Basic usage
python netlify-deploy-checker.py nyreehinton

# With custom settings
python netlify-deploy-checker.py nyreehinton --retries 15 --interval 20 --verbose
```

### Node.js Version

```bash
# Basic usage
node netlify-deploy-checker.js nyreehinton

# With custom settings
node netlify-deploy-checker.js nyreehinton --retries 15 --interval 20 --verbose
```

## Setting Up Webhook Integration

The webhook integration allows you to automatically react to Netlify deploy events:

1. Deploy the webhook server to a platform like Vercel, Netlify, or any Node.js host
2. Set these environment variables:

```
OPENAI_API_KEY=your-openai-key
NETLIFY_AUTH_TOKEN=your-netlify-personal-access-token
SLACK_WEBHOOK_URL=your-slack-webhook-url
ENABLE_SLACK_NOTIFICATIONS=true
ENABLE_EMAIL_NOTIFICATIONS=false
EMAIL_TO=team@example.com
```

3. In your Netlify site settings, go to Build & deploy > Deploy notifications
4. Click "Add notification" and select "Outgoing webhook"
5. Set the event to "Deploy succeeded" and point to your webhook URL
6. Repeat for "Deploy failed" events

## Integration Examples

### CI/CD Pipeline Integration

Add this to your GitHub Actions workflow file (`.github/workflows/deploy.yml`):

```yaml
name: Post-Deploy Tasks

on:
  repository_dispatch:
    types: [netlify-deploy-success]

jobs:
  post-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm install axios openai dotenv
          
      - name: Verify deploy status
        env:
          NETLIFY_SITE_NAME: ${{ secrets.NETLIFY_SITE_NAME }}
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          node netlify-deploy-checker.js $NETLIFY_SITE_NAME
          
      - name: Run post-deploy tasks
        if: success()
        run: |
          # Add your post-deploy tasks here
          echo "Deploy verified! Running post-deploy tasks..."
```

### NPM Script Integration

Add to your `package.json`:

```json
{
  "scripts": {
    "build": "your-build-command",
    "deploy": "netlify deploy --prod",
    "post-deploy": "node netlify-deploy-checker.js your-site-name && node run-post-deploy-tasks.js"
  }
}
```

Then run:

```bash
npm run build && npm run deploy && npm run post-deploy
```

## Customizing Post-Deploy Tasks

Both the Python and Node.js implementations include placeholder functions for post-deploy tasks. Modify these to suit your needs:

### Python Version

Edit the `run_post_deploy_tasks` function in `netlify-deploy-checker.py`:

```python
async def run_post_deploy_tasks(site_name):
    """Example function that runs tasks after a successful deployment."""
    print(f"\n🚀 Running post-deploy tasks for {site_name}...")
    
    # Add your custom tasks here
    # For example:
    
    # 1. Send success notification
    await send_notification(f"Deploy for {site_name} successful!")
    
    # 2. Run end-to-end tests
    subprocess.run(["npm", "run", "test:e2e"])
    
    # 3. Update status dashboard
    await update_status_dashboard(site_name, "deployed")
    
    print("✅ Post-deploy tasks completed successfully!")
```

### Node.js Version

Edit the `runPostDeployTasks` function in `netlify-deploy-checker.js`:

```javascript
async function runPostDeployTasks(siteName) {
  console.log(`\n🚀 Running post-deploy tasks for ${siteName}...`);
  
  // Add your custom tasks here
  // For example:
  
  // 1. Purge CDN cache
  await axios.post('https://api.cloudflare.com/client/v4/zones/your-zone/purge_cache', {
    purge_everything: true
  }, {
    headers: { Authorization: `Bearer ${process.env.CLOUDFLARE_TOKEN}` }
  });
  
  // 2. Run performance tests
  const { execSync } = require('child_process');
  execSync('npm run lighthouse-ci');
  
  // 3. Update internal dashboard
  await axios.post('https://your-internal-api.com/update-deploy-status', {
    site: siteName,
    status: 'success',
    timestamp: new Date().toISOString()
  });
  
  console.log("✅ Post-deploy tasks completed successfully!");
}
```

## Troubleshooting

### Common Issues

1. **Authentication Errors**:
   - Check that your API keys are correctly set in the `.env` file
   - Verify that environment variables are being properly loaded

2. **Status Check Failures**:
   - Increase the `max_retries` value for slow deployments
   - Use the `--verbose` flag to see detailed output

3. **Webhook Integration Issues**:
   - Verify that webhook URLs are correct and accessible
   - Check server logs for detailed error messages

### Logs and Debugging

To enable verbose logging for detailed troubleshooting:

```bash
# Python version
python netlify-deploy-checker.py nyreehinton --verbose

# Node.js version
node netlify-deploy-checker.js nyreehinton --verbose
```

## Best Practices

1. **Handle Failures Gracefully**:
   - Implement proper error handling for failed deployments
   - Send notifications with detailed failure information
   - Consider implementing rollback strategies

2. **Optimize Checks**:
   - Start with shorter retry intervals and increase if needed
   - Balance frequency of checks against API rate limits

3. **Security**:
   - Never commit `.env` files with secrets to version control
   - Use CI/CD environment variables for sensitive information
   - Limit webhook server access with proper authentication

4. **Deploy Process Integration**:
   - Make deploy status checking part of your automated workflow
   - Consider implementing a "circuit breaker" pattern for repetitive failures

## Additional Resources

- [Netlify API Documentation](https://docs.netlify.com/api/get-started/)
- [OpenAI API Documentation](https://platform.openai.com/docs/introduction)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Agno Framework Documentation](https://docs.agno.ai/)

## Support

For issues or feature requests:
- Open an issue in the GitHub repository
- Join our community Discord server
- Email support@netlify-agents.com