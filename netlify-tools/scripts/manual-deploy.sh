#!/bin/bash

# Script to trigger a manual Netlify deployment with cache clearing

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Site ID and domain config
SITE_ID="nyreehinton.netlify.app"
DOMAIN="nyreehinton.com"

echo -e "${BLUE}Starting manual Netlify deployment for ${SITE_ID}...${NC}"

# Check if NETLIFY_AUTH_TOKEN is set
if [ -z "$NETLIFY_AUTH_TOKEN" ]; then
  echo -e "${YELLOW}NETLIFY_AUTH_TOKEN environment variable not set.${NC}"
  echo -e "Please set it with: export NETLIFY_AUTH_TOKEN=your_token"
  
  # Prompt for token if not set
  read -p "Would you like to enter your Netlify token now? (y/n): " REPLY
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter your Netlify auth token: " TOKEN
    export NETLIFY_AUTH_TOKEN=$TOKEN
  else
    echo -e "${RED}Deployment canceled. Auth token required.${NC}"
    exit 1
  fi
fi

# Check for Netlify CLI installation
if ! command -v netlify &> /dev/null; then
  echo -e "${YELLOW}Netlify CLI not found. Installing...${NC}"
  npm install -g netlify-cli
  
  if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to install Netlify CLI. Please install manually with: npm install -g netlify-cli${NC}"
    exit 1
  fi
  
  echo -e "${GREEN}Netlify CLI installed successfully.${NC}"
fi

# Clean build cache to prevent stale issues
echo -e "${BLUE}Cleaning build cache...${NC}"
rm -rf .next
rm -rf node_modules/.cache
echo -e "${GREEN}Build cache cleared.${NC}"

# Ensure netlify.toml points to the correct file
echo -e "${BLUE}Updating netlify.toml symlink...${NC}"
if [ -f netlify.toml ] && [ -L netlify.toml ]; then
  # Remove existing symlink
  rm netlify.toml
  
  # Create new symlink
  ln -s netlify-fix.toml netlify.toml
  echo -e "${GREEN}netlify.toml updated to point to netlify-fix.toml${NC}"
else
  # Create new symlink if it doesn't exist
  ln -s netlify-fix.toml netlify.toml
  echo -e "${GREEN}netlify.toml created as symlink to netlify-fix.toml${NC}"
fi

# Check the netlify.toml content
echo -e "${BLUE}Verifying netlify.toml contents:${NC}"
cat netlify.toml

# Build the project
echo -e "${BLUE}Building project...${NC}"
NODE_OPTIONS="--max-old-space-size=4096" npm run build
BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -ne 0 ]; then
  echo -e "${RED}Build failed with exit code ${BUILD_EXIT_CODE}. Fix build errors before deploying.${NC}"
  exit $BUILD_EXIT_CODE
fi

echo -e "${GREEN}Build successful!${NC}"

# Option to use Netlify CLI for deployment
echo -e "${BLUE}How would you like to deploy?${NC}"
echo -e "1) Use Netlify CLI (recommended)"
echo -e "2) Use Direct API"
read -p "Enter option (1 or 2): " DEPLOY_OPTION

if [ "$DEPLOY_OPTION" = "1" ]; then
  # Deploy using Netlify CLI
  echo -e "${BLUE}Deploying with Netlify CLI...${NC}"
  netlify deploy --prod --dir=.next

  if [ $? -ne 0 ]; then
    echo -e "${YELLOW}CLI deployment had issues. Falling back to API deployment...${NC}"
    DEPLOY_OPTION="2"
  else
    echo -e "${GREEN}Deployment completed via Netlify CLI!${NC}"
  fi
fi

if [ "$DEPLOY_OPTION" = "2" ]; then
  # Trigger the deploy using the Netlify API
  echo -e "${BLUE}Triggering Netlify deploy via API...${NC}"
  RESPONSE=$(curl -s -X POST "https://api.netlify.com/api/v1/sites/${SITE_ID}/deploys" \
    -H "Authorization: Bearer ${NETLIFY_AUTH_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"build": true}')

  # Check for error in the response
  if echo "$RESPONSE" | grep -q "error"; then
    echo -e "${RED}Deployment failed:${NC}"
    echo "$RESPONSE" | grep -o '"error":"[^"]*"' || echo "$RESPONSE"
    exit 1
  else
    DEPLOY_URL=$(echo "$RESPONSE" | grep -o '"url":"[^"]*"' | cut -d'"' -f4)
    DEPLOY_ID=$(echo "$RESPONSE" | grep -o '"id":"[^"]*"' | cut -d'"' -f4)
    
    echo -e "${GREEN}Deployment triggered successfully!${NC}"
    echo -e "Deploy ID: ${BLUE}${DEPLOY_ID}${NC}"
  fi
fi

# Provide instructions for manual check
echo -e "\n${YELLOW}To check deployment status:${NC}"
echo -e "1. Visit: https://app.netlify.com/sites/${SITE_ID}/deploys"
echo -e "2. Or open: https://${DOMAIN} once deployment is complete"

# Check if domain is accessible
echo -e "\n${BLUE}Checking if site is accessible...${NC}"
sleep 5 # Wait briefly for deployment to initialize
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://${DOMAIN}")

if [ "$HTTP_STATUS" -eq 200 ]; then
  echo -e "${GREEN}Site is accessible at https://${DOMAIN} with status code ${HTTP_STATUS}${NC}"
  
  # Check content loading
  echo -e "${BLUE}Verifying content loading...${NC}"
  CONTENT_CHECK=$(curl -s "https://${DOMAIN}" | grep -c "Home page content not found")
  
  if [ "$CONTENT_CHECK" -gt 0 ]; then
    echo -e "${YELLOW}Warning: Page appears to be loading but content might be missing.${NC}"
    echo -e "Please manually verify the site content at https://${DOMAIN}"
  else
    echo -e "${GREEN}Content appears to be loading properly.${NC}"
  fi
else
  echo -e "${YELLOW}Site returned status code ${HTTP_STATUS}. It may still be deploying.${NC}"
  echo -e "Please check back in a few minutes."
fi

echo -e "\n${BLUE}Deployment process complete!${NC}"
exit 0 