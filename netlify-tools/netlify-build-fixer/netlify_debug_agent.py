#!/usr/bin/env python3
"""
Netlify Debug Agent
------------------
An AI-powered assistant that helps diagnose and fix Netlify build and deployment issues
through a conversational interface.
"""

import os
import sys
import json
import asyncio
import subprocess
from pathlib import Path

# Try to load environment variables from .env file
try:
    from dotenv import load_dotenv
    # Try to load from repo root, then from current directory
    script_path = Path(__file__).resolve()
    repo_root = script_path.parent.parent.parent
    
    if (repo_root / ".env").exists():
        load_dotenv(repo_root / ".env")
    else:
        load_dotenv()  # Try to load from current directory
except ImportError:
    print("Warning: python-dotenv not installed. Environment variables must be set manually.")

class NetlifyDebugToolkit:
    """Toolkit for interfacing with the Netlify CLI."""
    
    def __init__(self, cache_results=True):
        """Initialize the toolkit."""
        self.cache_results = cache_results
        self.cache = {}
        
        # Check if netlify CLI is installed
        try:
            version = subprocess.run(["netlify", "--version"], capture_output=True, text=True)
            self.netlify_cli_installed = version.returncode == 0
            if self.netlify_cli_installed:
                self.netlify_version = version.stdout.strip()
            else:
                self.netlify_version = "Not installed"
        except Exception:
            self.netlify_cli_installed = False
            self.netlify_version = "Not installed"
        
    async def _run_command(self, cmd_args):
        """Run a command and return its output."""
        try:
            result = subprocess.run(cmd_args, capture_output=True, text=True)
            if result.returncode != 0:
                return f"Error: {result.stderr}"
            return result.stdout
        except Exception as e:
            return f"Error: {str(e)}"
    
    async def diagnose_build(self, site_name=None, build_id=None):
        """Diagnose build issues using Netlify CLI."""
        if not self.netlify_cli_installed:
            return "Netlify CLI is not installed. Please install it with: npm install -g netlify-cli"
        
        # Get site status
        status = await self._run_command(["netlify", "status"])
        
        # Get site info
        if site_name:
            site_info = await self._run_command(["netlify", "sites:list"])
        else:
            site_info = "No site name provided. Use site_name parameter to get specific site information."
            
        return f"Netlify Status:\n{status}\n\nSite Information:\n{site_info}"
    
    async def validate_config(self, config_path=None):
        """Validate Netlify configuration file."""
        netlify_toml = config_path or "netlify.toml"
        
        if os.path.exists(netlify_toml):
            try:
                with open(netlify_toml, 'r') as f:
                    content = f.read()
                return f"Found netlify.toml file:\n\n{content}"
            except Exception as e:
                return f"Error reading netlify.toml: {str(e)}"
        else:
            return "netlify.toml file not found. Create one to configure your Netlify site."
    
    async def fix_common_issues(self, auto_apply=False):
        """Suggest fixes for common Netlify build issues."""
        if not self.netlify_cli_installed:
            return "Netlify CLI is not installed. Please install it with: npm install -g netlify-cli"
        
        # Get site status
        status = await self._run_command(["netlify", "status"])
        
        common_issues = """
Common Netlify build issues and fixes:

1. Missing dependencies:
   - Check package.json for required dependencies
   - Run 'npm install' before deploying

2. Build command errors:
   - Verify build command in netlify.toml matches your project
   - Test build locally with the same command

3. Environment variables:
   - Ensure all required environment variables are set in Netlify UI
   - Use .env files for local development only

4. Node.js version:
   - Specify Node.js version in .nvmrc or netlify.toml
   - Use a version compatible with your dependencies

5. Publish directory:
   - Confirm publish directory in netlify.toml matches your build output
   - Typically 'public/', 'dist/', or 'build/'

Current Site Status:
{status}
"""
        return common_issues.format(status=status)
    
    async def check_dependencies(self):
        """Check project dependencies for issues."""
        # Check for package.json
        if os.path.exists("package.json"):
            try:
                with open("package.json", 'r') as f:
                    package_json = json.load(f)
                deps = package_json.get("dependencies", {})
                dev_deps = package_json.get("devDependencies", {})
                return f"Found {len(deps)} dependencies and {len(dev_deps)} dev dependencies in package.json"
            except Exception as e:
                return f"Error reading package.json: {str(e)}"
        else:
            return "package.json not found. Is this a Node.js project?"
    
    async def analyze_build_logs(self, log_path=None, build_id=None):
        """Analyze build logs for issues."""
        if not self.netlify_cli_installed:
            return "Netlify CLI is not installed. Please install it with: npm install -g netlify-cli"
        
        # Show logs help
        logs_help = await self._run_command(["netlify", "logs", "--help"])
        
        tips = """
To view your build logs, use one of these commands:

netlify logs:deploy   - Shows deploy logs
netlify logs:function - Shows function logs

For more detailed logs, use the Netlify UI at https://app.netlify.com

Common log issues to look for:
1. Failed installations of npm packages
2. Build process errors
3. Memory or timeout errors
4. Environment variable access issues
5. File permission problems

Netlify CLI Logs Commands:
{logs_help}
"""
        return tips.format(logs_help=logs_help)
    
    async def test_local_build(self):
        """Test build locally using Netlify CLI."""
        if not self.netlify_cli_installed:
            return "Netlify CLI is not installed. Please install it with: npm install -g netlify-cli"
        
        # Show build command help
        build_help = await self._run_command(["netlify", "build", "--help"])
        
        return f"""
To test your build locally with Netlify CLI:

netlify build

This runs the build in an environment that replicates Netlify's build environment.

Netlify Build Command Help:
{build_help}
"""
    
    async def get_environment_info(self):
        """Get information about the build environment."""
        # Get system info
        system = await self._run_command(["uname", "-a"])
        
        # Get Node.js version
        try:
            node = await self._run_command(["node", "--version"])
        except:
            node = "Node.js not found"
            
        # Get npm version
        try:
            npm = await self._run_command(["npm", "--version"])
        except:
            npm = "npm not found"
            
        # Get Netlify CLI version
        netlify = self.netlify_version
        
        # Get Python version
        python = sys.version
        
        return f"""
Environment Information:

System: {system.strip()}
Node.js: {node.strip()}
npm: {npm.strip()}
Netlify CLI: {netlify}
Python: {python.split()[0]}

Netlify builds typically use:
- Ubuntu 20.04
- Node.js 16 (configurable)
- Ruby, Python, Go available
- Limited build minutes
"""
    
    async def optimize_build_performance(self, auto_apply=False):
        """Provide optimization suggestions for Netlify builds."""
        return """
Netlify Build Optimization Tips:

1. Cache dependencies:
   - Use Netlify caching headers in netlify.toml
   - Add cache directories to your build configuration

2. Optimize build commands:
   - Use build tools with incremental compilation
   - Consider using Netlify Build Plugins

3. Reduce build size:
   - Remove unnecessary dependencies
   - Optimize images and assets
   - Use code splitting

4. Parallel processing:
   - Run tasks in parallel when possible
   - Use tools like npm-run-all for parallel script execution

5. Environment optimizations:
   - Specify Node.js version
   - Use specific npm/yarn versions
   - Adjust memory allocation if needed

6. Configuration tips:
   - Set proper build and deploy directories
   - Use appropriate build cache settings
   - Consider using build hooks for specific environments
"""

