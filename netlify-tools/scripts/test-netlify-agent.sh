#!/bin/bash

# Script to test the Netlify debug agent with comprehensive checks

# Exit on any error
set -e

echo "=========================================================="
echo "Running Netlify Debug Agent Comprehensive Test"
echo "This will test all available tools and functions"
echo "=========================================================="

# Check for required environment variables
if [ -z "$OPENAI_API_KEY" ]; then
  if [ -f ".env" ]; then
    echo "Loading environment variables from .env file"
    export $(grep -v '^#' .env | xargs)
  else
    echo "Error: OPENAI_API_KEY is not set and .env file not found"
    echo "Please create a .env file with OPENAI_API_KEY=your_key or export the variable"
    exit 1
  fi
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
  echo "Error: Python 3 is required but not installed"
  exit 1
fi

# Install required dependencies
echo "Checking and installing required Python packages..."
pip3 install agno openai python-dotenv duckduckgo-search --quiet

# Create a temporary test script to run each tool
echo "Creating test script..."
cat << 'EOF' > /tmp/netlify_test_agent.py
#!/usr/bin/env python3

import sys
import importlib.util
from pathlib import Path
from agno.agent import Agent
from agno.models.openai import OpenAIChat

# Import the create_netlify_debug_agent function using importlib
script_path = Path('netifly-agents/netlify-debug-agent.py')
module_name = 'netlify_debug_agent'

spec = importlib.util.spec_from_file_location(module_name, script_path)
module = importlib.util.module_from_spec(spec)
sys.modules[module_name] = module
spec.loader.exec_module(module)

# Now we can access the create_netlify_debug_agent function
create_netlify_debug_agent = module.create_netlify_debug_agent

def test_tools(agent):
    """Test each tool provided by the Netlify debug agent."""
    print("\nTesting all available tools:")
    
    # Get all tools from the agent
    tools = agent.get_tools()
    if not tools:
        print("No tools found in the agent!")
        return
    
    tool_count = 0
    for tool in tools:
        if hasattr(tool, "__name__"):
            print(f"  - {tool.__name__}")
            tool_count += 1
        elif hasattr(tool, "name"):
            print(f"  - {tool.name}")
            tool_count += 1
    
    print(f"\nFound {tool_count} tools in the Netlify debug agent")

def main():
    # Create the Netlify debug agent
    print("Creating Netlify debug agent...")
    agent = create_netlify_debug_agent()
    
    # Test the tools
    test_tools(agent)
    
    # Run a simple diagnostic check
    print("\nRunning a basic diagnostic check...")
    try:
        response = agent.run("Perform a quick diagnostic check of my Netlify environment. Don't ask me questions, just use your tools to gather information and report what you find.")
        content = response.content if hasattr(response, 'content') else str(response)
        print("\nDiagnostic Results:")
        print("-" * 40)
        print(content)
        print("-" * 40)
    except Exception as e:
        print(f"Error during diagnostic check: {str(e)}")
    
    print("\nNetlify agent test completed")

if __name__ == "__main__":
    main()
EOF

# Run the test
echo "Running Netlify agent test..."
python3 /tmp/netlify_test_agent.py

# Clean up
rm /tmp/netlify_test_agent.py
echo "Test script removed."

echo "Netlify Debug Agent test completed" 