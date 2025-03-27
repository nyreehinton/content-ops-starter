#!/bin/bash

# Comprehensive deployment fix script that runs all necessary commands to fix and deploy the site

# Color definitions
GREEN="\033[0;32m"
RED="\033[0;31m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
NC="\033[0m" # No Color

echo "==============================================================="
echo -e "${BLUE}NETLIFY COMPREHENSIVE DEPLOYMENT FIX${NC}"
echo "==============================================================="

# Check if netlify-cli is in node_modules
echo -e "${BLUE}Checking Netlify CLI...${NC}"
if [ -f "node_modules/.bin/netlify" ]; then
  echo -e "${GREEN}✓ Netlify CLI found in node_modules${NC}"
  NETLIFY_CMD="npx netlify"
else
  echo -e "${RED}✗ Netlify CLI not found in node_modules${NC}"
  echo -e "${YELLOW}Installing netlify-cli locally...${NC}"
  npm install netlify-cli --save-dev
  NETLIFY_CMD="npx netlify"
  echo -e "${GREEN}✓ Netlify CLI installed${NC}"
fi

# Ensure netlify.toml is correctly set up
echo -e "${BLUE}Ensuring netlify.toml is correctly set up...${NC}"
if [ -L "netlify.toml" ]; then
  echo -e "${YELLOW}Removed existing netlify.toml symlink${NC}"
  rm netlify.toml
fi

# Copy the fixed configuration directly (more reliable than symlinking)
cp netlify-fix.toml netlify.toml
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Success: Copy netlify-fix.toml to netlify.toml${NC}"
else
  echo -e "${RED}✗ Failed: Copy netlify-fix.toml to netlify.toml${NC}"
  exit 1
fi
echo -e "${GREEN}✓ netlify.toml configured${NC}"

# Check next.config.js
echo -e "${BLUE}Checking next.config.js...${NC}"
if grep -q "assetPrefix: ''" next.config.js; then
  echo -e "${GREEN}✓ next.config.js already updated with empty assetPrefix${NC}"
else
  echo -e "${RED}✗ next.config.js needs to be updated${NC}"
  exit 1
fi

# Clean build directories
echo -e "${BLUE}Cleaning build directories...${NC}"
rm -rf .next out
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Success: Clean build directories${NC}"
else
  echo -e "${RED}✗ Failed: Clean build directories${NC}"
  exit 1
fi

# Build the project
echo -e "${BLUE}Building the project...${NC}"
NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS="--max-old-space-size=4096" npx next build --no-lint && cp netlify.toml .next/netlify.toml
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Success: Build project${NC}"
else
  echo -e "${RED}✗ Failed: Build project${NC}"
  exit 1
fi

# Check Netlify authentication
echo -e "${BLUE}Checking Netlify authentication...${NC}"
$NETLIFY_CMD status &>/dev/null
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Netlify already authenticated${NC}"
else
  echo -e "${YELLOW}Netlify not authenticated. Logging in...${NC}"
  $NETLIFY_CMD login
  if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Failed: Netlify login${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ Netlify login successful${NC}"
fi

# Deploy to Netlify
echo -e "${BLUE}Deploying to Netlify...${NC}"
$NETLIFY_CMD deploy --dir=.next --prod
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Success: Deploy to Netlify${NC}"
else
  echo -e "${RED}✗ Failed: Deploy to Netlify${NC}"
  exit 1
fi

echo "==============================================================="
echo -e "${GREEN}DEPLOYMENT PROCESS COMPLETED${NC}"
echo "==============================================================="
echo -e "If you encounter any issues, please refer to the deployment guide at:"
echo -e "${BLUE}.cursor/build-issues/netlify-nextjs-deployment-guide.md${NC}"
echo ""

exit 0 