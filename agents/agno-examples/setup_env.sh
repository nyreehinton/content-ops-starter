#!/bin/bash

# Setup script for Agno agent environment

echo "Setting up environment for Agno agents..."

# Check if OpenAI API key is already set
if [ -z "$OPENAI_API_KEY" ]; then
    echo -n "Enter your OpenAI API key: "
    read api_key
    export OPENAI_API_KEY="$api_key"
    echo "export OPENAI_API_KEY=$api_key" >> ~/.bashrc
    echo "export OPENAI_API_KEY=$api_key" >> ~/.zshrc
    echo "OpenAI API key has been set and saved to your shell configuration."
else
    echo "OpenAI API key is already set."
fi

# Install required dependencies
echo "Installing required Python packages..."
pip install -U agno
pip install duckduckgo-search

echo "Setup complete! You can now run the example agents in this directory."
echo "Try running: python3 basic_agent.py" 