# Agent Commands and Configurations

## Core Agents

### Netlify Debug Agent

```bash
# Run the simplified Netlify debug agent
python3 netlify_agent.py

# Or use the start script (recommended)
./start-agent.sh

# Run the full Netlify debug agent
python3 netlify_debug_agent.py

# Interactive agent with Agno features
python3 netlify-debug-agent.py
```

### Netlify Build Agents

The Netlify Build Agents toolkit provides comprehensive tools for managing and optimizing Netlify builds:

```bash
# Run the basic debug agent to check configuration
./netlify-agent/debug-agent.sh

# Run the enhanced debug agent with comprehensive checks
./netlify-agent/enhanced-netlify-debug-agent.sh

# Monitor resource usage during builds
node ./netlify-agent/resource-monitor.js

# Execute and orchestrate tests in proper sequence
node ./netlify-agent/test-executor.js [unit|integration|e2e|all]

# Manage deployment processes
node ./netlify-agent/deployment-manager.js [info|list-deploys|create-locked]

# Clean up problematic processes
node ./netlify-agent/process-manager.js [scan|cleanup|cleanup-all]

# Run build diagnostics and fixes
./netlify-agent/netlify-build-agent.sh
```

### Docker Agent

```python
from agno.agent import Agent
from agno.tools.docker import DockerTools

docker_tools = DockerTools(
    enable_container_management=True,
    enable_image_management=True,
    enable_volume_management=True,
    enable_network_management=True,
)

docker_agent = Agent(
    name="Docker Agent",
    instructions=[
        "You are a Docker management assistant that can perform various Docker operations.",
        "You can manage containers, images, volumes, and networks.",
    ],
    tools=[docker_tools],
    show_tool_calls=True,
    markdown=True,
)
```

### Web Research Agents

```python
# Arxiv Research Agent
from agno.agent import Agent
from agno.tools.arxiv import ArxivTools

agent = Agent(tools=[ArxivTools()], show_tool_calls=True)

# Web Search Agent
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.duckduckgo import DuckDuckGoTools

web_searcher = Agent(
    name="Web Searcher",
    role="Searches the web for information on a topic",
    model=OpenAIChat(id="gpt-4o"),
    description="An intelligent agent that performs comprehensive web searches",
    tools=[DuckDuckGoTools()],
    instructions=[
        "1. Perform focused web searches using relevant keywords",
        "2. Filter results for credibility and recency",
        "3. Extract key information and main points",
        "4. Organize information in a logical structure",
        "5. Verify facts from multiple sources when possible",
        "6. Focus on authoritative and reliable sources",
    ],
)

# Tavily Search Agent
from agno.agent import Agent
from agno.tools.tavily import TavilyTools

agent = Agent(tools=[TavilyTools()], show_tool_calls=True)
```

### Social Media Agents

```python
# Reddit Agent
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.reddit import RedditTools

reddit_agent = Agent(
    name="Reddit Agent",
    role="Uploads post on Reddit",
    model=OpenAIChat(id="gpt-4o"),
    description="Specialized agent for crafting and publishing engaging Reddit posts",
    tools=[RedditTools()],
    instructions=[
        "1. Get information regarding the subreddit",
        "2. Create attention-grabbing yet accurate titles",
        "3. Format posts using proper Reddit markdown",
        "4. Avoid including links ",
        "5. Follow subreddit-specific rules and guidelines",
        "6. Structure content for maximum readability",
        "7. Add appropriate tags and flairs if required",
    ],
    show_tool_calls=True,
)

# YouTube Agent
from agno.agent import Agent
from agno.tools.youtube import YouTubeTools

agent = Agent(
    tools=[YouTubeTools()],
    show_tool_calls=True,
    description="You are a YouTube agent. Obtain the captions of a YouTube video and answer questions.",
)
```

### Utility Agents

```python
# Calculator Agent
from agno.agent import Agent
from agno.tools.calculator import CalculatorTools

calculator_agent = Agent(
    tools=[
        CalculatorTools(
            add=True,
            subtract=True,
            multiply=True,
            divide=True,
            exponentiate=True,
            factorial=True,
            is_prime=True,
            square_root=True,
        )
    ],
    show_tool_calls=True,
    markdown=True,
)

# Shell Command Agent
from agno.agent import Agent
from agno.tools.shell import ShellTools

shell_agent = Agent(tools=[ShellTools()], show_tool_calls=True)

# Sleep Control Agent
from agno.agent import Agent
from agno.tools.sleep import SleepTools

sleep_agent = Agent(tools=[SleepTools()], name="Sleep Agent")

# JIRA Agent
from agno.agent import Agent
from agno.tools.jira import JiraTools

jira_agent = Agent(tools=[JiraTools()])
```

### Productivity Agents

```python
# Zoom Meeting Manager
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.zoom import ZoomTools

zoom_tools = ZoomTools()

agent = Agent(
    name="Zoom Meeting Manager",
    agent_id="zoom-meeting-manager",
    model=OpenAIChat(id="gpt-4"),
    tools=[zoom_tools],
    markdown=True,
    debug_mode=True,
    show_tool_calls=True,
    instructions=[
        "You are an expert at managing Zoom meetings using the Zoom API.",
        "You can schedule, get details, list, and delete meetings, and get recordings.",
    ],
)
```

### LLM OS (Operating System)

