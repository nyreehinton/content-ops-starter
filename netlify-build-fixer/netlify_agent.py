#!/usr/bin/env python3
"""
Netlify Debug Agent (Simplified)
-------------------------------
A simplified tool to help diagnose and fix Netlify build issues.
"""

import os
import sys
import subprocess
import platform

def check_netlify_cli():
    """Check if Netlify CLI is installed and get its version"""
    try:
        result = subprocess.run(["netlify", "--version"], 
                               capture_output=True, text=True)
        if result.returncode == 0:
            return True, result.stdout.strip()
        return False, "Netlify CLI not installed or not working properly"
    except Exception:
        return False, "Netlify CLI not installed or not in PATH"

def get_env_info():
    """Get basic environment information"""
    info = {}
    info["os"] = platform.system() + " " + platform.release()
    info["python"] = sys.version.split()[0]
    
    try:
        node = subprocess.run(["node", "--version"], 
                             capture_output=True, text=True)
        info["node"] = node.stdout.strip() if node.returncode == 0 else "Not installed"
    except:
        info["node"] = "Not installed"
        
    try:
        npm = subprocess.run(["npm", "--version"], 
                            capture_output=True, text=True)
        info["npm"] = npm.stdout.strip() if npm.returncode == 0 else "Not installed"
    except:
        info["npm"] = "Not installed"
    
    return info
    
def check_config_file():
    """Check for netlify.toml file"""
    if os.path.exists("netlify.toml"):
        with open("netlify.toml", "r") as f:
            return True, f.read()
    return False, "netlify.toml not found"

def check_package_json():
    """Check for package.json file"""
    if os.path.exists("package.json"):
        with open("package.json", "r") as f:
            return True, f.read()
    return False, "package.json not found"

def display_common_issues():
    """Display common Netlify build issues and fixes"""
    return """
Common Netlify Build Issues and Solutions:

1. Missing dependencies
   - Ensure all dependencies are in package.json
   - Check for version conflicts

2. Build command errors
   - Verify build command in netlify.toml
   - Test build command locally before deploying

3. Environment variables
   - Set required environment variables in Netlify UI
   - Check for missing or incorrect variables

4. Node.js version
   - Specify Node.js version in netlify.toml or .nvmrc
   - Use supported Node.js version

5. Build timeout
   - Optimize build process for speed
   - Split large builds into smaller chunks
    """
    
def main():
    """Main entry point for the simplified Netlify debug agent"""
    print("Netlify Debug Agent (Simplified)")
    print("------------------------------")
    
    # Check Netlify CLI
    cli_installed, cli_version = check_netlify_cli()
    print(f"\nNetlify CLI: {'Installed - ' + cli_version if cli_installed else 'Not installed'}")
    if not cli_installed:
        print("  To install Netlify CLI: npm install -g netlify-cli")
    
    # Environment info
    env_info = get_env_info()
    print("\nEnvironment Information:")
    print(f"  OS: {env_info['os']}")
    print(f"  Python: {env_info['python']}")
    print(f"  Node.js: {env_info['node']}")
    print(f"  npm: {env_info['npm']}")
    
    # Check config files
    config_exists, config_content = check_config_file()
    print(f"\nNetlify Configuration: {'Found' if config_exists else 'Not found'}")
    if config_exists:
        print("\nnetlify.toml content:")
        print("-" * 20)
        print(config_content)
        print("-" * 20)
    else:
        print("  Create a netlify.toml file to configure your site")
    
    package_exists, package_content = check_package_json()
    print(f"\nPackage.json: {'Found' if package_exists else 'Not found'}")
    
    # Display common issues
    print("\nCommon Issues:")
    print(display_common_issues())
    
    # Next steps
    print("\nNext Steps:")
    print("1. Install Netlify CLI if not installed")
    print("2. Create or edit netlify.toml for your project")
    print("3. Test your build locally with 'netlify build'")
    print("4. Link your site with 'netlify link'")
    print("5. Deploy with 'netlify deploy'")
    
    print("\nFor more detailed diagnostics, see Netlify documentation at:")
    print("https://docs.netlify.com/configure-builds/troubleshooting-tips/")

if __name__ == "__main__":
    main() 