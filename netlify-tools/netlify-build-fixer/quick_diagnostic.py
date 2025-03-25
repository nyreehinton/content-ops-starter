#!/usr/bin/env python3
"""
Netlify Quick Diagnostic Tool
---------------------------
This script runs essential diagnostic commands to troubleshoot Netlify sites.
"""
import os
import subprocess
from pathlib import Path

def run_command(cmd, title):
    """Run a command and return its output with title."""
    print(f"\n== {title} ==")
    
    try:
        result = subprocess.run(cmd, shell=True, check=False, capture_output=True, text=True)
        output = result.stdout if result.returncode == 0 else f"Error: {result.stderr}"
        print(output)
        return output
    except Exception as e:
        error = f"Error executing '{cmd}': {str(e)}"
        print(error)
        return error

def main():
    """Run essential diagnostic tasks."""
    print("Netlify Quick Diagnostic Tool")
    print("============================")
    
    # 1. Check Netlify CLI version
    run_command("netlify --version", "Netlify CLI Version")
    
    # 2. Check Netlify status
    run_command("netlify status", "Netlify Site Status")
    
    # 3. Display Netlify configuration
    if os.path.exists("./netlify.toml"):
        run_command("cat ./netlify.toml", "Netlify Configuration")
    
    # 4. Check for package.json
    if os.path.exists("./package.json"):
        run_command("head -n 20 ./package.json", "package.json Preview")
    
    # 5. List Netlify sites
    run_command("netlify sites:list", "Netlify Sites")
    
    # 6. Check Netlify plugins
    run_command("netlify plugins:list", "Netlify Plugins")
    
    # 7. Check Netlify deploy status
    run_command("netlify deploy:list", "Recent Netlify Deployments")
    
    # 8. Check Netlify logs help
    run_command("netlify logs:help", "Netlify Logs Commands")
    
    # 9. Check Netlify environment variables
    run_command("netlify env:list", "Netlify Environment Variables")
    
    # 10. Check Netlify build command options
    run_command("netlify build --help", "Netlify Build Command Options")
    
    print("\n✅ Netlify diagnostic complete!")
    print("Review the output above for insights into your Netlify configuration and build process.")
    print("To see Netlify deployment logs, run: netlify logs:deploy")
    print("To test a local build, run: netlify build")

if __name__ == "__main__":
    main() 