async def main():
    """Main entry point for the debug agent."""
    # Check for required environment variables
    openai_key = os.environ.get("OPENAI_API_KEY")
    if not openai_key:
        print("Warning: OPENAI_API_KEY environment variable is not set.")
        print("This is required for interactive agent but not for basic functionality.")
    
    toolkit = NetlifyDebugToolkit()
    
    print("Netlify Build Debug Agent")
    print("------------------------")
    
    try:
        # Validate configuration
        print("\nValidating Netlify configuration...")
        result = await toolkit.validate_config("netlify.toml")
        print(result)
        
        # Check for common issues
        print("\nChecking for common issues...")
        result = await toolkit.fix_common_issues()
        print(result)
        
        # Analyze build logs
        print("\nAnalyzing build logs...")
        result = await toolkit.analyze_build_logs()
        print(result)
        
        # Get environment info
        print("\nGetting environment information...")
        result = await toolkit.get_environment_info()
        print(result)
        
        print("\nNetlify Debug Agent setup is complete!")
        print("You can now use this agent to help diagnose and fix Netlify build issues.")
    
    except Exception as e:
        print(f"Error during analysis: {str(e)}")
        print("Please ensure Netlify CLI is installed and configured properly.")
        print("Install with: npm install -g netlify-cli")

if __name__ == "__main__":
    asyncio.run(main()) 