#!/usr/bin/env python3
"""
Multi-Agent Runner
-----------------
A unified command-line interface for running various agent types together,
including the Netlify Debug Agent with verification capabilities.
"""

import os
import sys
import argparse
from typing import List, Dict, Any, Optional
import asyncio
import importlib.util

# Agno imports
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.toolkit import Toolkit
from agno.team.team import Team

# Optional imports with fallbacks
tools_available = {}

# Define dummy tool classes for missing packages
class DummyTool:
    def __init__(self, **kwargs):
        tool_name = self.__class__.__name__.replace("Dummy", "")
        print(f"Warning: {tool_name} is not available. Some functionality will be limited.")

# Try to import various tools
try:
    from agno.tools.docker import DockerTools
    tools_available["docker"] = True
except ImportError:
    print("Docker module not available. DockerTools will be disabled.")
    class DockerTools(DummyTool): pass
    tools_available["docker"] = False

try:
    from agno.tools.shell import ShellTools
    tools_available["shell"] = True
except ImportError:
    print("Shell tools not available.")
    class ShellTools(DummyTool): pass
    tools_available["shell"] = False

try:
    from agno.tools.file import FileTools
    tools_available["file"] = True
except ImportError:
    print("File tools not available.")
    class FileTools(DummyTool): pass
    tools_available["file"] = False

try:
    from agno.tools.duckduckgo import DuckDuckGoTools
    tools_available["duckduckgo"] = True
except ImportError:
    print("DuckDuckGo tools not available.")
    class DuckDuckGoTools(DummyTool): pass
    tools_available["duckduckgo"] = False

try:
    from agno.tools.calculator import CalculatorTools
    tools_available["calculator"] = True
except ImportError:
    print("Calculator tools not available.")
    class CalculatorTools(DummyTool): pass
    tools_available["calculator"] = False

try:
    from agno.tools.tavily import TavilyTools
    tools_available["tavily"] = True
except ImportError:
    print("Tavily tools not available. Install with 'pip install tavily-python'")
    class TavilyTools(DummyTool): pass
    tools_available["tavily"] = False

try:
    from agno.tools.arxiv import ArxivTools
    tools_available["arxiv"] = True
except ImportError:
    print("ArXiv tools not available.")
    class ArxivTools(DummyTool): pass
    tools_available["arxiv"] = False

try:
    from agno.tools.youtube import YouTubeTools
    tools_available["youtube"] = True
except ImportError:
    print("YouTube tools not available.")
    class YouTubeTools(DummyTool): pass
    tools_available["youtube"] = False

try:
    from agno.tools.jira import JiraTools
    tools_available["jira"] = True
except ImportError:
    print("JIRA tools not available.")
    class JiraTools(DummyTool): pass
    tools_available["jira"] = False

try:
    from agno.tools.sleep import SleepTools
    tools_available["sleep"] = True
except ImportError:
    print("Sleep tools not available.")
    class SleepTools(DummyTool): pass
    tools_available["sleep"] = False

try:
    from agno.tools.zoom import ZoomTools
    tools_available["zoom"] = True
except ImportError:
    print("Zoom tools not available.")
    class ZoomTools(DummyTool): pass
    tools_available["zoom"] = False

try:
    from agno.tools.reddit import RedditTools
    tools_available["reddit"] = True
except ImportError:
    print("Reddit tools not available.")
    class RedditTools(DummyTool): pass
    tools_available["reddit"] = False

