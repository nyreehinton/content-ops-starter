#!/usr/bin/env python3
"""
Netlify Full Diagnostic Runner
--------------------------
Runs all available Netlify diagnostic functions to help troubleshoot builds.
"""
import os
import sys
import asyncio
import subprocess
from pathlib import Path

# Import existing toolkit
from netlify_debug_agent import NetlifyDebugToolkit

async def run_all_diagnostics():
    """Run all available diagnostic tools for Netlify."""
    print("Netlify Build Debug Agent - FULL DIAGNOSTIC MODE")
    print("----------------------------------------------")
    print("Running all available diagnostic tasks...")
    
    toolkit = NetlifyDebugToolkit()
    
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
        try:
            result = await toolkit.check_dependencies()
            print(result)
        except Exception as e:
            print(f"Error checking dependencies: {str(e)}")
        
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
        try:
            result = await toolkit.test_local_build()
            print(result)
        except Exception as e:
            print(f"Error during local build testing: {str(e)}")
        
        # 7. Optimize build performance
        print("\n7. Build performance optimization suggestions...")
        try:
            result = await toolkit.optimize_build_performance()
            print(result)
        except Exception as e:
            print(f"Error during optimization analysis: {str(e)}")
        
        # 8. Diagnose build
        print("\n8. Diagnosing site build...")
        try:
            result = await toolkit.diagnose_build()
            print(result)
        except Exception as e:
            print(f"Error diagnosing build: {str(e)}")
        
        print("\n✅ Netlify Debug Agent full diagnostic is complete!")
        print("Review the results above for insights into your Netlify configuration and build process.")
        
    except Exception as e:
        print(f"❌ Error during analysis: {str(e)}")
        print("Please ensure Netlify CLI is installed and configured properly.")
        print("Install with: npm install -g netlify-cli")

if __name__ == "__main__":
    asyncio.run(run_all_diagnostics()) 