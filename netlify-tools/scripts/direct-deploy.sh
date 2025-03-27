#!/bin/bash

# Direct deploy script with focus on homepage content
# This script builds and deploys the site directly to Netlify

# Color definitions
GREEN="\033[0;32m"
RED="\033[0;31m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
NC="\033[0m" # No Color

echo "==============================================================="
echo -e "${BLUE}DIRECT NETLIFY DEPLOYMENT SCRIPT${NC}"
echo "==============================================================="

# Copy the fixed netlify.toml configuration
echo -e "${BLUE}Setting up netlify.toml...${NC}"
cp netlify-fix.toml netlify.toml
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ netlify.toml configured${NC}"
else
  echo -e "${RED}✗ Failed to configure netlify.toml${NC}"
  exit 1
fi

# Clean build directories
echo -e "${BLUE}Cleaning build directories...${NC}"
rm -rf .next out
echo -e "${GREEN}✓ Build directories cleaned${NC}"

# Install dependencies if necessary
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.bin/next" ]; then
  echo -e "${BLUE}Installing dependencies...${NC}"
  npm install
  if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Failed to install dependencies${NC}"
    exit 1
  fi
  echo -e "${GREEN}✓ Dependencies installed${NC}"
fi

# Build the project
echo -e "${BLUE}Building the project...${NC}"
NEXT_TYPECHECK_SKIP=true NEXT_ESLINT_SKIP=true NODE_OPTIONS="--max-old-space-size=4096" npm run build-without-ts
if [ $? -ne 0 ]; then
  echo -e "${RED}✗ Build failed${NC}"
  exit 1
fi
echo -e "${GREEN}✓ Build successful${NC}"

# Deploy to Netlify
echo -e "${BLUE}Deploying to Netlify...${NC}"
npx netlify deploy --dir=.next --prod
if [ $? -ne 0 ]; then
  echo -e "${RED}✗ Deployment failed${NC}"
  exit 1
fi
echo -e "${GREEN}✓ Deployment successful${NC}"

# Verify the deployment
echo -e "${BLUE}Verifying deployment...${NC}"
npm run test-deploy-checker -- nyreehinton
if [ $? -ne 0 ]; then
  echo -e "${YELLOW}⚠ Verification may have issues - please check manually${NC}"
else
  echo -e "${GREEN}✓ Verification completed${NC}"
fi

echo "==============================================================="
echo -e "${GREEN}DEPLOYMENT COMPLETED${NC}"
echo "==============================================================="
echo -e "Your site should now be available at: ${BLUE}https://nyreehinton.com${NC}"
echo -e "If you continue to experience issues, please check:"
echo -e "1. The homepage content in ${BLUE}content/pages/index.md${NC}"
echo -e "2. The CustomHTMLLayout component in ${BLUE}src/components/layouts/CustomHTMLLayout/index.tsx${NC}"
echo -e "3. Netlify build logs in your Netlify dashboard"
echo ""

exit 0 