#!/usr/bin/env python3
"""
Netlify Comprehensive Diagnostic Tool
------------------------------------
This script runs all available diagnostic commands to troubleshoot Netlify sites.
"""
import os
import sys
import json
import subprocess
from pathlib import Path

def run_command(cmd, title):
    """Run a command and return its output with title."""
    print(f"\n{'-'*80}")
    print(f"{title}")
    print(f"{'-'*80}")
    
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
    """Run all diagnostic tasks."""
    print("Netlify Comprehensive Diagnostic Tool")
    print("====================================")
    print("Running all available diagnostic commands...")
    
    # 1. Check Netlify CLI version
    run_command("netlify --version", "1. Netlify CLI Version")
    
    # 2. Check Netlify status
    run_command("netlify status", "2. Netlify Site Status")
    
    # 3. Display Netlify configuration
    if os.path.exists("../../netlify.toml"):
        run_command("cat ../../netlify.toml", "3. Netlify Configuration File")
    else:
        print("\nNetlify configuration file not found at ../../netlify.toml")
    
    # 4. List Netlify sites
    run_command("netlify sites:list", "4. Netlify Sites List")
    
    # 5. Check project dependencies
    if os.path.exists("../../package.json"):
        run_command("cat ../../package.json | grep -A 5 '\"dependencies\"'", "5. Project Dependencies")
        run_command("cat ../../package.json | grep -A 5 '\"devDependencies\"'", "5b. Project Dev Dependencies")
    else:
        print("\nNo package.json found at ../../package.json")
    
    # 6. Check environment information
    run_command("netlify env:list", "6. Netlify Environment Variables")
    
    # 7. Check for Netlify build logs
    run_command("netlify logs:help", "7. Netlify Logs Commands")
    
    # 8. Check build command help
    run_command("netlify build --help", "8. Netlify Build Command Options")
    
    # 9. Check build plugins
    run_command("netlify plugins:list", "9. Netlify Plugins")
    
    # 10. Display available Netlify commands
    run_command("netlify help", "10. Available Netlify Commands")
    
    print("\n=================================================")
    print("✅ Netlify Comprehensive Diagnostic Tool completed")
    print("=================================================")
    print("Review the results above for insights into your Netlify configuration and build process.")

if __name__ == "__main__":
    main() 