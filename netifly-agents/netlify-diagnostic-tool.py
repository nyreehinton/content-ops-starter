#!/usr/bin/env python3
"""
Netlify Build Diagnostic Tool
-----------------------------
This tool analyzes Netlify build configurations, logs, and environment to diagnose
common build issues and suggest potential solutions.
"""

import os
import sys
import json
import subprocess
import argparse
from pathlib import Path
from datetime import datetime
import re
import hashlib

class ColorOutput:
    """Simple class to add color to terminal output."""
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    
    @staticmethod
    def header(text):
        return f"{ColorOutput.HEADER}{text}{ColorOutput.ENDC}"
    
    @staticmethod
    def success(text):
        return f"{ColorOutput.GREEN}{text}{ColorOutput.ENDC}"
    
    @staticmethod
    def warning(text):
        return f"{ColorOutput.YELLOW}{text}{ColorOutput.ENDC}"
    
    @staticmethod
    def error(text):
        return f"{ColorOutput.RED}{text}{ColorOutput.ENDC}"
    
    @staticmethod
    def info(text):
        return f"{ColorOutput.BLUE}{text}{ColorOutput.ENDC}"
    
    @staticmethod
    def bold(text):
        return f"{ColorOutput.BOLD}{text}{ColorOutput.ENDC}"

