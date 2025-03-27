#!/bin/bash

# Script to run Netlify Agents

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

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
  echo "Error: Python 3 is required but not installed"
  exit 1
fi

# Check if pip is installed
if ! command -v pip3 &> /dev/null; then
  echo "Error: pip3 is required but not installed"
  exit 1
fi

# Check if the Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
  echo "Netlify CLI not found, installing..."
  npm install -g netlify-cli
fi

# Install Python dependencies if not already installed
echo "Checking Python dependencies..."
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

# Run the Netlify debug agent
echo "Starting Netlify Debug Agent..."
python3 netifly-agents/netlify-debug-agent.py "$@"

echo "Netlify Agent execution completed" 