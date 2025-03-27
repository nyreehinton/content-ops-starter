#!/bin/bash

# Setup script for Netlify Deploy Checker tools
# This script installs all required dependencies for both Python and Node.js versions

echo "🔧 Setting up Netlify Deploy Checker tools..."

# Check if we're in the right directory
if [ ! -d "netifly-agents" ]; then
  echo "⚠️ Error: netifly-agents directory not found. Make sure you're running this from the project root."
  exit 1
fi

# Check for required Python version
echo "🐍 Checking Python version..."
python3 --version > /dev/null 2>&1
if [ $? -ne 0 ]; then
  echo "⚠️ Python 3 not found. Please install Python 3.8 or higher."
  exit 1
fi

# Check for required Node.js version
echo "🟢 Checking Node.js version..."
node --version > /dev/null 2>&1
if [ $? -ne 0 ]; then
  echo "⚠️ Node.js not found. Please install Node.js 16 or higher."
  exit 1
fi

# Install Python dependencies
echo "📦 Installing Python dependencies..."
pip install agno openai duckduckgo-search python-dotenv

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install --save axios cheerio openai dotenv

# Check for .env file
if [ ! -f ".env" ]; then
  echo "⚠️ Warning: .env file not found. Creating sample .env file..."
  cat > .env << EOL
OPENAI_API_KEY=your-openai-api-key
NETLIFY_AUTH_TOKEN=your-netlify-auth-token
# Optional for webhook integration
# SLACK_WEBHOOK_URL=your-slack-webhook-url
# ENABLE_SLACK_NOTIFICATIONS=true
# ENABLE_EMAIL_NOTIFICATIONS=false
EOL
  echo "🔑 Please edit the .env file and add your API keys."
else
  # Check if OPENAI_API_KEY is already in .env
  grep -q "OPENAI_API_KEY" .env
  if [ $? -ne 0 ]; then
    echo "Adding OPENAI_API_KEY to .env..."
    echo "OPENAI_API_KEY=your-openai-api-key" >> .env
  fi
  
  # Check if NETLIFY_AUTH_TOKEN is already in .env
  grep -q "NETLIFY_AUTH_TOKEN" .env
  if [ $? -ne 0 ]; then
    echo "Adding NETLIFY_AUTH_TOKEN to .env..."
    echo "NETLIFY_AUTH_TOKEN=your-netlify-auth-token" >> .env
  fi
fi

# Add execute permissions to scripts
chmod +x netifly-agents/netlify-deploy-checker.py
chmod +x netifly-agents/netlify-node-checker.js
chmod +x netifly-agents/netlify-hooks-integration.js

echo "✅ Setup complete! You can now use the following commands:"
echo "   - npm run check-deploy -- your-netlify-site-name"
echo "   - npm run check-deploy-js -- your-netlify-site-name"
echo "   - npm run integrate-hooks"
echo ""
echo "📖 For more details, see netifly-agents/netlify-setup-guide.md" 