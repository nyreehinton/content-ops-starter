#!/usr/bin/env python3

import os
import sys

def check_environment():
    """Check if the environment is properly set up for Agno agents."""
    print("Checking Agno environment setup...\n")
    
    # Check Python version
    python_version = sys.version.split()[0]
    print(f"Python version: {python_version}")
    major, minor = map(int, python_version.split('.')[:2])
    if major < 3 or (major == 3 and minor < 7):
        print("❌ Python 3.7 or higher is required.")
    else:
        print("✅ Python version is compatible.")
    
    # Check for OpenAI API key
    openai_key = os.environ.get('OPENAI_API_KEY')
    if not openai_key:
        print("❌ OPENAI_API_KEY environment variable is not set.")
    else:
        print(f"✅ OPENAI_API_KEY is set (starts with {openai_key[:5]}...).")
    
    # Check for Agno installation
    try:
        import agno
        print(f"✅ Agno library is installed (version: {agno.__version__}).")
    except ImportError:
        print("❌ Agno library is not installed. Run: pip install -U agno")
    
    # Check for DuckDuckGo search
    try:
        import duckduckgo_search
        print("✅ DuckDuckGo search package is installed.")
    except ImportError:
        print("❌ DuckDuckGo search package is not installed. Run: pip install duckduckgo-search")
    
    print("\nEnvironment check complete.")

if __name__ == "__main__":
    check_environment() 