#!/bin/bash

# Script to start a specific Netlify Agent

# Exit on any error
set -e

# Check if agent name is provided
if [ -z "$1" ]; then
  echo "Error: Agent name is required"
  echo "Usage: $0 <agent-name> [arguments]"
  echo "Available agents: debug, diagnostic, cache-fixer, case-checker"
  exit 1
fi

AGENT_NAME="$1"
shift  # Remove the first argument (agent name)

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

# Determine which agent script to run based on the provided name
case "$AGENT_NAME" in
  "debug")
    AGENT_SCRIPT="netlify-debug-agent.py"
    ;;
  "diagnostic")
    AGENT_SCRIPT="netlify-diagnostic-tool.py"
    ;;
  "cache-fixer")
    AGENT_SCRIPT="netlify-cache-fixer.py"
    ;;
  "case-checker")
    AGENT_SCRIPT="case-sensitivity-checker.py"
    ;;
  *)
    echo "Error: Unknown agent name '$AGENT_NAME'"
    echo "Available agents: debug, diagnostic, cache-fixer, case-checker"
    exit 1
    ;;
esac

# Check if the script exists
if [ ! -f "netifly-agents/$AGENT_SCRIPT" ]; then
  echo "Error: Agent script 'netifly-agents/$AGENT_SCRIPT' not found"
  exit 1
fi

# Run the specified agent
echo "Starting Netlify $AGENT_NAME Agent..."
python3 netifly-agents/$AGENT_SCRIPT "$@"

echo "Netlify $AGENT_NAME Agent execution completed" 