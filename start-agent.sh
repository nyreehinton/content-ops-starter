#!/bin/bash

# Load environment variables
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Check for OpenAI API key
if [ -z "$OPENAI_API_KEY" ]; then
  echo "Error: OPENAI_API_KEY is not set. Please set it in the .env file."
  exit 1
fi

# Activate virtual environment (if needed)
if [ -d "./venv" ]; then
  . ./venv/bin/activate
fi

# Run the agent with Python 3
echo "Starting Netlify Debug Agent..."
python3 netlify_agent.py

exit 0 