# Available Tools

## File Management Tools

read_file - Read the contents of a file
edit_file - Propose an edit to an existing file
list_dir - List the contents of a directory
file_search - Fast file search based on fuzzy matching against file path
delete_file - Deletes a file at the specified path
reapply - Calls a smarter model to apply the last edit to the specified file

## Search Tools

grep_search - Fast text-based regex search for exact pattern matches within files or directories
web_search - Search the web for real-time information about any topic

## Terminal and Shell Tools

run_terminal_cmd - PROPOSE a command to run on behalf of the user

## Rules and Documentation

fetch_rules - Fetches rules provided by the user to help with navigating the codebase

## GitHub Integration Tools

```
mcp_github_create_or_update_file - Create or update a single file in a GitHub repository
mcp_github_search_repositories - Search for GitHub repositories
mcp_github_create_repository - Create a new GitHub repository in your account
mcp_github_get_file_contents - Get the contents of a file or directory from a GitHub repository
mcp_github_push_files - Push multiple files to a GitHub repository in a single commit
mcp_github_create_issue - Create a new issue in a GitHub repository
mcp_github_create_pull_request - Create a new pull request in a GitHub repository
mcp_github_fork_repository - Fork a GitHub repository to your account or specified organization
mcp_github_create_branch - Create a new branch in a GitHub repository
mcp_github_list_commits - Get list of commits of a branch in a GitHub repository
mcp_github_list_issues - List issues in a GitHub repository with filtering options
mcp_github_update_issue - Update an existing issue in a GitHub repository
mcp_github_add_issue_comment - Add a comment to an existing issue
mcp_github_search_code - Search for code across GitHub repositories
mcp_github_search_issues - Search for issues and pull requests across GitHub repositories
mcp_github_search_users - Search for users on GitHub
mcp_github_get_issue - Get details of a specific issue in a GitHub repository
```

## Agno Tool Modules

### File System Tools

```python
from agno.tools.file import FileTools

file_tools = FileTools(
    enable_read=True,       # Enable reading files
    enable_write=True,      # Enable writing files
    enable_append=True,     # Enable appending to files
    enable_delete=True,     # Enable deleting files
    enable_list=True,       # Enable listing directory contents
    enable_makedirs=True,   # Enable creating directories
    enable_exists=True,     # Enable checking if files/dirs exist
    enable_copy=True,       # Enable copying files
    enable_move=True,       # Enable moving/renaming files
)
```

### Docker Tools

```python
from agno.tools.docker import DockerTools

docker_tools = DockerTools(
    enable_container_management=True,  # Enable container operations
    enable_image_management=True,      # Enable image operations
    enable_volume_management=True,     # Enable volume operations
    enable_network_management=True,    # Enable network operations
)
```

### Web Search Tools

```python
# DuckDuckGo Search Tools
from agno.tools.duckduckgo import DuckDuckGoTools

ddg_tools = DuckDuckGoTools()

# Tavily Search Tools
from agno.tools.tavily import TavilyTools

tavily_tools = TavilyTools()

# Arxiv Research Tools
from agno.tools.arxiv import ArxivTools

arxiv_tools = ArxivTools()
```

### Data Analysis Tools

```python
# DuckDB Tools for data analysis
from agno.tools.duckdb import DuckDbTools

duckdb_tools = DuckDbTools(
    enable_sql=True,                # Enable SQL queries
    enable_load_csv=True,           # Enable loading CSV files
    enable_load_parquet=True,       # Enable loading Parquet files
    enable_load_json=True,          # Enable loading JSON files
    enable_save_csv=True,           # Enable saving to CSV
    enable_save_parquet=True,       # Enable saving to Parquet
    enable_plot=True,               # Enable plotting results
)

# Calculator Tools for mathematical operations
from agno.tools.calculator import CalculatorTools

calculator_tools = CalculatorTools(
    add=True,                # Addition
    subtract=True,           # Subtraction
    multiply=True,           # Multiplication
    divide=True,             # Division
    exponentiate=True,       # Exponentiation
    factorial=True,          # Factorial
    is_prime=True,           # Primality check
    square_root=True,        # Square root
)
```

### Media Tools

```python
# YouTube Tools
from agno.tools.youtube import YouTubeTools

youtube_tools = YouTubeTools()
```

### Productivity Tools

```python
# Shell Command Tools
from agno.tools.shell import ShellTools

shell_tools = ShellTools(
    enable_exec=True,        # Enable command execution
    enable_cd=True,          # Enable changing directories
    enable_pwd=True,         # Enable printing working directory
)

# JIRA Tools
from agno.tools.jira import JiraTools

jira_tools = JiraTools(
    enable_issue_create=True,           # Enable creating issues
    enable_issue_get=True,              # Enable getting issue details
    enable_issue_update=True,           # Enable updating issues
    enable_issue_delete=True,           # Enable deleting issues
    enable_issue_assign=True,           # Enable assigning issues
    enable_issue_transition=True,       # Enable transitioning issues
    enable_issue_search=True,           # Enable searching for issues
    enable_project_get=True,            # Enable getting project details
)

# Sleep Tools for executing delays
from agno.tools.sleep import SleepTools

sleep_tools = SleepTools()

# Zoom Meeting Tools
from agno.tools.zoom import ZoomTools

zoom_tools = ZoomTools(
    enable_meeting_create=True,         # Enable creating meetings
    enable_meeting_get=True,            # Enable getting meeting details
    enable_meeting_list=True,           # Enable listing meetings
    enable_meeting_delete=True,         # Enable deleting meetings
    enable_recording_list=True,         # Enable listing recordings
)
```

### Social Media Tools

```python
# Reddit Tools
from agno.tools.reddit import RedditTools

reddit_tools = RedditTools(
    enable_subreddit_info=True,         # Enable getting subreddit info
    enable_submission=True,             # Enable submitting posts
)
```

## MCP Specialized Thinking Tools

```
mcp_sequential_thinking_sequential_thinking - Dynamic and reflective problem-solving through structured thoughts
mcp_sequential_thinking_get_thinking_summary - Generate a comprehensive summary of the entire thinking process
mcp_sequential_thinking_clear_thinking_history - Clear all recorded thoughts and reset the server state
mcp_think_mcp_server_think - Think about something without obtaining new information or changing the database
mcp_deeplucid3d_mcp_analyze_problem - Process a problem statement through the full UCPF framework
mcp_deeplucid3d_mcp_creative_exploration - Generate novel perspectives and connections for a topic
mcp_deeplucid3d_mcp_manage_state - Control the state management for UCPF processing
```

## Apple Integration Tools

```
mcp_apple_mcp_contacts - Search and retrieve contacts from Apple Contacts app
mcp_apple_mcp_notes - Search and retrieve notes from Apple Notes app
mcp_apple_mcp_messages - Interact with Apple Messages app (send, read, schedule messages and check unread messages)
mcp_apple_mcp_mail - Interact with Apple Mail app (read unread emails, search emails, and send emails)
mcp_apple_mcp_reminders - Search, create, and open reminders in Apple Reminders app
mcp_apple_mcp_webSearch - Search the web using DuckDuckGo and retrieve content from search results
mcp_apple_mcp_calendar - Search, create, and open calendar events in Apple Calendar app
```
