#!/usr/bin/env python3
"""
Netlify Diagnostic Report Generator
---------------------------------
This script runs diagnostic commands and generates a summary report file.
"""
import os
import subprocess
import json
from datetime import datetime
from pathlib import Path

def run_command(cmd):
    """Run a command and return its output."""
    try:
        result = subprocess.run(cmd, shell=True, check=False, capture_output=True, text=True)
        return result.stdout if result.returncode == 0 else f"Error: {result.stderr}"
    except Exception as e:
        return f"Error executing '{cmd}': {str(e)}"

def generate_report():
    """Run diagnostics and generate a report file."""
    print("Generating Netlify diagnostic report...")
    
    # Create a timestamp for the report
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    report_file = f"netlify_report_{timestamp}.md"
    
    # Start collecting report data
    with open(report_file, "w") as f:
        f.write("# Netlify Diagnostic Report\n\n")
        f.write(f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        
        # System information
        f.write("## System Information\n\n")
        f.write(f"* OS: {run_command('uname -a')}\n")
        f.write(f"* Node.js: {run_command('node --version')}\n")
        f.write(f"* npm: {run_command('npm --version')}\n")
        
        # Netlify CLI information
        f.write("\n## Netlify CLI Information\n\n")
        f.write(f"* Netlify CLI version: {run_command('netlify --version')}\n")
        
        # Netlify site information
        f.write("\n## Netlify Site Information\n\n")
        f.write("```\n")
        f.write(run_command("netlify status"))
        f.write("\n```\n")
        
        # Netlify configuration
        f.write("\n## Netlify Configuration (netlify.toml)\n\n")
        if os.path.exists("./netlify.toml"):
            f.write("```toml\n")
            f.write(run_command("cat ./netlify.toml"))
            f.write("\n```\n")
        else:
            f.write("*netlify.toml not found*\n")
        
        # Project dependencies
        f.write("\n## Project Dependencies\n\n")
        if os.path.exists("./package.json"):
            try:
                with open("./package.json", "r") as pkg_file:
                    pkg_data = json.load(pkg_file)
                    f.write("### Dependencies\n\n")
                    for dep, version in pkg_data.get("dependencies", {}).items():
                        f.write(f"* {dep}: {version}\n")
                    
                    f.write("\n### Dev Dependencies\n\n")
                    for dep, version in pkg_data.get("devDependencies", {}).items():
                        f.write(f"* {dep}: {version}\n")
            except Exception as e:
                f.write(f"Error parsing package.json: {str(e)}\n")
        else:
            f.write("*package.json not found*\n")
        
        # Netlify plugins
        f.write("\n## Netlify Plugins\n\n")
        f.write("```\n")
        f.write(run_command("netlify plugins:list"))
        f.write("\n```\n")
        
        # Recent deployments
        f.write("\n## Recent Deployments\n\n")
        f.write("```\n")
        f.write(run_command("netlify deploy:list"))
        f.write("\n```\n")
        
        # Environment variables (without values for security)
        f.write("\n## Environment Variables\n\n")
        f.write("```\n")
        f.write(run_command("netlify env:list"))
        f.write("\n```\n")
        
        # Build recommendations
        f.write("\n## Build Recommendations\n\n")
        f.write("1. Ensure all required dependencies are installed\n")
        f.write("2. Check that build command matches your project setup\n")
        f.write("3. Verify publish directory is correctly specified\n")
        f.write("4. Confirm environment variables are properly set\n")
        f.write("5. Consider optimizing build performance with caching\n")
        
        # Next steps
        f.write("\n## Next Steps\n\n")
        f.write("* To see detailed deployment logs: `netlify logs:deploy`\n")
        f.write("* To test a local build: `netlify build`\n")
        f.write("* To manually deploy: `netlify deploy`\n")
    
    print(f"Report generated: {report_file}")
    print(f"You can open it with: cat {report_file}")
    return report_file

if __name__ == "__main__":
    report_path = generate_report()
    # Output the first few lines of the report
    subprocess.run(f"head -n 20 {report_path}", shell=True) 