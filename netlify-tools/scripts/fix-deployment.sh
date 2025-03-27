#!/bin/bash
# Comprehensive script to fix Netlify deployment issues

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "==============================================================="
echo -e "${BLUE}NETLIFY DEPLOYMENT FIX UTILITY${NC}"
echo "==============================================================="

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null
then
    echo -e "${YELLOW}Netlify CLI not found. Installing...${NC}"
    npm install -g netlify-cli
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to install Netlify CLI. Please install it manually with 'npm install -g netlify-cli'.${NC}"
        exit 1
    else
        echo -e "${GREEN}Netlify CLI installed successfully!${NC}"
    fi
else
    echo -e "${GREEN}Netlify CLI is already installed.${NC}"
fi

# Check for authentication token
echo -e "${BLUE}Checking Netlify authentication...${NC}"
if [ -z "$NETLIFY_AUTH_TOKEN" ]; then
    echo -e "${YELLOW}NETLIFY_AUTH_TOKEN not set. Logging in interactively...${NC}"
    netlify login
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to authenticate with Netlify. Please set NETLIFY_AUTH_TOKEN environment variable or login manually.${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}NETLIFY_AUTH_TOKEN found.${NC}"
fi

# Check current site status
echo -e "${BLUE}Checking current site status...${NC}"
netlify status

# Ensure we're using the fixed netlify.toml
echo -e "${BLUE}Updating Netlify configuration...${NC}"

# Create a backup of the current netlify.toml if it exists
if [ -f "netlify.toml" ]; then
    echo -e "${YELLOW}Creating backup of current netlify.toml...${NC}"
    cp netlify.toml netlify.toml.backup
fi

# Copy our optimized configuration
echo -e "${BLUE}Applying optimized Netlify configuration...${NC}"
cp netlify-tools/config/netlify.toml netlify.toml

# Verify the content of netlify.toml
echo -e "${BLUE}Verifying netlify.toml content:${NC}"
cat netlify.toml

# Clean the previous build
echo -e "${GREEN}Cleaning previous build artifacts...${NC}"
rm -rf .next
echo -e "${GREEN}Build directory cleaned.${NC}"

# Build the project
echo -e "${BLUE}Building the project...${NC}"
NODE_OPTIONS="--max-old-space-size=4096" npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed. Please check the errors above.${NC}"
    exit 1
else
    echo -e "${GREEN}Build completed successfully!${NC}"
fi

# Deploy to Netlify
echo -e "${BLUE}Deploying to Netlify...${NC}"
netlify deploy --prod

if [ $? -ne 0 ]; then
    echo -e "${RED}Deployment failed. Please check the errors above.${NC}"
    exit 1
else
    echo -e "${GREEN}Deployment completed successfully!${NC}"
    echo -e "${GREEN}To verify the deployment, run: npm run verify-deployment${NC}"
fi

echo "==============================================================="
echo -e "${GREEN}DEPLOYMENT FIX PROCESS COMPLETED${NC}"
echo "==============================================================="
echo -e "If you encounter any issues, please refer to the deployment guide at:"
echo -e "${BLUE}.cursor/build-issues/netlify-nextjs-deployment-guide.md${NC}"
echo ""

exit 0 