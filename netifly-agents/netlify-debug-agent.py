#!/usr/bin/env python3

from dotenv import load_dotenv
import os
import sys
import json
import subprocess
import asyncio
from pathlib import Path
from textwrap import dedent

# Load environment variables from .env file
load_dotenv()

# Verify environment variables
required_env_vars = {
    "OPENAI_API_KEY": "Please set the OPENAI_API_KEY environment variable in your .env file",
}

for var, message in required_env_vars.items():
    if not os.getenv(var):
        raise ValueError(message)

from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.file import FileTools
from agno.tools.shell import ShellTools

# Create a custom tools class for Netlify-specific operations
class NetlifyTools:
    def __init__(self):
        self.name = "netlify_tools"
    
    def check_netlify_status(self) -> str:
        """
        Check the current status of Netlify sites linked to this account.
        
        Returns:
            str: Status information about the linked Netlify sites.
        """
        try:
            result = subprocess.run(["netlify", "status"], 
                                   capture_output=True, text=True, check=False)
            return result.stdout if result.returncode == 0 else f"Error: {result.stderr}"
        except Exception as e:
            return f"Error executing netlify status: {str(e)}"
    
    def get_build_logs(self, site_name: str = None) -> str:
        """
        Get the most recent build logs for a site.
        
        Args:
            site_name (str, optional): The name of the site to check. If None, uses the current linked site.
            
        Returns:
            str: The build logs for the specified site.
        """
        cmd = ["netlify", "sites:list"]
        if site_name:
            cmd = ["netlify", "logs", "--site", site_name]
        else:
            cmd = ["netlify", "logs"]
            
        try:
            result = subprocess.run(cmd, capture_output=True, text=True, check=False)
            return result.stdout if result.returncode == 0 else f"Error: {result.stderr}"
        except Exception as e:
            return f"Error fetching logs: {str(e)}"
    
    def check_netlify_environment(self) -> str:
        """
        Check the Netlify environment settings for the current site.
        
        Returns:
            str: Environment variables and settings for the current site.
        """
        try:
            result = subprocess.run(["netlify", "env:list"], 
                                   capture_output=True, text=True, check=False)
            return result.stdout if result.returncode == 0 else f"Error: {result.stderr}"
        except Exception as e:
            return f"Error checking environment: {str(e)}"
    
    def clear_cache_and_deploy(self, site_name: str = None) -> str:
        """
        Clear the build cache and redeploy the site.
        
        Args:
            site_name (str, optional): The name of the site to redeploy. If None, uses the current linked site.
            
        Returns:
            str: Results of the cache clearing and deployment.
        """
        cmd = ["netlify", "deploy", "--build", "--clear"]
        if site_name:
            cmd.extend(["--site", site_name])
            
        try:
            result = subprocess.run(cmd, capture_output=True, text=True, check=False)
            return result.stdout if result.returncode == 0 else f"Error: {result.stderr}"
        except Exception as e:
            return f"Error clearing cache and deploying: {str(e)}"
    
    def analyze_netlify_config(self, config_path: str = "netlify.toml") -> str:
        """
        Analyze the netlify.toml configuration file for common issues.
        
        Args:
            config_path (str): Path to the netlify.toml file.
            
        Returns:
            str: Analysis of the netlify.toml configuration.
        """
        if not os.path.exists(config_path):
            return f"Error: {config_path} not found"
            
        try:
            with open(config_path, "r") as f:
                config_content = f.read()
                
            result = {
                "config_content": config_content,
                "analysis": {
                    "has_build_command": "command =" in config_content,
                    "has_publish_directory": "publish =" in config_content,
                    "has_environment_variables": "[build.environment]" in config_content,
                    "has_redirects": "[[redirects]]" in config_content,
                    "has_headers": "[[headers]]" in config_content,
                    "has_plugins": "[[plugins]]" in config_content,
                }
            }
            return json.dumps(result, indent=2)
        except Exception as e:
            return f"Error analyzing config: {str(e)}"
    
    def run_local_build(self) -> str:
        """
        Run a local build using Netlify CLI to simulate the Netlify environment.
        
        Returns:
            str: Results of the local build process.
        """
        try:
            result = subprocess.run(["netlify", "build"], 
                                   capture_output=True, text=True, check=False)
            return result.stdout if result.returncode == 0 else f"Error: {result.stderr}"
        except Exception as e:
            return f"Error running local build: {str(e)}"
    
    def test_deploy_preview(self) -> str:
        """
        Test a deploy preview without publishing to production.
        
        Returns:
            str: Results of the deploy preview test.
        """
        try:
            result = subprocess.run(["netlify", "deploy", "--build"], 
                                   capture_output=True, text=True, check=False)
            return result.stdout if result.returncode == 0 else f"Error: {result.stderr}"
        except Exception as e:
            return f"Error testing deploy preview: {str(e)}"