# Define the WebScreenshotTools class
class WebScreenshotTools(Toolkit):
    def screenshot(self, url, viewport_sizes=["mobile", "tablet", "desktop"]):
        """Capture screenshots of a URL at different viewport sizes"""
        # Implementation using Playwright with shell commands
        import subprocess
        import os
        import json
        import datetime
        
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        results_dir = os.path.join(os.getcwd(), "screenshots", timestamp)
        os.makedirs(results_dir, exist_ok=True)
        
        results = {}
        for size in viewport_sizes:
            width = "375" if size == "mobile" else "768" if size == "tablet" else "1440"
            height = "812" if size == "mobile" else "1024" if size == "tablet" else "900"
            
            output_path = os.path.join(results_dir, f"{size}.png")
            
            # Using playwright to take screenshot via shell command
            cmd = f"""
            npx playwright screenshot --viewport="{width},{height}" "{url}" "{output_path}"
            """
            
            try:
                subprocess.run(cmd, shell=True, check=True)
                results[size] = {
                    "path": output_path,
                    "success": True
                }
            except subprocess.CalledProcessError:
                results[size] = {
                    "path": None,
                    "success": False,
                    "error": "Failed to capture screenshot"
                }
        
        return {
            "timestamp": timestamp,
            "url": url,
            "screenshots": results,
            "results_dir": results_dir
        }
    
    def performance_test(self, url):
        """Run Lighthouse performance tests"""
        import subprocess
        import os
        import json
        import datetime
        
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        results_dir = os.path.join(os.getcwd(), "performance", timestamp)
        os.makedirs(results_dir, exist_ok=True)
        
        output_path = os.path.join(results_dir, "lighthouse-report.json")
        
        cmd = f"""
        npx lighthouse "{url}" --output=json --output-path="{output_path}" --chrome-flags="--headless"
        """
        
        try:
            subprocess.run(cmd, shell=True, check=True)
            return {
                "timestamp": timestamp,
                "url": url,
                "report_path": output_path,
                "success": True
            }
        except subprocess.CalledProcessError:
            return {
                "timestamp": timestamp,
                "url": url,
                "success": False,
                "error": "Failed to run performance test"
            }
    
    def html_validation(self, url):
        """Validate HTML structure and accessibility"""
        import subprocess
        import os
        import json
        import datetime
        
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        results_dir = os.path.join(os.getcwd(), "validation", timestamp)
        os.makedirs(results_dir, exist_ok=True)
        
        output_path = os.path.join(results_dir, "validation-report.json")
        
        # Using html-validator CLI
        cmd = f"""
        npx html-validator "{url}" --format=json --outfile="{output_path}"
        """
        
        try:
            subprocess.run(cmd, shell=True, check=True)
            return {
                "timestamp": timestamp,
                "url": url,
                "report_path": output_path,
                "success": True
            }
        except subprocess.CalledProcessError:
            return {
                "timestamp": timestamp,
                "url": url,
                "success": False,
                "error": "Failed to run HTML validation"
            }


# Create agent factory functions
def create_netlify_debug_team(model_id="gpt-4o") -> Agent:
    """Create a multi-agent Netlify debugging team with empirical verification"""
    
    # Set up tools based on what's available
    build_tools = []
    
    # Only add Docker if it's available and working
    docker_available = tools_available.get("docker", False)
    if docker_available:
        try:
            # Test if Docker is actually running
            docker_tool = DockerTools(enable_container_management=True)
            build_tools.append(docker_tool)
        except Exception as e:
            print(f"Docker tools unavailable: {str(e)}")
            docker_available = False
    
    # Always add shell and file tools
    # Use simple initialization to avoid parameter issues with different versions
    build_tools.append(ShellTools())
    build_tools.append(FileTools())
    
    # 1. Build Diagnostic Agent
    build_diagnostic_agent = Agent(
        name="Netlify Build Diagnostics",
        model=OpenAIChat(id=model_id),
        tools=build_tools,
        instructions=[
            "Analyze Netlify build logs without relying on predefined rules",
            "Create isolated test environments to replicate build issues",
            "Identify dependency conflicts and version mismatches",
            "Suggest build configuration adjustments based on error patterns"
        ],
        show_tool_calls=True,
        markdown=True
    )
    
    # 2. Deployment Verification Agent
    verification_agent = Agent(
        name="Netlify Deployment Verifier",
        model=OpenAIChat(id=model_id),
        tools=[
            ShellTools(),
            FileTools(),
            WebScreenshotTools()
        ],
        instructions=[
            "Visit deployed Netlify site and capture visual evidence",
            "Take screenshots at multiple viewport sizes",
            "Run basic accessibility and performance checks",
            "Compare with expected site appearance and functionality",
            "Store empirical validation results as evidence"
        ],
        show_tool_calls=True,
        markdown=True
    )
    
    # 3. Coordinator Agent - This will serve as our team leader
    coordinator_agent = Agent(
        name="Netlify Debug Coordinator",
        model=OpenAIChat(id=model_id),
        tools=[FileTools()],  # For storing results
        instructions=[
            "You are the lead of a team that diagnoses and fixes Netlify build issues.",
            "Your team includes a Build Diagnostics specialist and a Deployment Verification specialist.",
            "Coordinate build diagnostics and deployment verification",
            "Maintain knowledge base of issues and solutions",
            "Generate comprehensive reports with visual evidence",
            "Learn from past fixes to improve future recommendations",
            "Only confirm fixes when empirically validated"
        ],
        team=[build_diagnostic_agent, verification_agent],
        show_tool_calls=True,
        markdown=True
    )
    
    # Return just the coordinator agent, which has the team members attached
    return coordinator_agent

