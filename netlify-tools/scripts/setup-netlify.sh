#!/bin/bash

# Script to properly set up Netlify CLI and authentication

# Exit on any error
set -e

# Define colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}====================================${NC}"
echo -e "${BLUE}Netlify CLI Setup and Authentication${NC}"
echo -e "${BLUE}====================================${NC}"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
  echo -e "${YELLOW}Netlify CLI not found, installing globally...${NC}"
  npm install -g netlify-cli
  
  if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to install Netlify CLI. Please install it manually with: npm install -g netlify-cli${NC}"
    exit 1
  fi
  
  echo -e "${GREEN}Netlify CLI installed successfully!${NC}"
else
  echo -e "${GREEN}Netlify CLI is already installed.${NC}"
  
  # Check version and update if needed
  CURRENT_VERSION=$(netlify --version | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+' | head -1)
  echo -e "Current version: ${CURRENT_VERSION}"
  
  echo -e "${YELLOW}Checking for a broken Netlify CLI installation...${NC}"
  
  # Try a simple command to check if the CLI is working properly
  netlify status &> /dev/null
  
  if [ $? -ne 0 ] && [ "$?" -ne 1 ]; then
    echo -e "${RED}Netlify CLI appears to be broken. Attempting to reinstall...${NC}"
    echo -e "${YELLOW}Removing existing Netlify CLI...${NC}"
    npm uninstall -g netlify-cli
    
    echo -e "${YELLOW}Installing a fresh copy of Netlify CLI...${NC}"
    npm install -g netlify-cli@14.0.0  # Using a specific version known to be stable
    
    if [ $? -ne 0 ]; then
      echo -e "${RED}Failed to reinstall Netlify CLI. Please try manually with:${NC}"
      echo -e "${RED}npm uninstall -g netlify-cli && npm install -g netlify-cli@14.0.0${NC}"
      exit 1
    fi
    
    CURRENT_VERSION=$(netlify --version | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+' | head -1)
    echo -e "${GREEN}Successfully reinstalled Netlify CLI version ${CURRENT_VERSION}${NC}"
  else
    echo -e "${GREEN}Netlify CLI installation is functional.${NC}"
  fi
fi

# Check if the user is logged in to Netlify
echo -e "${BLUE}Checking Netlify authentication status...${NC}"
netlify status &> /dev/null

if [ $? -ne 0 ]; then
  echo -e "${YELLOW}You are not logged in to Netlify. Starting login process...${NC}"
  netlify login
  
  if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to log in to Netlify. Please try again manually with: netlify login${NC}"
    exit 1
  fi
  
  echo -e "${GREEN}Successfully logged in to Netlify!${NC}"
else
  echo -e "${GREEN}You are already logged in to Netlify.${NC}"
  netlify status
fi

# Check if a site is linked
echo -e "${BLUE}Checking for linked Netlify sites...${NC}"
SITE_INFO=$(netlify status)

if ! echo "$SITE_INFO" | grep -q "Linked site:"; then
  echo -e "${YELLOW}No site is currently linked. Would you like to link one? (y/N)${NC}"
  read -r LINK_SITE
  
  if [[ "$LINK_SITE" =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}Starting site linking process...${NC}"
    netlify link
    
    if [ $? -ne 0 ]; then
      echo -e "${YELLOW}Site linking was not completed. You can link a site later with: netlify link${NC}"
    else
      echo -e "${GREEN}Successfully linked to Netlify site!${NC}"
    fi
  else
    echo -e "${YELLOW}No site linked. You can link a site later with: netlify link${NC}"
  fi
else
  echo -e "${GREEN}Site is already linked:${NC}"
  echo "$SITE_INFO" | grep "Linked site:"
fi

# Check for netlify.toml
echo -e "${BLUE}Checking for netlify.toml configuration...${NC}"
if [ ! -f "netlify.toml" ]; then
  echo -e "${YELLOW}No netlify.toml found in the project root. Would you like to create one? (y/N)${NC}"
  read -r CREATE_CONFIG
  
  if [[ "$CREATE_CONFIG" =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}Creating netlify.toml with default settings...${NC}"
    
    cat > netlify.toml << 'EOF'
[build]
  command = "npm run netlify-build"
  publish = ".next"
  
[build.environment]
  NODE_VERSION = "18"
  NODE_OPTIONS = "--max-old-space-size=4096"
  NEXT_TELEMETRY_DISABLED = "1"
  NEXT_IGNORE_ESLINT = "1"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[plugins]]
  package = "netlify-plugin-cache-nextjs"

[[redirects]]
  from = "/_next/static/*"
  to = "/static/:splat"
  status = 200

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
EOF
    
    echo -e "${GREEN}netlify.toml created successfully!${NC}"
  else
    echo -e "${YELLOW}No netlify.toml created. You may need to create one later for proper configuration.${NC}"
  fi
else
  echo -e "${GREEN}netlify.toml found in project root.${NC}"
fi

# Verify OpenAI API key for the Netlify agents
echo -e "${BLUE}Checking for OpenAI API key for Netlify agents...${NC}"
if [ -z "$OPENAI_API_KEY" ]; then
  if [ -f ".env" ] && grep -q "OPENAI_API_KEY" .env; then
    echo -e "${GREEN}OPENAI_API_KEY found in .env file.${NC}"
    export $(grep "OPENAI_API_KEY" .env | xargs)
  else
    echo -e "${YELLOW}No OPENAI_API_KEY found. This is required for Netlify AI agents.${NC}"
    echo -e "${YELLOW}Please enter your OpenAI API key:${NC}"
    read -s OPENAI_KEY
    
    if [ -z "$OPENAI_KEY" ]; then
      echo -e "${RED}No API key provided. Netlify agents will not function without an OpenAI API key.${NC}"
    else
      export OPENAI_API_KEY="$OPENAI_KEY"
      
      # Add to .env file if it exists or create it
      if [ -f ".env" ]; then
        if grep -q "OPENAI_API_KEY" .env; then
          sed -i'' -e "s/OPENAI_API_KEY=.*/OPENAI_API_KEY=$OPENAI_KEY/" .env
        else
          echo "OPENAI_API_KEY=$OPENAI_KEY" >> .env
        fi
      else
        echo "OPENAI_API_KEY=$OPENAI_KEY" > .env
      fi
      
      echo -e "${GREEN}OpenAI API key has been set.${NC}"
    fi
  fi
else
  echo -e "${GREEN}OPENAI_API_KEY is already set in the environment.${NC}"
fi

# Install Python dependencies for the agents
echo -e "${BLUE}Checking Python dependencies for Netlify agents...${NC}"
if ! command -v python3 &> /dev/null; then
  echo -e "${RED}Python 3 is required but not installed. Please install Python 3 to use Netlify agents.${NC}"
else
  echo -e "${GREEN}Python 3 is installed.${NC}"
  
  # Install required packages
  echo -e "${BLUE}Installing required Python packages...${NC}"
  pip3 install agno openai python-dotenv duckduckgo-search
  
  echo -e "${GREEN}Python dependencies installed successfully!${NC}"
fi

echo -e "${GREEN}Netlify setup completed! You can now use the Netlify agents and tools.${NC}"
echo -e "${BLUE}Try running a test with: npm run test-netlify-agent${NC}" 