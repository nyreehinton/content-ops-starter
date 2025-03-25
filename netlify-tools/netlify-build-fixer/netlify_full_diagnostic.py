#!/usr/bin/env python3
"""
Netlify Build Debug Agent - Full Diagnostic Mode
-----------------------------------------------
An AI-powered assistant that performs all possible diagnostic tasks
to help diagnose and fix Netlify build and deployment issues.
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

# ... existing code ...


async def main():
    """Main entry point for the debug agent in full diagnostic mode."""
    # Check for required environment variables
    openai_key = os.environ.get("OPENAI_API_KEY")
    if not openai_key:
        print("Warning: OPENAI_API_KEY environment variable is not set.")
        print("This is required for interactive agent but not for basic functionality.")
    
    toolkit = NetlifyDebugToolkit()
    
    print("Netlify Build Debug Agent - FULL DIAGNOSTIC MODE")
    print("----------------------------------------------")
    print("Running all available diagnostic tasks...")
    
    try:
        # 1. Validate configuration
        print("\n1. Validating Netlify configuration...")
        result = await toolkit.validate_config("../../netlify.toml")
        print(result)
        
        # 2. Check for common issues
        print("\n2. Checking for common issues...")
        result = await toolkit.fix_common_issues()
        print(result)
        
        # 3. Check dependencies
        print("\n3. Checking project dependencies...")
        result = await toolkit.check_dependencies()
        print(result)
        
        # 4. Analyze build logs
        print("\n4. Analyzing build logs...")
        result = await toolkit.analyze_build_logs()
        print(result)
        
        # 5. Get environment info
        print("\n5. Getting environment information...")
        result = await toolkit.get_environment_info()
        print(result)
        
        # 6. Test local build information
        print("\n6. Local build testing information...")
        result = await toolkit.test_local_build()
        print(result)
        
        # 7. Optimize build performance
        print("\n7. Build performance optimization suggestions...")
        result = await toolkit.optimize_build_performance()
        print(result)
        
        # 8. Diagnose build
        print("\n8. Diagnosing site build...")
        result = await toolkit.diagnose_build()
        print(result)
        
        print("\n✅ Netlify Debug Agent full diagnostic is complete!")
        print("Review the results above for insights into your Netlify configuration and build process.")
        print("For more detailed analysis, address the issues mentioned and run specific commands.")
    
    except Exception as e:
        print(f"❌ Error during analysis: {str(e)}")
        print("Please ensure Netlify CLI is installed and configured properly.")
        print("Install with: npm install -g netlify-cli")

if __name__ == "__main__":
    asyncio.run(main()) 