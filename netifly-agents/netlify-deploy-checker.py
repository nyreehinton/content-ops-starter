#!/usr/bin/env python3
"""
Netlify Deploy Status Checker

A practical implementation of a Netlify deploy status checker using Agno framework.
This script checks the deployment status of a specified Netlify site and takes
actions based on whether the deployment succeeded or failed.
"""

import os
import sys
import time
import asyncio
import argparse
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Verify environment variables are loaded
required_env_vars = {
    "OPENAI_API_KEY": "Please set the OPENAI_API_KEY environment variable in your .env file"
}

for var, message in required_env_vars.items():
    if not os.getenv(var):
        raise ValueError(message)

# Import Agno framework components
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.duckduckgo import DuckDuckGoTools
from agno.tools.exa import ExaTools

class NetlifyDeployChecker:
    """
    Checks the deployment status of a Netlify site and performs actions based on the result.
    """
    def __init__(self, site_name, max_retries=12, retry_interval=10, verbose=False):
        """
        Initialize the Netlify deploy checker.
        
        Args:
            site_name (str): Netlify site name (e.g., 'nyreehinton')
            max_retries (int): Maximum number of status check attempts
            retry_interval (int): Seconds to wait between retries
            verbose (bool): Whether to print verbose output
        """
        self.site_name = site_name
        self.max_retries = max_retries
        self.retry_interval = retry_interval
        self.verbose = verbose
        
        # Initialize the agent with web search capabilities
        self.agent = Agent(
            model=OpenAIChat(id="gpt-4o"),
            tools=[DuckDuckGoTools()],
            instructions=[
                "You are a Netlify deploy status checker that extracts information from deploy pages",
                "When asked about a Netlify deploy, search for the most recent information",
                "Extract the deploy status precisely - Published, Failed, or In progress",
                "Be concise in your responses, focus only on the status"
            ],
            show_tool_calls=verbose,
            markdown=True
        )
        
        self.deploy_url = f"https://app.netlify.com/sites/{self.site_name}/deploys"
        
        if self.verbose:
            print(f"Initialized deploy checker for site: {self.site_name}")
            print(f"Deploy URL to check: {self.deploy_url}")
    
    async def check_deploy_status(self):
        """
        Check the deployment status of the Netlify site.
        
        Returns:
            dict: Status information including success flag, status string, and optional error
        """
        for attempt in range(1, self.max_retries + 1):
            try:
                if self.verbose:
                    print(f"\nAttempt {attempt}/{self.max_retries} to check deploy status...")
                
                query = f"What is the latest deploy status for the Netlify site at {self.deploy_url}? Extract only the status: Published, Failed, or In progress. Just give me the status, nothing else."
                
                # Run the agent to check the status
                response = await self.agent.arun(query)
                
                # Extract the status from the response content
                status_text = response.content.strip().lower()
                
                if self.verbose:
                    print(f"Raw status response: {status_text}")
                
                # Check for status keywords
                if "published" in status_text or "success" in status_text:
                    if self.verbose:
                        print("✅ Deploy published successfully!")
                    return {"status": "published", "success": True, "attempt": attempt}
                
                elif "failed" in status_text or "error" in status_text:
                    if self.verbose:
                        print("❌ Deploy failed!")
                    return {"status": "failed", "success": False, "attempt": attempt}
                
                elif "in progress" in status_text or "building" in status_text or "processing" in status_text:
                    if self.verbose:
                        print(f"⏳ Deploy still in progress. Waiting {self.retry_interval} seconds before checking again...")
                    time.sleep(self.retry_interval)
                    continue
                
                else:
                    if self.verbose:
                        print(f"⚠️ Unrecognized status: {status_text}. Retrying...")
                    time.sleep(self.retry_interval)
            
            except Exception as e:
                if self.verbose:
                    print(f"❌ Error checking deploy status: {e}")
                time.sleep(self.retry_interval)
        
        # If we've exhausted all retries
        if self.verbose:
            print("❌ Max retries exceeded without determining deploy status.")
        return {"status": "unknown", "success": False, "error": "Max retries exceeded", "attempt": self.max_retries}

async def run_post_deploy_tasks(site_name):
    """
    Example function that runs tasks after a successful deployment.
    
    Args:
        site_name (str): Netlify site name
    """
    print(f"\n🚀 Running post-deploy tasks for {site_name}...")
    
    # Here you would implement your specific post-deploy tasks
    # Examples:
    # - Send notification emails
    # - Update DNS records
    # - Refresh CDN caches
    # - Run post-deploy tests
    # - Update status dashboards
    
    print("✅ Post-deploy tasks completed successfully!")

async def handle_failed_deploy(site_name, status_result):
    """
    Example function that handles a failed deployment.
    
    Args:
        site_name (str): Netlify site name
        status_result (dict): Status check result
    """
    print(f"\n⚠️ Handling failed deploy for {site_name}...")
    
    # Here you would implement your specific failure handling logic
    # Examples:
    # - Send alerts to the team
    # - Create incident reports
    # - Roll back to previous working deploy
    # - Analyze build logs
    
    print(f"📝 Deploy failed after {status_result['attempt']} status checks")
    if 'error' in status_result:
        print(f"Error: {status_result['error']}")
    
    print("✅ Failure handling completed!")

async def main():
    """Main entry point for the script."""
    parser = argparse.ArgumentParser(description='Check Netlify deploy status and run post-deploy tasks')
    parser.add_argument('site_name', type=str, help='Netlify site name (e.g., "nyreehinton")')
    parser.add_argument('--retries', type=int, default=12, help='Maximum number of status check attempts')
    parser.add_argument('--interval', type=int, default=10, help='Seconds to wait between retries')
    parser.add_argument('--verbose', action='store_true', help='Enable verbose output')
    
    args = parser.parse_args()
    
    print(f"🔍 Checking deploy status for Netlify site: {args.site_name}")
    
    # Create the deploy checker
    checker = NetlifyDeployChecker(
        site_name=args.site_name,
        max_retries=args.retries,
        retry_interval=args.interval,
        verbose=args.verbose
    )
    
    # Check deploy status
    status_result = await checker.check_deploy_status()
    
    # Take action based on deploy status
    if status_result["success"]:
        await run_post_deploy_tasks(args.site_name)
    else:
        await handle_failed_deploy(args.site_name, status_result)
    
    return 0 if status_result["success"] else 1

if __name__ == "__main__":
    exit_code = asyncio.run(main())
    sys.exit(exit_code)