```python
from agno.agent import Agent
from agno.tools.calculator import CalculatorTools
from agno.tools.duckduckgo import DuckDuckGoTools
from agno.tools.shell import ShellTools
from agno.tools.file import FileTools
from agno.tools.duckdb import DuckDbTools
from typing import List, Optional

def get_llm_os(
    model_id: str = "gpt-4o",
    calculator: bool = False,
    ddg_search: bool = False,
    file_tools: bool = False,
    shell_tools: bool = False,
    data_analyst: bool = False,
    python_agent_enable: bool = False,
    research_agent_enable: bool = False,
    investment_agent_enable: bool = False,
    user_id: Optional[str] = None,
    debug_mode: bool = True,
) -> Agent:
    # Set up tools based on parameters
    tools = []
    if calculator:
        tools.append(CalculatorTools(enable_all=True))
    if ddg_search:
        tools.append(DuckDuckGoTools())
    if shell_tools:
        tools.append(ShellTools())
    if file_tools:
        tools.append(FileTools())

    # Create and return the LLM OS agent
    return Agent(
        name="LLM OS",
        tools=tools,
        debug_mode=debug_mode
    )
```

## MCP Agent Features

MCP (Model Control Protocol) provides various specialized thinking capabilities:

### Sequential Thinking

```
mcp_sequential_thinking_sequential_thinking - Structured problem-solving through sequential thought processes
mcp_sequential_thinking_get_thinking_summary - Generate a comprehensive summary of the thinking process
mcp_sequential_thinking_clear_thinking_history - Clear recorded thoughts and reset server state
```

### DeepLucid 3D Analysis

```
mcp_deeplucid3d_mcp_analyze_problem - Process a problem statement through the UCPF framework
mcp_deeplucid3d_mcp_creative_exploration - Generate novel perspectives and connections for a topic
mcp_deeplucid3d_mcp_manage_state - Control state management for UCPF processing
```

### Thinking Tool

```
mcp_think_mcp_server_think - Cache memory for complex reasoning
```

### Apple Integration Agents

```
mcp_apple_mcp_contacts - Search and retrieve contacts from Apple Contacts app
mcp_apple_mcp_notes - Search and retrieve notes from Apple Notes app
mcp_apple_mcp_messages - Interact with Apple Messages app (send, read, schedule)
mcp_apple_mcp_mail - Interact with Apple Mail app (read, search, send)
mcp_apple_mcp_reminders - Search, create, and open reminders in Apple Reminders app
mcp_apple_mcp_webSearch - Search the web using DuckDuckGo
mcp_apple_mcp_calendar - Search, create, and open calendar events in Apple Calendar app
```

# Run all agents in interactive mode

./run_agents.sh all

# Run only the Netlify debug team with empirical verification

./run_agents.sh netlify <https://your-netlify-site.com> path/to/build-logs.txt

# Run a specific team of agents

./run_agents.sh team netlify
./run_agents.sh team web
./run_agents.sh team utility
./run_agents.sh team productivity

# Show help

./run_agents.sh help

# Netlify Build Agents

Netlify build agents are powerful tools that help debug, monitor, and optimize your Netlify builds and deployments.

## Netlify Debug Agent

The Netlify Debug Agent helps diagnose issues with Netlify builds and deployments.

### Usage

```shell
./run_netlify_agents.sh debug
```

## Netlify Build Agents Toolkit

The Netlify Build Agents toolkit includes multiple agents for monitoring various aspects of your Netlify builds.

### Usage

To run all agents:

```shell
./run_netlify_agents.sh all
```

To run a specific agent:

```shell
./run_netlify_agents.sh monitor
./run_netlify_agents.sh test
./run_netlify_agents.sh process
./run_netlify_agents.sh deploy
```

## Issue Tracking

The Netlify agents now include issue tracking capabilities. You can log and analyze site issues with appropriate action plans.

### Usage

To report an issue:

```shell
./run_netlify_agents.sh issue "description of your issue"
```

You can also run agents and process an issue at the same time:

```shell
./run_netlify_agents.sh all "my landing page is showing errors"
```

The system will:

1. Analyze the issue and categorize it by priority and type
2. Generate an action plan with recommended steps
3. Log the issue for future reference
4. Create a checklist for resolution tracking

### Issue Categories

- LANDING_PAGE: Issues with the home or landing page
- BUILD_PROCESS: Problems with the build or deployment
- FORMS: Issues with Netlify forms or submissions
- ASSETS: Problems with images, media, or static assets
- GENERAL: Other site-related issues

### Priority Levels

- CRITICAL: Requires immediate attention
- HIGH: Important issues affecting site functionality
- MEDIUM: Standard priority issues
- LOW: Minor issues with minimal impact

## Docker Agent

The Docker Agent allows running Netlify builds within a local Docker container for debugging purposes.

### Usage

```shell
python3 netlify_agent.py --docker-build
```

## Web Research Agents

Web research agents can be used to analyze competitor websites, scrape content, and gather analytics data.

### Usage

```shell
./run_agents.sh team web
```

## Social Media Agents

Social media agents integrate with social platforms to analyze engagement and coordinate social media content with website content.

### Usage

```shell
./run_agents.sh team social
```

## Utility Agents

Utility agents provide various helpers for common tasks.

### Usage

```shell
./run_agents.sh team utility
```

## Productivity Agents

Productivity agents help optimize workflows and manage project tasks.

### Usage

```shell
./run_agents.sh team productivity
```

## LLM OS

The LLM OS provides integration with various language models for content generation and analysis.

### Usage

```shell
./run_agents.sh llmos
```

## MCP Agent Features

The MCP Agent provides comprehensive multi-agent coordination and management.

### Usage

```shell
./run_agents.sh all --interactive
```