class NetlifyDiagnosticTool:
    """Tool for diagnosing Netlify build issues."""
    
    def __init__(self):
        self.project_dir = os.getcwd()
        self.netlify_toml_path = os.path.join(self.project_dir, "netlify.toml")
        self.package_json_path = os.path.join(self.project_dir, "package.json")
        self.results = {
            "netlify_cli_info": None,
            "site_info": None,
            "env_info": None,
            "config_analysis": None,
            "package_analysis": None,
            "build_command_test": None,
            "common_issues": [],
            "suggestions": []
        }
        
    def run_command(self, cmd, silent=False):
        """Run a shell command and return its output."""
        try:
            result = subprocess.run(
                cmd, 
                shell=isinstance(cmd, str),
                capture_output=True, 
                text=True, 
                check=False
            )
            if not silent and result.stdout:
                print(result.stdout)
            if not silent and result.returncode != 0 and result.stderr:
                print(ColorOutput.error(f"Error: {result.stderr}"))
            
            return {
                "success": result.returncode == 0,
                "stdout": result.stdout,
                "stderr": result.stderr,
                "returncode": result.returncode
            }
        except Exception as e:
            if not silent:
                print(ColorOutput.error(f"Failed to execute command: {str(e)}"))
            return {
                "success": False,
                "stdout": "",
                "stderr": str(e),
                "returncode": -1
            }
    
    def check_netlify_cli(self):
        """Check if Netlify CLI is installed and get its version."""
        print(ColorOutput.header("Checking Netlify CLI..."))
        result = self.run_command("netlify --version")
        
        if result["success"]:
            self.results["netlify_cli_info"] = result["stdout"].strip()
            print(ColorOutput.success(f"Netlify CLI is installed: {self.results['netlify_cli_info']}"))
        else:
            self.results["netlify_cli_info"] = None
            print(ColorOutput.error("Netlify CLI is not installed or not accessible"))
            self.results["suggestions"].append("Install Netlify CLI with 'npm install -g netlify-cli'")
        
        return result["success"]
    
    def check_site_info(self):
        """Get information about the current Netlify site."""
        print(ColorOutput.header("\nChecking Netlify site information..."))
        result = self.run_command("netlify status")
        
        if result["success"]:
            self.results["site_info"] = result["stdout"]
            print(ColorOutput.success("Successfully retrieved site information"))
        else:
            self.results["site_info"] = None
            print(ColorOutput.warning("Not linked to a Netlify site or unable to retrieve site information"))
            self.results["suggestions"].append("Link your site with 'netlify link'")
        
        return result["success"]
    
    def check_environment_info(self):
        """Check environment information."""
        print(ColorOutput.header("\nChecking environment information..."))
        
        # Get Node.js and npm versions
        node_version = self.run_command("node --version", silent=True)
        npm_version = self.run_command("npm --version", silent=True)
        
        # Try to get Netlify environment variables
        netlify_env = self.run_command("netlify env:list", silent=True)
        
        self.results["env_info"] = {
            "node_version": node_version["stdout"].strip() if node_version["success"] else "Not installed",
            "npm_version": npm_version["stdout"].strip() if npm_version["success"] else "Not installed",
            "netlify_env": netlify_env["stdout"] if netlify_env["success"] else None
        }
        
        print(f"Node.js version: {self.results['env_info']['node_version']}")
        print(f"npm version: {self.results['env_info']['npm_version']}")
        
        if netlify_env["success"]:
            print(ColorOutput.success("Successfully retrieved Netlify environment variables"))
        else:
            print(ColorOutput.warning("Unable to retrieve Netlify environment variables"))
        
        # Check for commonly used Netlify environment variables in netlify.toml
        if os.path.exists(self.netlify_toml_path):
            with open(self.netlify_toml_path, 'r') as f:
                netlify_toml = f.read()
                for var in ['NODE_VERSION', 'NPM_VERSION', 'YARN_VERSION', 'HUGO_VERSION']:
                    if var in netlify_toml:
                        print(ColorOutput.info(f"Found {var} in netlify.toml"))
        
        return True
    
    def analyze_netlify_config(self):
        """Analyze the netlify.toml configuration file."""
        print(ColorOutput.header("\nAnalyzing netlify.toml configuration..."))
        
        if not os.path.exists(self.netlify_toml_path):
            print(ColorOutput.warning("netlify.toml not found"))
            self.results["suggestions"].append("Create a netlify.toml file at the root of your project")
            self.results["config_analysis"] = None
            return False
        
        with open(self.netlify_toml_path, 'r') as f:
            config_content = f.read()
            
        # Basic analysis
        analysis = {
            "has_build_command": "command =" in config_content,
            "has_publish_directory": "publish =" in config_content,
            "has_environment_variables": "[build.environment]" in config_content,
            "has_redirects": "[[redirects]]" in config_content,
            "has_headers": "[[headers]]" in config_content,
            "has_plugins": "[[plugins]]" in config_content,
            "has_functions": "[functions]" in config_content,
            "content": config_content,
        }
        
        # Find and extract build command
        build_command_match = re.search(r'command\s*=\s*[\'"](.+?)[\'"]', config_content)
        if build_command_match:
            analysis["build_command"] = build_command_match.group(1)
        else:
            analysis["build_command"] = None
            
        # Find and extract publish directory
        publish_dir_match = re.search(r'publish\s*=\s*[\'"](.+?)[\'"]', config_content)
        if publish_dir_match:
            analysis["publish_directory"] = publish_dir_match.group(1)
        else:
            analysis["publish_directory"] = None
        
        self.results["config_analysis"] = analysis
        
        # Report findings
        print(f"Build command: {ColorOutput.bold(analysis['build_command'] if analysis['build_command'] else 'Not specified')}")
        print(f"Publish directory: {ColorOutput.bold(analysis['publish_directory'] if analysis['publish_directory'] else 'Not specified')}")
        
        # Identify potential issues
        if not analysis["has_build_command"]:
            print(ColorOutput.warning("Warning: Build command not specified in netlify.toml"))
            self.results["common_issues"].append("Missing build command in netlify.toml")
            self.results["suggestions"].append("Add a build command in netlify.toml: command = \"your-build-command\"")
            
        if not analysis["has_publish_directory"]:
            print(ColorOutput.warning("Warning: Publish directory not specified in netlify.toml"))
            self.results["common_issues"].append("Missing publish directory in netlify.toml")
            self.results["suggestions"].append("Add a publish directory in netlify.toml: publish = \"your-build-output-directory\"")
        
        return True
    
    def analyze_package_json(self):
        """Analyze the package.json file for common issues."""
        print(ColorOutput.header("\nAnalyzing package.json..."))
        
        if not os.path.exists(self.package_json_path):
            print(ColorOutput.warning("package.json not found"))
            self.results["package_analysis"] = None
            return False
        
        with open(self.package_json_path, 'r') as f:
            try:
                package_data = json.load(f)
            except json.JSONDecodeError:
                print(ColorOutput.error("Error: package.json contains invalid JSON"))
                self.results["common_issues"].append("Invalid JSON in package.json")
                self.results["suggestions"].append("Validate your package.json file with a JSON linter")
                self.results["package_analysis"] = None
                return False
        
        analysis = {
            "has_build_script": "build" in package_data.get("scripts", {}),
            "has_dev_dependencies": "devDependencies" in package_data,
            "has_dependencies": "dependencies" in package_data,
            "build_script": package_data.get("scripts", {}).get("build"),
            "engines": package_data.get("engines"),
            "framework_detected": None
        }
        
        # Detect framework based on dependencies
        frameworks = {
            "react": ["react", "react-dom", "create-react-app"],
            "next.js": ["next"],
            "gatsby": ["gatsby"],
            "vue": ["vue"],
            "nuxt": ["nuxt"],
            "angular": ["@angular/core"],
            "svelte": ["svelte"]
        }
        
        all_deps = {}
        if analysis["has_dependencies"]:
            all_deps.update(package_data["dependencies"])
        if analysis["has_dev_dependencies"]:
            all_deps.update(package_data["devDependencies"])
        
        for framework, packages in frameworks.items():
            for pkg in packages:
                if pkg in all_deps:
                    analysis["framework_detected"] = framework
                    break
            if analysis["framework_detected"]:
                break
        
        self.results["package_analysis"] = analysis
        
        # Report findings
        if analysis["has_build_script"]:
            print(f"Build script: {ColorOutput.bold(analysis['build_script'])}")
        else:
            print(ColorOutput.warning("Warning: No build script found in package.json"))
            self.results["common_issues"].append("Missing build script in package.json")
            self.results["suggestions"].append("Add a build script to package.json: \"scripts\": {\"build\": \"your-build-command\"}")
        
        if analysis["framework_detected"]:
            print(f"Detected framework: {ColorOutput.bold(analysis['framework_detected'])}")
        else:
            print("No common framework detected")
        
        if analysis["engines"]:
            print(f"Engine requirements: {ColorOutput.bold(json.dumps(analysis['engines']))}")
            
            # Check for Node.js version conflict with Netlify default
            if "node" in analysis["engines"]:
                node_constraint = analysis["engines"]["node"]
                # Basic check for version that might conflict with Netlify defaults
                if node_constraint.startswith(">=") and int(node_constraint[2:].split('.')[0]) > 16:
                    print(ColorOutput.warning(f"Warning: Node.js version constraint {node_constraint} might require explicit configuration on Netlify"))
                    self.results["common_issues"].append(f"Node.js version constraint {node_constraint} might need explicit configuration")
                    self.results["suggestions"].append("Set NODE_VERSION in netlify.toml [build.environment] section")
        
        return True
    
    def test_build_command(self):
        """Test the build command locally."""
        print(ColorOutput.header("\nTesting build command locally..."))
        
        build_command = None
        
        # Try to get build command from netlify.toml
        if self.results["config_analysis"] and self.results["config_analysis"]["build_command"]:
            build_command = self.results["config_analysis"]["build_command"]
            print(f"Using build command from netlify.toml: {ColorOutput.bold(build_command)}")
        
        # Fallback to package.json build script
        elif self.results["package_analysis"] and self.results["package_analysis"]["has_build_script"]:
            build_command = f"npm run build"
            print(f"Using build command from package.json: {ColorOutput.bold(build_command)}")
        
        # Couldn't determine build command
        if not build_command:
            print(ColorOutput.warning("Warning: Could not determine build command"))
            self.results["common_issues"].append("Unable to determine build command")
            self.results["suggestions"].append("Specify a build command in netlify.toml or package.json")
            self.results["build_command_test"] = None
            return False
        
        # Ask user if they want to test the build command
        print(ColorOutput.warning("Note: Actually running the build command may take a long time."))
        try:
            response = input("Do you want to test the build command? (y/N): ").strip().lower()
            if response != 'y':
                print("Skipping build command test")
                return False
        except KeyboardInterrupt:
            print("\nSkipping build command test")
            return False
        
        print(f"Running build command: {ColorOutput.bold(build_command)}")
        result = self.run_command(build_command)
        
        self.results["build_command_test"] = {
            "command": build_command,
            "success": result["success"],
            "output": result["stdout"],
            "error": result["stderr"]
        }
        
        if result["success"]:
            print(ColorOutput.success("Build command completed successfully"))
        else:
            print(ColorOutput.error("Build command failed"))
            self.results["common_issues"].append("Build command failed locally")
            self.results["suggestions"].append("Debug the build command locally before deploying to Netlify")
        
        return result["success"]
    
    def check_for_common_issues(self):
        """Check for common issues that cause Netlify builds to fail."""
        print(ColorOutput.header("\nChecking for common Netlify build issues..."))
        
        # Check for case sensitivity issues
        if os.name == 'nt' or sys.platform == 'darwin':  # Windows or macOS
            print(ColorOutput.info("Checking for potential case sensitivity issues..."))
            file_paths = []
            
            # Find JavaScript/TypeScript files and their import statements
            for root, dirs, files in os.walk(self.project_dir):
                if "node_modules" in root or ".git" in root:
                    continue
                    
                for file in files:
                    if file.endswith(('.js', '.jsx', '.ts', '.tsx')):
                        file_path = os.path.join(root, file)
                        file_paths.append(file_path)
            
            # Create a dictionary of lowercase path to actual path
            path_map = {}
            for path in file_paths:
                rel_path = os.path.relpath(path, self.project_dir)
                lower_path = rel_path.lower()
                
                if lower_path in path_map and path_map[lower_path] != rel_path:
                    print(ColorOutput.warning(f"Potential case sensitivity issue detected:"))
                    print(f"  - {path_map[lower_path]}")
                    print(f"  - {rel_path}")
                    self.results["common_issues"].append(f"Case sensitivity conflict: {path_map[lower_path]} vs {rel_path}")
                    self.results["suggestions"].append("Rename files to avoid case sensitivity conflicts")
                
                path_map[lower_path] = rel_path
        
        # Check for large files that might cause issues
        print(ColorOutput.info("Checking for large files..."))
        large_files = []
        
        for root, dirs, files in os.walk(self.project_dir):
            if "node_modules" in root or ".git" in root:
                continue
                
            for file in files:
                file_path = os.path.join(root, file)
                try:
                    file_size = os.path.getsize(file_path) / (1024 * 1024)  # Size in MB
                    if file_size > 10:  # Files larger than 10MB
                        large_files.append((os.path.relpath(file_path, self.project_dir), file_size))
                except:
                    pass
        
        if large_files:
            print(ColorOutput.warning("Large files detected that may cause issues with Netlify deploys:"))
            for file_path, size in large_files:
                print(f"  - {file_path} ({size:.2f} MB)")
            self.results["common_issues"].append(f"Large files detected ({len(large_files)} files over 10MB)")
            self.results["suggestions"].append("Consider using Netlify Large Media or excluding large files")
        
        # Check for common configuration issues based on framework
        if self.results["package_analysis"] and self.results["package_analysis"]["framework_detected"]:
            framework = self.results["package_analysis"]["framework_detected"]
            
            if framework == "next.js":
                # Check for common Next.js issues
                if not os.path.exists(os.path.join(self.project_dir, "next.config.js")):
                    print(ColorOutput.info("No next.config.js found - this is fine for many Next.js projects"))
                else:
                    with open(os.path.join(self.project_dir, "next.config.js"), 'r') as f:
                        config_content = f.read()
                        if "target: 'serverless'" not in config_content and "target:'serverless'" not in config_content:
                            print(ColorOutput.info("Consider adding target: 'serverless' to next.config.js for Netlify compatibility"))
            
            elif framework == "gatsby":
                # Check for common Gatsby issues
                if os.path.exists(os.path.join(self.project_dir, "gatsby-config.js")):
                    with open(os.path.join(self.project_dir, "gatsby-config.js"), 'r') as f:
                        config_content = f.read()
                        if "gatsby-plugin-netlify" not in config_content:
                            print(ColorOutput.info("Consider adding gatsby-plugin-netlify for better Netlify integration"))
                            self.results["suggestions"].append("Add gatsby-plugin-netlify to your Gatsby project")
        
        # Report findings and suggestions
        if not self.results["common_issues"]:
            print(ColorOutput.success("No common issues detected"))
        else:
            print(ColorOutput.warning(f"Detected {len(self.results['common_issues'])} potential issues"))
            for issue in self.results["common_issues"]:
                print(f"  - {issue}")
    
    def generate_report(self):
        """Generate a comprehensive report of the findings."""
        print(ColorOutput.header("\n===== Netlify Diagnostic Report ====="))
        print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"Project directory: {self.project_dir}")
        
        # Netlify CLI information
        print(ColorOutput.bold("\nNetlify CLI Information:"))
        if self.results["netlify_cli_info"]:
            print(f"  {self.results['netlify_cli_info']}")
        else:
            print("  Not installed or not accessible")
        
        # Site information
        print(ColorOutput.bold("\nNetlify Site Information:"))
        if self.results["site_info"]:
            for line in self.results["site_info"].strip().split("\n"):
                print(f"  {line}")
        else:
            print("  Not linked to a Netlify site or unable to retrieve site information")
        
        # Environment information
        print(ColorOutput.bold("\nEnvironment Information:"))
        print(f"  Node.js: {self.results['env_info']['node_version']}")
        print(f"  npm: {self.results['env_info']['npm_version']}")
        
        # Configuration analysis
        print(ColorOutput.bold("\nConfiguration Analysis:"))
        if self.results["config_analysis"]:
            print(f"  Build command: {self.results['config_analysis']['build_command'] or 'Not specified'}")
            print(f"  Publish directory: {self.results['config_analysis']['publish_directory'] or 'Not specified'}")
            print(f"  Environment variables: {'Yes' if self.results['config_analysis']['has_environment_variables'] else 'No'}")
            print(f"  Redirects configured: {'Yes' if self.results['config_analysis']['has_redirects'] else 'No'}")
            print(f"  Headers configured: {'Yes' if self.results['config_analysis']['has_headers'] else 'No'}")
            print(f"  Plugins configured: {'Yes' if self.results['config_analysis']['has_plugins'] else 'No'}")
            print(f"  Functions configured: {'Yes' if self.results['config_analysis']['has_functions'] else 'No'}")
        else:
            print("  No netlify.toml configuration found")
        
        # Package analysis
        print(ColorOutput.bold("\nPackage Analysis:"))
        if self.results["package_analysis"]:
            print(f"  Framework detected: {self.results['package_analysis']['framework_detected'] or 'None'}")
            print(f"  Build script: {self.results['package_analysis']['build_script'] or 'Not specified'}")
            if self.results["package_analysis"]["engines"]:
                print(f"  Engine requirements: {json.dumps(self.results['package_analysis']['engines'])}")
        else:
            print("  No package.json found or invalid JSON")
        
        # Build command test results
        print(ColorOutput.bold("\nBuild Command Test:"))
        if self.results["build_command_test"]:
            print(f"  Command: {self.results['build_command_test']['command']}")
            print(f"  Result: {'Success' if self.results['build_command_test']['success'] else 'Failed'}")
        else:
            print("  Not tested")
        
        # Issues and suggestions
        print(ColorOutput.bold("\nIssues Detected:"))
        if self.results["common_issues"]:
            for issue in self.results["common_issues"]:
                print(f"  - {issue}")
        else:
            print("  No issues detected")
        
        print(ColorOutput.bold("\nSuggestions:"))
        if self.results["suggestions"]:
            for suggestion in self.results["suggestions"]:
                print(f"  - {suggestion}")
        else:
            print("  No suggestions available")
        
        print(ColorOutput.header("\n===== End of Report ====="))
        
        # Ask user if they want to save the report
        try:
            save_report = input("\nWould you like to save this report to a file? (y/N): ").strip().lower()
            if save_report == 'y':
                report_filename = f"netlify_diagnostic_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
                with open(report_filename, 'w') as f:
                    f.write(f"Netlify Diagnostic Report\n")
                    f.write(f"========================\n")
                    f.write(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
                    f.write(f"Project directory: {self.project_dir}\n\n")
                    
                    # Netlify CLI information
                    f.write("Netlify CLI Information:\n")
                    if self.results["netlify_cli_info"]:
                        f.write(f"  {self.results['netlify_cli_info']}\n")
                    else:
                        f.write("  Not installed or not accessible\n")
                    
                    # Site information
                    f.write("\nNetlify Site Information:\n")
                    if self.results["site_info"]:
                        for line in self.results["site_info"].strip().split("\n"):
                            f.write(f"  {line}\n")
                    else:
                        f.write("  Not linked to a Netlify site or unable to retrieve site information\n")
                    
                    # Environment information
                    f.write("\nEnvironment Information:\n")
                    f.write(f"  Node.js: {self.results['env_info']['node_version']}\n")
                    f.write(f"  npm: {self.results['env_info']['npm_version']}\n")
                    
                    # Configuration analysis
                    f.write("\nConfiguration Analysis:\n")
                    if self.results["config_analysis"]:
                        f.write(f"  Build command: {self.results['config_analysis']['build_command'] or 'Not specified'}\n")
                        f.write(f"  Publish directory: {self.results['config_analysis']['publish_directory'] or 'Not specified'}\n")
                        f.write(f"  Environment variables: {'Yes' if self.results['config_analysis']['has_environment_variables'] else 'No'}\n")
                        f.write(f"  Redirects configured: {'Yes' if self.results['config_analysis']['has_redirects'] else 'No'}\n")
                        f.write(f"  Headers configured: {'Yes' if self.results['config_analysis']['has_headers'] else 'No'}\n")
                        f.write(f"  Plugins configured: {'Yes' if self.results['config_analysis']['has_plugins'] else 'No'}\n")
                        f.write(f"  Functions configured: {'Yes' if self.results['config_analysis']['has_functions'] else 'No'}\n")
                    else:
                        f.write("  No netlify.toml configuration found\n")
                    
                    # Package analysis
                    f.write("\nPackage Analysis:\n")
                    if self.results["package_analysis"]:
                        f.write(f"  Framework detected: {self.results['package_analysis']['framework_detected'] or 'None'}\n")
                        f.write(f"  Build script: {self.results['package_analysis']['build_script'] or 'Not specified'}\n")
                        if self.results["package_analysis"]["engines"]:
                            f.write(f"  Engine requirements: {json.dumps(self.results['package_analysis']['engines'])}\n")
                    else:
                        f.write("  No package.json found or invalid JSON\n")
                    
                    # Build command test results
                    f.write("\nBuild Command Test:\n")
                    if self.results["build_command_test"]:
                        f.write(f"  Command: {self.results['build_command_test']['command']}\n")
                        f.write(f"  Result: {'Success' if self.results['build_command_test']['success'] else 'Failed'}\n")
                    else:
                        f.write("  Not tested\n")
                    
                    # Issues and suggestions
                    f.write("\nIssues Detected:\n")
                    if self.results["common_issues"]:
                        for issue in self.results["common_issues"]:
                            f.write(f"  - {issue}\n")
                    else:
                        f.write("  No issues detected\n")
                    
                    f.write("\nSuggestions:\n")
                    if self.results["suggestions"]:
                        for suggestion in self.results["suggestions"]:
                            f.write(f"  - {suggestion}\n")
                    else:
                        f.write("  No suggestions available\n")
                
                print(f"Report saved to {report_filename}")
        except KeyboardInterrupt:
            print("\nSkipping report save")
    
    def run_diagnostics(self):
        """Run all diagnostic checks."""
        print(ColorOutput.header("Netlify Build Diagnostic Tool"))
        print("Running diagnostics on project directory:", self.project_dir)
        print("=" * 80)
        
        # Run all checks
        cli_installed = self.check_netlify_cli()
        if cli_installed:
            self.check_site_info()
        self.check_environment_info()
        self.analyze_netlify_config()
        self.analyze_package_json()
        self.test_build_command()
        self.check_for_common_issues()
        
        # Generate report
        self.generate_report()

def main():
    parser = argparse.ArgumentParser(description="Netlify Build Diagnostic Tool")
    parser.add_argument(
        "--dir", 
        help="The directory to analyze (defaults to current directory)",
        default=os.getcwd()
    )
    args = parser.parse_args()
    
    # Change to specified directory
    os.chdir(args.dir)
    
    # Run diagnostics
    diagnostic_tool = NetlifyDiagnosticTool()
    diagnostic_tool.run_diagnostics()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nDiagnostic tool interrupted. Exiting...")
        sys.exit(1)