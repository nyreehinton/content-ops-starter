# Netlify Agents

A comprehensive toolkit for integrating AI agents with Netlify using Model Context Protocol (MCP) servers.

## Overview

Netlify Agents combines the power of Netlify's build and deployment infrastructure with AI agents powered by the Model Context Protocol (MCP). This toolkit lets you:

- Debug and fix Netlify build issues using AI assistance
- Automate deployment workflows with intelligent agents
- Add AI capabilities to your Netlify sites through MCP servers
- Create custom agents for specialized tasks using the Agno framework

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Available MCP Servers](#available-mcp-servers)
- [Agent Configuration](#agent-configuration)
- [Working with Netlify](#working-with-netlify)
- [Debugging Common Issues](#debugging-common-issues)
- [Examples](#examples)
- [Advanced Usage](#advanced-usage)
- [CI/CD Integration](#cicd-integration)
- [Troubleshooting Guide](#troubleshooting-guide)
- [Security Considerations](#security-considerations)
- [Performance Optimization](#performance-optimization) 
- [Community and Support](#community-and-support)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js (v16 or higher)
- Python 3.8+ (for certain agent frameworks)
- Netlify CLI installed (`npm install -g netlify-cli`)
- Docker (recommended for local testing)

### Basic Installation

```bash
# Install the main package
npm install netlify-agents

# Install Python dependencies (if using Python-based agents)
pip install agno openai duckduckgo-search

# Install the MCP servers
npx -y @modelcontextprotocol/inspector npx server-filesystem /path/to/allowed/dir
```

## Quick Start

1. **Set up your environment**

Create a `.env` file with your API keys:

```
OPENAI_API_KEY=your-openai-key
EXA_API_KEY=your-exa-key
```

2. **Create an agent configuration**

Create an `agent-config.js` file:

```javascript
module.exports = {
  model: "gpt-4o",
  tools: ["filesystem", "git"],
  description: "A Netlify build assistant that helps debug and fix deployment issues",
  instructions: [
    "Help users troubleshoot Netlify build issues",
    "Suggest fixes for common deployment problems",
    "Provide clear explanations of error messages"
  ]
}
```

3. **Initialize and run**

```bash
netlify-agents init
netlify-agents start
```

## Available MCP Servers

Netlify Agents integrates with various MCP servers that provide specialized functionality:

| Server | Description | Installation |
|--------|-------------|-------------|
| Filesystem | Read, write, and manipulate local files | `npx -y @modelcontextprotocol/server-filesystem /path/to/dir` |
| Git | Interact with Git repositories for version control | `uvx mcp-server-git --repository path/to/git/repo` |
| Fetch | Retrieve and convert web content to markdown | `uvx mcp-server-fetch` |
| Sequential Thinking | Structured problem-solving process | `npx -y @modelcontextprotocol/server-sequential-thinking` |
| Demo (Everything) | Test environment with all MCP features | `npx -y @modelcontextprotocol/server-everything` |

## Agent Configuration

### Using the Agno Framework

You can create powerful AI agents using the Agno framework:

```python
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.mcp import MCPTools
from mcp import ClientSession, StdioServerParameters

# Initialize MCP server for filesystem operations
server_params = StdioServerParameters(
    command="npx",
    args=[
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/project"
    ]
)

# Create a filesystem agent
async def create_filesystem_agent():
    async with MCPTools(server_params) as mcp_tools:
        agent = Agent(
            model=OpenAIChat(id="gpt-4o"),
            tools=[mcp_tools],
            instructions="""
                You are a filesystem assistant for Netlify projects.
                Help users explore files and directories.
                Provide clear context about files you examine.
            """,
            markdown=True,
            show_tool_calls=True
        )
        return agent
```

### Creating Multi-Agent Teams

For complex workflows, create specialized agent teams:

```python
from agno.agent import Agent
from agno.team.team import Team
from agno.models.openai import OpenAIChat
from agno.tools.duckduckgo import DuckDuckGoTools
from agno.tools.git import GitHubTools

# Web search agent
searcher = Agent(
    name="Searcher",
    role="Searches for Netlify documentation and solutions",
    tools=[DuckDuckGoTools()],
    instructions=["Search for relevant Netlify documentation", "Find solutions to common issues"]
)

# Repository management agent
repo_manager = Agent(
    name="Repo Manager",
    role="Manages git operations",
    tools=[GitHubTools()],
    instructions=["Examine repository structure", "Suggest config changes for Netlify"]
)

# Create a team with both agents
netlify_team = Team(
    name="Netlify Helper Team",
    mode="coordinate",
    model=OpenAIChat("gpt-4o"),
    members=[searcher, repo_manager],
    instructions=["Help users solve Netlify deployment issues", "Provide clear, actionable recommendations"]
)
```

## Working with Netlify

### Adding MCP Servers to Netlify

Add an MCP server to your Netlify configuration by editing `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/projects"
      ]
    }
  }
}
```

### Real-time Build Monitoring

Create an agent that monitors your builds in real-time and alerts you to potential issues:

```javascript
const { NetlifyBuildMonitor } = require('netlify-agents/monitors');

// Create a build monitor for a specific site
const monitor = new NetlifyBuildMonitor({
  siteName: 'nyreehinton',
  authToken: process.env.NETLIFY_AUTH_TOKEN,
  notificationChannels: ['slack', 'email'],
  checkIntervalSeconds: 30,
  maxMonitoringTime: 3600 // 1 hour in seconds
});

// Start monitoring the latest build
monitor.watchLatestBuild()
  .then(result => {
    console.log(`Build ${result.buildId} finished with status: ${result.status}`);
    console.log(`Time taken: ${result.duration} seconds`);
    
    if (result.status === 'success') {
      console.log(`Deploy URL: ${result.deployUrl}`);
    } else {
      console.error(`Build failed: ${result.errorMessage}`);
      console.log(`Agent analysis: ${result.agentAnalysis}`);
    }
  })
  .catch(error => {
    console.error('Monitoring failed:', error);
  });
```

### Deploy Status Webhook

Create a webhook that receives Netlify deploy notifications and triggers your agent:

```javascript
// In your server.js or equivalent
const express = require('express');
const { NetlifyAgents } = require('netlify-agents');
const app = express();

app.use(express.json());

app.post('/netlify-webhook', async (req, res) => {
  const { state, context, site_name } = req.body;
  
  console.log(`Received deploy notification: ${state} for ${site_name}`);
  
  if (state === 'ready') {
    // Deploy succeeded
    const agent = NetlifyAgents.getAgent('post-deploy');
    await agent.run(`The deploy for ${site_name} has succeeded. Run post-deploy tasks.`);
    
    // Your post-deploy logic here
    
  } else if (state === 'error') {
    // Deploy failed
    const agent = NetlifyAgents.getAgent('deploy-troubleshooter');
    const analysis = await agent.run(`The deploy for ${site_name} has failed. Analyze the issue.`);
    
    // Send notification with analysis
    await sendNotification(`Deploy failed for ${site_name}: ${analysis.summary}`);
  }
  
  res.status(200).send('Webhook received');
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});
```

### Creating Netlify Build Plugins

Create build plugins powered by AI agents:

```javascript
module.exports = {
  onPreBuild: async ({ utils }) => {
    const agent = require('./netlify-agent');
    
    try {
      const result = await agent.analyze({
        buildSettings: process.env,
        repositoryFiles: utils.git.modifiedFiles
      });
      
      console.log('Agent recommendations:', result.recommendations);
      
      if (result.needsAction) {
        // Apply suggested changes
        await agent.applyFixes(result.fixes);
      }
    } catch (error) {
      utils.build.failBuild('Agent analysis failed', { error });
    }
  }
}
```

## Debugging Common Issues

The Netlify Agents toolkit can help diagnose and fix common build issues:

### Case Sensitivity Problems

Use the File Inspector agent to detect case sensitivity issues:

```bash
netlify-agents inspect --case-sensitivity
```

### Memory Allocation Issues

Run the Performance Analyzer to identify memory bottlenecks:

```bash
netlify-agents analyze-performance --build-logs ./latest-build.log
```

### Dependency Resolution

Scan your dependency tree for conflicts:

```bash
netlify-agents check-dependencies
```

## Examples

### Example 1: Debugging a Failed Build

```bash
# Analyze the most recent failed build
netlify-agents debug-build

# The agent will:
# 1. Examine the build logs
# 2. Identify the root cause
# 3. Suggest fixes for the issue
# 4. Help implement the recommended changes
```

### Example 2: Setting up Sequential Thinking for Complex Problems

```javascript
const { setupAgent } = require('netlify-agents');

const agent = setupAgent({
  mode: 'sequential-thinking',
  problem: 'Our Gatsby site deploys locally but fails on Netlify with memory issues',
  steps: 10, // Number of reasoning steps to take
  outputFormat: 'markdown'
});

agent.solve().then(solution => {
  console.log('Proposed solution:', solution);
});
```

### Example 3: Verifying Deploy Status Before Completing Work

This example shows how to create an agent that checks the deploy status on Netlify before completing its work:

```javascript
const { setupAgent } = require('netlify-agents');
const { fetchTools } = require('netlify-agents/tools');

// Create an agent with deploy verification
const deployVerifier = setupAgent({
  name: "Deploy Verifier",
  description: "Verifies Netlify deployment status before completing tasks",
  tools: [fetchTools.fetch, fetchTools.parseHTML],
  instructions: [
    "Always check deployment status before completing work",
    "Only proceed if the deploy status is 'Published'",
    "Alert if the deploy status is 'Failed'"
  ]
});

// Function to verify the deploy status
async function verifyDeploy(siteId, callback) {
  try {
    // Check the deploy status at Netlify
    const result = await deployVerifier.run(`Check the deploy status at https://app.netlify.com/sites/${siteId}/deploys`);
    
    if (result.status === 'Published') {
      console.log('Deploy successful! Completing work...');
      if (callback) callback(true);
      return true;
    } else if (result.status === 'Failed') {
      console.error('Deploy failed! Halting work.');
      if (callback) callback(false, 'Deploy failed');
      return false;
    } else {
      console.warn(`Deploy status: ${result.status}. Waiting...`);
      // Optionally set up a retry mechanism here
      setTimeout(() => verifyDeploy(siteId, callback), 30000); // Check again in 30 seconds
      return null;
    }
  } catch (error) {
    console.error('Error checking deploy status:', error);
    if (callback) callback(false, error);
    return false;
  }
}

// Usage example
verifyDeploy('nyreehinton', (success, error) => {
  if (success) {
    // Continue with post-deploy tasks
    runPostDeployTasks();
  } else {
    // Handle failed deploy
    sendNotification(`Deploy failed: ${error}`);
  }
});
```

## Advanced Usage

### Deploy Status Verification

When automating workflows with Netlify, it's often crucial to verify that a deployment was successful before proceeding with further tasks. Here's how to implement deploy status checking:

```python
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.fetch import FetchTools
import time

class NetlifyDeployChecker:
    def __init__(self, site_name, max_retries=10, retry_interval=30):
        self.site_name = site_name
        self.max_retries = max_retries
        self.retry_interval = retry_interval
        self.agent = Agent(
            model=OpenAIChat(id="gpt-4o"),
            tools=[FetchTools()],
            instructions=[
                "You are a Netlify deploy status checker",
                "Extract the deploy status from the Netlify deploy page",
                "Return 'Published', 'Failed', or 'In progress' as appropriate"
            ]
        )
    
    async def check_deploy_status(self):
        deploy_url = f"https://app.netlify.com/sites/{self.site_name}/deploys"
        
        for attempt in range(self.max_retries):
            try:
                response = await self.agent.arun(f"Check the latest deploy status at {deploy_url}. Extract ONLY the status: Published, Failed, or In progress.")
                
                status = response.content.strip().lower()
                
                if "published" in status:
                    return {"status": "published", "success": True}
                elif "failed" in status:
                    return {"status": "failed", "success": False}
                elif "in progress" in status:
                    print(f"Deploy still in progress. Waiting {self.retry_interval} seconds before checking again...")
                    time.sleep(self.retry_interval)
                else:
                    print(f"Unrecognized status: {status}. Retrying...")
                    time.sleep(self.retry_interval)
            except Exception as e:
                print(f"Error checking deploy status: {e}")
                time.sleep(self.retry_interval)
        
        return {"status": "unknown", "success": False, "error": "Max retries exceeded"}

# Usage
async def main():
    checker = NetlifyDeployChecker("nyreehinton")
    result = await checker.check_deploy_status()
    
    if result["success"]:
        print("Deploy successful! Continuing with post-deploy tasks...")
        # Run your post-deploy code here
    else:
        print(f"Deploy unsuccessful. Status: {result['status']}")
        # Handle failed deploy
```

### Custom Tool Development

Create custom tools for specific Netlify workflows:

```python
def netlify_deploy_preview(pull_request_url: str) -> str:
    """
    Create a Netlify deploy preview for a pull request.
    
    Args:
        pull_request_url (str): URL of the pull request
        
    Returns:
        str: URL of the deploy preview
    """
    # Implementation code here
    pass

# Add to your agent
agent = Agent(
    tools=[netlify_deploy_preview],
    # Other configuration
)
```

### Persistent Agent Memory

Configure agents with persistent memory for ongoing assistance:

```python
from agno.agent import Agent
from agno.storage.postgres import PostgresStorage

agent = Agent(
    # Model and tools configuration
    storage=PostgresStorage(
        table_name="netlify_agent_sessions", 
        db_url="postgresql://user:password@localhost:5432/agents"
    ),
    add_history_to_messages=True,
    num_history_responses=5
)
```

## Contributing

Contributions are welcome! Please check out our [contribution guidelines](CONTRIBUTING.md) for details on how to get started.

## CI/CD Integration

### GitHub Actions Integration

Integrate Netlify Agents into your GitHub Actions workflow to automate build monitoring and issue resolution:

```yaml
name: Netlify Deploy Monitor

on:
  workflow_run:
    workflows: ["Netlify Deploy"]
    types:
      - completed

jobs:
  monitor-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: |
          npm install netlify-agents
          pip install agno openai duckduckgo-search
          
      - name: Monitor deploy status
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          node .github/scripts/monitor-deploy.js
```

Example monitoring script (`monitor-deploy.js`):

```javascript
const { NetlifyDeployMonitor } = require('netlify-agents/monitors');

async function main() {
  const monitor = new NetlifyDeployMonitor({
    siteId: process.env.NETLIFY_SITE_ID,
    authToken: process.env.NETLIFY_AUTH_TOKEN,
    notificationChannels: ['github-issue', 'slack'],
    autoFixEnabled: true,
    maxRetries: 3
  });
  
  const result = await monitor.watchLatestDeploy();
  
  if (!result.success) {
    console.error('Deploy failed:', result.error);
    process.exit(1);
  }
  
  console.log('Deploy successful:', result.deployUrl);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```

### CircleCI Integration

```yaml
version: 2.1
jobs:
  monitor-netlify-deploy:
    docker:
      - image: cimg/node:18.0
    steps:
      - checkout
      - run:
          name: Install dependencies
          command: |
            npm install netlify-agents
            pip install agno openai
      - run:
          name: Monitor deploy
          command: |
            node scripts/monitor-deploy.js
workflows:
  version: 2
  build-and-deploy:
    jobs:
      - deploy-to-netlify
      - monitor-netlify-deploy:
          requires:
            - deploy-to-netlify
```

## Troubleshooting Guide

### Common Build Issues

| Issue | Possible Cause | Agent-Assisted Solution |
|-------|----------------|-------------------------|
| Build Failed with Exit Code 1 | Dependency installation error | `netlify-agents fix-dependencies` |
| Post-processing Failed | Image optimization issue | `netlify-agents analyze-assets` |
| Build Timeout | Process running too long | `netlify-agents optimize-build` |
| Case Sensitivity Issues | Filename casing mismatch | `netlify-agents fix-case-sensitivity` |
| Memory Allocation Errors | Build process exceeding memory limits | `netlify-agents optimize-memory` |

### Diagnostic Commands

```bash
# Get a comprehensive build report
netlify-agents diagnose --site-name=your-site-name

# Fix common case sensitivity issues automatically
netlify-agents fix-case --auto-fix

# Analyze build performance
netlify-agents analyze-build-performance --last-builds=5

# Generate optimized netlify.toml configuration
netlify-agents generate-config --type=optimize-for-speed
```

## Security Considerations

When using Netlify Agents with MCP servers, follow these security best practices:

1. **Access Control**: Limit filesystem access to only the directories needed
2. **Secret Management**: Never expose API keys in your code or build logs
3. **Rate Limiting**: Implement rate limiting for API-based tools
4. **Content Validation**: Validate content before writing to filesystem
5. **Audit Logging**: Enable logging for all agent actions for accountability

Example secure configuration:

```javascript
// Secure configuration for filesystem access
const secureFilesystemConfig = {
  command: "npx",
  args: [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "/limited/project/path",  // Only the specific path needed
    "--read-only"             // Read-only access when possible
  ],
  env: {
    "NODE_ENV": "production",
    // No sensitive environment variables here
  }
};
```

## Performance Optimization

Optimize your Netlify Agents for better performance:

```python
# Configure an optimized agent
optimized_agent = Agent(
    model=OpenAIChat(
        id="gpt-4o", 
        temperature=0.1,        # Lower temperature for more deterministic results
        response_format="json"  # Structured output for predictable parsing
    ),
    tools=[optimized_tools],    # Only include necessary tools
    caching=True,               # Enable response caching
    timeout=30,                 # Set reasonable timeouts
    parallel_tool_calls=True    # Enable parallel tool execution
)
```

## Community and Support

- Join our [Discord community](https://discord.gg/netlify-agents)
- Check out the [GitHub Discussions](https://github.com/netlify-agents/netlify-agents/discussions)
- Report issues on our [Issue Tracker](https://github.com/netlify-agents/netlify-agents/issues)
- Follow [@NetlifyAgents](https://twitter.com/NetlifyAgents) for updates

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
