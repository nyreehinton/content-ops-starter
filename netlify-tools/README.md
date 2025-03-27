# Netlify Tools

A set of utilities and AI agents for managing Netlify deployments and debugging common issues.

## Overview

This toolkit integrates AI-powered Netlify agents to help with:

- Debugging build failures and deployment issues
- Analyzing and fixing cache-related problems
- Checking for file case sensitivity issues (common in Netlify deployments)
- Running diagnostic checks on your Netlify configuration
- Automating deployment workflows with safety checks

## Installation

The tools are already integrated into this project with the necessary scripts. To set up for the first time:

```bash
# Set up environment variables, authentication, and configuration
npm run setup-netlify

# This will:
# 1. Install Netlify CLI if not present
# 2. Log you in to Netlify (or refresh your session)
# 3. Link your site (optional)
# 4. Set up your OpenAI API key for the AI agents
# 5. Install required Python dependencies
```

## Authentication

Before using any of the Netlify agents, ensure you are authenticated with Netlify. The diagnostic tools showed that proper authentication is required. To authenticate:

```bash
# Run the setup script (recommended)
npm run setup-netlify

# Or manually authenticate
netlify logout  # First logout if session expired
netlify login   # Then login again
netlify link    # Link to your Netlify site
```

## Available Scripts

| Script                       | Description                                     | Usage                           |
| ---------------------------- | ----------------------------------------------- | ------------------------------- |
| `npm run setup-netlify`      | Sets up Netlify CLI, auth, and environment      | `npm run setup-netlify`         |
| `npm run run-netlify-agents` | Runs the main Netlify debug agent               | `npm run run-netlify-agents`    |
| `npm run run-agents`         | Runs all Netlify agents in sequence             | `npm run run-agents`            |
| `npm run start-agent`        | Starts a specific Netlify agent                 | `npm run start-agent -- debug`  |
| `npm run deploy-site`        | Deploys site to Netlify with pre-checks         | `npm run deploy-site -- --prod` |
| `npm run test-netlify-agent` | Tests the Netlify agent tools and functionality | `npm run test-netlify-agent`    |

## Agent Types

The toolkit includes several specialized agents:

- **Debug Agent**: Identifies and suggests fixes for common build and deployment issues
- **Diagnostic Tool**: Comprehensive analysis of Netlify configuration and environment
- **Cache Fixer**: Identifies and resolves Netlify cache-related issues
- **Case Sensitivity Checker**: Finds case sensitivity problems in file references

## Using the Debug Agent

The debug agent is useful when you encounter build failures or deployment issues. It proactively gathers information about your Netlify environment before providing advice:

```bash
# First ensure you're authenticated with Netlify
npm run setup-netlify

# Then run the debug agent
npm run start-agent -- debug

# Example of checking specific build logs
npm run start-agent -- debug "Failed to resolve import"
```

### Proactive Analysis

The debug agent will automatically:

1. Check your Netlify configuration files
2. Examine environment variables
3. Look for common patterns in build logs
4. Identify potential issues before asking questions

This means you get more immediate and useful advice without having to provide basic information that the agent can discover on its own.

## Testing the Agent

You can test the Netlify agent's functionality with:

```bash
# First ensure you're authenticated
npm run setup-netlify

# Then run the test
npm run test-netlify-agent
```

This will:

- List all available tools in the agent
- Run a diagnostic check of your Netlify environment
- Show example output of what the agent can detect

## Deploying with Safety Checks

The deployment script includes automatic diagnostic checks before deploying:

```bash
# First ensure you're authenticated
npm run setup-netlify

# Then deploy
npm run deploy-site

# Deploy to production
npm run deploy-site -- --prod

# Deploy to a specific site
npm run deploy-site -- --site=your-site-name
```

## Common Issues and Solutions

| Issue                       | Possible Solution                                                                |
| --------------------------- | -------------------------------------------------------------------------------- |
| Authentication expired      | Run `npm run setup-netlify` to re-authenticate with Netlify                      |
| Build failures              | Run `npm run start-agent -- debug` to get AI-assisted diagnosis                  |
| Cache problems              | Run `npm run start-agent -- cache-fixer` to analyze and fix cache issues         |
| Case sensitivity            | Run `npm run start-agent -- case-checker` to find file reference case mismatches |
| Environment variable issues | Run `npm run setup-netlify` to check and sync environment variables              |

## Troubleshooting

### Netlify CLI Installation Issues

If you encounter problems with the Netlify CLI:

```bash
# Reinstall a specific stable version
npm uninstall -g netlify-cli
npm install -g netlify-cli@14.0.0
```

### Authentication Issues

If you see "Your session has expired" messages:

```bash
# Run the full setup script
npm run setup-netlify

# Or manually fix authentication
netlify logout
netlify login
```

### Python Dependency Issues

If the Python agents fail to run:

```bash
# Install or update dependencies manually
pip install --upgrade agno openai python-dotenv duckduckgo-search
```

### Missing OpenAI API Key

If the agents can't access the OpenAI API:

1. Get an API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Add it to your `.env` file: `OPENAI_API_KEY=your-key-here`
3. Or run the setup script: `npm run setup-netlify`

## Configuration

The tools use the following files:

- `.env`: Contains environment variables (OPENAI_API_KEY is required for AI agents)
- `netlify.toml`: Netlify configuration file (created or updated by setup script)
- `netifly-agents/`: Directory containing the agent Python scripts

## Integration with CI/CD

You can integrate these tools in your CI/CD pipeline to run checks before deployment:

```yaml
# Example GitHub Actions workflow step
- name: Set up Netlify environment
  run: npm run setup-netlify

- name: Run Netlify diagnostic checks
  run: npm run start-agent -- diagnostic

- name: Deploy to Netlify
  if: success()
  run: npm run deploy-site -- --prod
```

## Support and Contribution

For more information on the available agent tools and how to customize them, see the [Netlify Agents documentation](./netifly-agents/netlify-agents-readme.md).
