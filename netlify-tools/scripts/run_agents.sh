#!/bin/bash

# Script to run all Netlify Agents in sequence

# Exit on any error
set -e

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

# Function to run an agent with proper error handling
run_agent() {
  local agent_name="$1"
  local script_name="$2"
  
  echo "========================================"
  echo "Running Netlify $agent_name Agent"
  echo "========================================"
  
  if [ ! -f "netifly-agents/$script_name" ]; then
    echo "Warning: Agent script 'netifly-agents/$script_name' not found. Skipping."
    return 1
  fi
  
  python3 netifly-agents/$script_name
  
  if [ $? -ne 0 ]; then
    echo "Warning: $agent_name agent exited with an error. Continuing with next agent."
  else
    echo "$agent_name agent completed successfully."
  fi
  
  echo ""
}

# Ensure Python and dependencies are installed
echo "Checking Python dependencies..."
if ! command -v python3 &> /dev/null; then
  echo "Error: Python 3 is required but not installed"
  exit 1
fi

# Install Python dependencies if not already installed
if ! pip3 list | grep -q "agno"; then
  echo "Installing agno package..."
  pip3 install agno python-dotenv
fi

if ! pip3 list | grep -q "openai"; then
  echo "Installing OpenAI package..."
  pip3 install openai
fi

if ! pip3 list | grep -q "duckduckgo"; then
  echo "Installing DuckDuckGo search package..."
  pip3 install duckduckgo-search
fi

echo "Starting Netlify Agents..."
echo ""

# Run each agent in sequence with error handling
run_agent "Debug" "netlify-debug-agent.py"
run_agent "Diagnostic" "netlify-diagnostic-tool.py"
run_agent "Cache Fixer" "netlify-cache-fixer.py"
run_agent "Case Sensitivity Checker" "case-sensitivity-checker.py"

echo "All Netlify Agents execution completed" 