def create_netlify_debug_agent():
    """Create and configure the Netlify debug agent."""
    netlify_tools = NetlifyTools()
    
    # Create an agent with specific tools for Netlify debugging
    agent = Agent(
        name="Netlify Debug Agent",
        model=OpenAIChat(id="gpt-4o"),
        description=dedent("""
            You are a specialized Netlify debugging agent. Your purpose is to help users diagnose and fix
            issues with Netlify builds, deployments, and configurations. You have deep expertise in:
            
            1. Common Netlify build failures and their solutions
            2. Configuration troubleshooting using netlify.toml
            3. Dependency management in various frameworks (React, Vue, Next.js, etc.)
            4. Environment variable issues and optimization
            5. Cache-related problems and solutions
            6. File system and path issues specific to Netlify
            7. Resource limitations and optimization techniques
        """),
        instructions=[
            "ALWAYS use your tools to gather information BEFORE asking the user questions",
            "Proactively check netlify.toml, build logs, and Netlify environment settings",
            "When troubleshooting, first analyze the configuration and logs yourself",
            "Identify patterns in build failures without requiring user input",
            "Provide specific, actionable advice based on YOUR analysis, not user-provided information",
            "Offer multiple potential solutions when appropriate",
            "Explain the reasoning behind your recommendations",
            "If you need clarification from the user, first clearly state what you've already checked and found"
        ],
        tools=[
            # Custom Netlify tools
            netlify_tools.check_netlify_status,
            netlify_tools.get_build_logs,
            netlify_tools.check_netlify_environment,
            netlify_tools.clear_cache_and_deploy,
            netlify_tools.analyze_netlify_config,
            netlify_tools.run_local_build,
            netlify_tools.test_deploy_preview,
            
            # File operations tools
            FileTools(
                base_dir=None,  # Use default working directory
                read_files=True,
                save_files=True,
                list_files=True
            ),
            
            # Shell command tools
            ShellTools(base_dir=None)  # Use default working directory
        ],
        markdown=True,
        show_tool_calls=True
    )
    
    return agent

def run_cli_interaction(agent, initial_prompt=None):
    """Run an interactive CLI session with the agent."""
    print("=" * 50)
    print("Netlify Debug Agent CLI")
    print("Type 'exit' or 'quit' to end the session")
    print("=" * 50)
    
    # First, gather environment information proactively
    print("\nGathering Netlify environment information...")
    
    # If an initial prompt was provided, use it with the context data
    if initial_prompt:
        context_message = f"{initial_prompt}\n\nBefore responding, please proactively check the Netlify environment and configuration to gather context. Don't ask me for information that you can find yourself using your tools."
    else:
        context_message = "Please analyze my Netlify setup and identify any potential issues or areas for improvement. Use your tools to gather information before responding."
    
    print("\n[User]: " + context_message)
    print("Processing...")
    
    try:
        run_response = agent.run(context_message)
        response = run_response.content if hasattr(run_response, 'content') else str(run_response)
        print("\n[Agent]: " + str(response))
    except Exception as e:
        print(f"\nError during initial analysis: {str(e)}")
    
    # Start interactive loop
    while True:
        try:
            print("\n" + "-" * 50)
            user_input = input("[User]: ")
            
            # Check for exit command
            if user_input.lower() in ('exit', 'quit', 'q'):
                print("Exiting Netlify Debug Agent. Goodbye!")
                break
                
            # Remind the agent to use tools proactively
            enhanced_input = f"{user_input}\n\nRemember to use your tools to gather information rather than asking me."
            
            # Send message to agent
            print("Processing...")
            run_response = agent.run(enhanced_input)
            response = run_response.content if hasattr(run_response, 'content') else str(run_response)
            print("\n[Agent]: " + str(response))
            
        except KeyboardInterrupt:
            print("\nExiting Netlify Debug Agent. Goodbye!")
            break
        except Exception as e:
            print(f"\nError: {str(e)}")
            print("Please try again or type 'exit' to quit.")

# Main entry point
if __name__ == "__main__":
    # Get the issue description from command line arguments
    issue_description = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else None
    
    # Create our debug agent
    netlify_debug_agent = create_netlify_debug_agent()
    
    # Start the CLI interaction
    initial_message = None
    if issue_description:
        initial_message = f"I'm having an issue with my Netlify deployment: {issue_description}"
    
    try:
        run_cli_interaction(netlify_debug_agent, initial_message)
    except KeyboardInterrupt:
        print("\nExiting Netlify Debug Agent. Goodbye!")
        sys.exit(0)
