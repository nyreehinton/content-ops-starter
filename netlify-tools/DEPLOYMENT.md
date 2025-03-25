# Netlify Build and Deployment Agents

This directory contains a set of tools to help you build and deploy your site to Netlify using automated agents. These agents handle the entire deployment process, from building your site to pushing it to Netlify.

## Setup

Before using these tools, you need to set up your environment:

1. Create a `.env` file in the project root with the following variables:

```
NETLIFY_AUTH_TOKEN=your_netlify_personal_access_token
NETLIFY_SITE_ID=your_netlify_site_id
```

You can find your Netlify site ID in the Netlify dashboard under Site Settings > General > Site Details > API ID.

To create a personal access token, go to User Settings > Applications > Personal Access Tokens.

## Available Commands

The following commands are available via npm scripts:

### Deploy Site

```bash
npm run deploy-site [command]
```

Commands:

- `build` - Build the site locally
- `deploy` - Deploy the built site to Netlify
- `build-deploy` - Build and deploy in one step
- `status` - Check deployment status
- `help` - Show help message

Example:

```bash
npm run deploy-site build-deploy
```

### Run Netlify Agents

```bash
npm run run-agents [command]
```

This runs the multi-agent system for Netlify debugging and deployment.

Commands:

- `all` - Run all agents in interactive mode
- `netlify URL LOGS` - Run Netlify debug workflow
- `team TEAM_NAME` - Run specific agent team

Example:

```bash
npm run run-agents all
```

### Start Agent

```bash
npm run start-agent
```

Starts the Netlify debug agent to analyze your build configuration.

## Automation

You can integrate these deployment agents with CI/CD pipelines by setting the required environment variables in your CI environment and calling the appropriate npm script.

Example GitHub Actions workflow:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build and deploy
        run: npm run deploy-site build-deploy
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Advanced Usage

### Deploy with Custom Settings

You can customize the build command and deploy directory by setting environment variables:

```bash
BUILD_COMMAND="custom-build-command" DEPLOY_DIR="custom-dir" npm run deploy-site build-deploy
```

### Locked Deploys

For more controlled deployments, you can use the deployment manager:

```javascript
const deployManager = require('./netlify-tools/netlify-agent/deployment-manager');

// Create a locked deploy
await deployManager.createLockedDeploy('Testing new feature');

// Run tests against the deploy
const testsPassed = runTests();

// If tests pass, publish the deploy
if (testsPassed) {
  await deployManager.publishDeploy(deployId);
}
```

## Troubleshooting

If you encounter issues with deployments:

1. Check the logs in `netlify-tools/netlify-deploy-logs/`
2. Verify your auth token and site ID are correct
3. Run `npm run deploy-site status` to check recent deployments
4. Try clearing the build cache with `npm run deploy-site build-deploy`