def create_web_research_team(model_id="gpt-4o") -> Team:
    """Create a multi-agent web research team"""
    
    arxiv_agent = Agent(
        name="Academic Research",
        model=OpenAIChat(id=model_id),
        tools=[ArxivTools()],
        show_tool_calls=True,
        markdown=True
    )
    
    web_searcher = Agent(
        name="Web Search Agent",
        model=OpenAIChat(id=model_id),
        tools=[DuckDuckGoTools()],
        instructions=[
            "Perform focused web searches using relevant keywords",
            "Filter results for credibility and recency",
            "Extract key information and main points"
        ],
        show_tool_calls=True,
        markdown=True
    )
    
    tavily_agent = Agent(
        name="Precision Search",
        model=OpenAIChat(id=model_id),
        tools=[TavilyTools()],
        show_tool_calls=True,
        markdown=True
    )
    
    youtube_agent = Agent(
        name="YouTube Research",
        model=OpenAIChat(id=model_id),
        tools=[YouTubeTools()],
        description="Obtain the captions of a YouTube video and extract relevant information",
        show_tool_calls=True,
        markdown=True
    )
    
    return Team(
        name="Web Research Team",
        agents=[web_searcher, arxiv_agent, tavily_agent, youtube_agent],
        description="A multi-agent team for comprehensive web research"
    )

def create_utility_team(model_id="gpt-4o") -> Team:
    """Create a multi-agent utility team"""
    
    calculator_agent = Agent(
        name="Calculator Agent",
        model=OpenAIChat(id=model_id),
        tools=[CalculatorTools(enable_all=True)],
        show_tool_calls=True,
        markdown=True
    )
    
    shell_agent = Agent(
        name="Shell Command Agent",
        model=OpenAIChat(id=model_id),
        tools=[ShellTools()],
        show_tool_calls=True,
        markdown=True
    )
    
    file_agent = Agent(
        name="File System Agent",
        model=OpenAIChat(id=model_id),
        tools=[FileTools()],
        show_tool_calls=True,
        markdown=True
    )
    
    return Team(
        name="Utility Team",
        agents=[calculator_agent, shell_agent, file_agent],
        description="A multi-agent team for utility operations"
    )

def create_productivity_team(model_id="gpt-4o") -> Team:
    """Create a multi-agent productivity team"""
    
    jira_agent = Agent(
        name="JIRA Agent",
        model=OpenAIChat(id=model_id),
        tools=[JiraTools()],
        show_tool_calls=True,
        markdown=True
    )
    
    zoom_agent = Agent(
        name="Zoom Meeting Manager",
        model=OpenAIChat(id=model_id),
        tools=[ZoomTools()],
        instructions=[
            "You are an expert at managing Zoom meetings using the Zoom API.",
            "You can schedule, get details, list, and delete meetings, and get recordings."
        ],
        show_tool_calls=True,
        markdown=True
    )
    
    return Team(
        name="Productivity Team",
        agents=[jira_agent, zoom_agent],
        description="A multi-agent team for productivity tools"
    )

def create_meta_agent(teams, model_id="gpt-4o") -> Agent:
    """Create a meta-agent that can delegate to all other agent teams"""
    
    return Agent(
        name="Meta Agent",
        model=OpenAIChat(id=model_id),
        team=teams,
        instructions=[
            "You are a meta-agent that can delegate tasks to specialized agent teams",
            "Analyze user requests and direct them to the appropriate team",
            "Coordinate responses from multiple teams when needed",
            "Provide a unified response that integrates information from all teams"
        ],
        show_tool_calls=True,
        markdown=True
    )

