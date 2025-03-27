#!/bin/bash

# Script to set up Netlify environment variables and configurations

# Exit on any error
set -e

# Define colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Setting up Netlify environment...${NC}"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
  echo -e "${YELLOW}Netlify CLI not found, installing...${NC}"
  npm install -g netlify-cli
fi

# Check if user is logged in to Netlify
netlify status >/dev/null 2>&1
if [ $? -ne 0 ]; then
  echo -e "${YELLOW}You are not logged in to Netlify. Please login:${NC}"
  netlify login
fi

# Create or update netlify.toml if it doesn't exist or is minimal
if [ ! -f "netlify.toml" ] || [ $(wc -l < netlify.toml) -lt 5 ]; then
  echo -e "${YELLOW}Creating/updating netlify.toml with default settings...${NC}"
  
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

  echo -e "${GREEN}netlify.toml created/updated successfully.${NC}"
fi

# Prompt for environment variables
echo -e "${BLUE}Setting up environment variables for Netlify...${NC}"
echo -e "${YELLOW}These variables will be synced with your Netlify site.${NC}"

# Function to add/update environment variables
add_env_var() {
  local var_name="$1"
  local var_prompt="$2"
  local var_default="$3"
  local is_sensitive="${4:-false}"
  
  # Read current value from .env if it exists
  local current_value=""
  if [ -f ".env" ]; then
    current_value=$(grep "^$var_name=" .env | cut -d '=' -f2)
  fi
  
  # Set default from current value if available
  if [ -n "$current_value" ]; then
    var_default="$current_value"
  fi
  
  # Prompt for value
  local prompt_text="$var_prompt"
  if [ -n "$var_default" ]; then
    prompt_text="$var_prompt (default: $var_default)"
  fi
  
  local var_value=""
  if [ "$is_sensitive" = "true" ]; then
    read -p "$prompt_text: " -s var_value
    echo ""
  else
    read -p "$prompt_text: " var_value
  fi
  
  # Use default if no input provided
  if [ -z "$var_value" ]; then
    var_value="$var_default"
  fi
  
  # Add to .env file
  if [ -f ".env" ]; then
    if grep -q "^$var_name=" .env; then
      # Variable exists, update it
      sed -i'' -e "s|^$var_name=.*|$var_name=$var_value|" .env
    else
      # Variable doesn't exist, add it
      echo "$var_name=$var_value" >> .env
    fi
  else
    # .env doesn't exist, create it
    echo "$var_name=$var_value" > .env
  fi
  
  echo -e "${GREEN}Environment variable $var_name has been set.${NC}"
}

# Add required environment variables
add_env_var "OPENAI_API_KEY" "Enter your OpenAI API key" "" "true"
add_env_var "NETLIFY_SITE_ID" "Enter your Netlify site ID (leave blank to set later)" ""
add_env_var "NETLIFY_AUTH_TOKEN" "Enter your Netlify authentication token (leave blank to set later)" "" "true"

# Ask if user wants to sync environment variables with Netlify
read -p "Do you want to sync these environment variables with your Netlify site? (y/N): " SYNC_ENV
if [[ "$SYNC_ENV" == "y" || "$SYNC_ENV" == "Y" ]]; then
  echo -e "${BLUE}Syncing environment variables with Netlify...${NC}"
  
  # Check if site is linked
  if ! netlify status | grep -q "Linked sites"; then
    echo -e "${YELLOW}No site is linked. Please link a site:${NC}"
    netlify link
  fi
  
  # Extract variables from .env and set them in Netlify
  if [ -f ".env" ]; then
    while IFS='=' read -r key value || [ -n "$key" ]; do
      # Skip comments and empty lines
      if [[ $key == \#* ]] || [ -z "$key" ]; then
        continue
      fi
      
      echo -e "Setting Netlify environment variable: ${BLUE}$key${NC}"
      netlify env:set "$key" "$value"
    done < .env
  fi
  
  echo -e "${GREEN}Environment variables synced with Netlify.${NC}"
fi

echo -e "${GREEN}Netlify environment setup completed successfully!${NC}" 