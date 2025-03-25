#!/usr/bin/env python3
import asyncio
from netlify_debug_agent import NetlifyDebugToolkit

async def main():
    toolkit = NetlifyDebugToolkit()
    print("Running Netlify diagnostics...")
    
    # Diagnose build
    print("\nDiagnosing site build...")
    result = await toolkit.diagnose_build()
    print(result)
    
    # Validate configuration
    print("\nValidating Netlify configuration...")
    result = await toolkit.validate_config("../../netlify.toml")
    print(result)
    
    print("\nDiagnostics complete!")

if __name__ == "__main__":
    asyncio.run(main()) 