def netlify_debug_workflow(site_url, build_logs, agent):
    """Run the Netlify debug workflow with the agent"""
    
    # Since we now have a coordinator agent with team members
    # We can ask it directly to analyze the logs and provide a report
    
    prompt = f"""
    I need help diagnosing and fixing issues with a Netlify site.
    
    Site URL: {site_url}
    
    Here are the build logs:
    ```
    {build_logs[:5000]}  # Truncate if too long
    ```
    
    Please analyze these logs, identify any issues, propose fixes, and verify if the site is working correctly.
    Your response should include visual evidence and verification of the fixes.
    """
    
    return agent.get_response(prompt)

def main():
    parser = argparse.ArgumentParser(description="Multi-Agent Runner")
    parser.add_argument("--all", action="store_true", help="Run all agent teams")
    parser.add_argument("--netlify", action="store_true", help="Run Netlify debug team")
    parser.add_argument("--web", action="store_true", help="Run web research team")
    parser.add_argument("--utility", action="store_true", help="Run utility team")
    parser.add_argument("--productivity", action="store_true", help="Run productivity team")
    parser.add_argument("--model", type=str, default="gpt-4o", help="Model ID to use (default: gpt-4o)")
    parser.add_argument("--netlify-url", type=str, help="Netlify site URL for debugging")
    parser.add_argument("--netlify-logs", type=str, help="Path to Netlify build logs")
    parser.add_argument("--interactive", action="store_true", help="Run in interactive mode")
    
    args = parser.parse_args()
    
    # Determine which teams/agents to create
    agents_to_create = []
    if args.all or args.netlify:
        agents_to_create.append(("netlify", create_netlify_debug_team(args.model)))
    if args.all or args.web:
        try:
            agents_to_create.append(("web", create_web_research_team(args.model)))
        except Exception as e:
            print(f"Error creating web research team: {str(e)}")
    if args.all or args.utility:
        try:
            agents_to_create.append(("utility", create_utility_team(args.model)))
        except Exception as e:
            print(f"Error creating utility team: {str(e)}")
    if args.all or args.productivity:
        try:
            agents_to_create.append(("productivity", create_productivity_team(args.model)))
        except Exception as e:
            print(f"Error creating productivity team: {str(e)}")
    
    if not agents_to_create:
        parser.print_help()
        return
    
    # Collect agents and teams
    agents = [agent for _, agent in agents_to_create]
    agent_dict = {name: agent for name, agent in agents_to_create}
    
    # Create meta-agent if we have multiple agents
    meta_agent = None
    if len(agents) > 1:
        try:
            meta_agent = create_meta_agent(agents, args.model)
        except Exception as e:
            print(f"Error creating meta-agent: {str(e)}")
            # If meta-agent fails, just use the first agent
            meta_agent = agents[0]
    else:
        meta_agent = agents[0]
    
    # Run Netlify debug workflow if specified
    if (args.all or args.netlify) and args.netlify_url and args.netlify_logs:
        netlify_agent = agent_dict["netlify"]
        with open(args.netlify_logs, 'r') as f:
            build_logs = f.read()
        
        print(f"Running Netlify debug workflow for {args.netlify_url}...")
        try:
            report = netlify_debug_workflow(args.netlify_url, build_logs, netlify_agent)
            print("\nDebug Report:")
            print(report)
        except Exception as e:
            print(f"Error in Netlify debug workflow: {str(e)}")
    
    # Run in interactive mode if specified
    if args.interactive:
        print("\nMulti-Agent Runner - Interactive Mode")
        print("------------------------------------")
        print("Type 'exit' to quit")
        print("Type 'agents' to list available agents")
        
        while True:
            user_input = input("\nUser: ")
            if user_input.lower() == 'exit':
                break
            elif user_input.lower() == 'agents':
                print("\nAvailable Agents:")
                for name, agent in agents_to_create:
                    print(f"- {name}: {agent.name}")
                continue
            
            try:
                # Try different methods since API might vary in different versions
                if hasattr(meta_agent, "print_response"):
                    meta_agent.print_response(user_input, markdown=True)
                elif hasattr(meta_agent, "generate_response"):
                    response = meta_agent.generate_response(user_input)
                    print(f"\nAgent: {response.content}")
                else:
                    # Fallback option
                    result = meta_agent.get_response(user_input)
                    print(f"\nAgent Response: {result}")
            except Exception as e:
                print(f"Error: {str(e)}")
                print("Try another command or type 'exit' to quit.")

if __name__ == "__main__":
    main() 