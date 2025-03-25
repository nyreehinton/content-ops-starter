#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
  echo -e "\n${BLUE}=== $1 ===${NC}\n"
}

print_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
  echo -e "${RED}✗ $1${NC}"
}

print_warning() {
  echo -e "${YELLOW}⚠ $1${NC}"
}

print_help() {
  echo "Netlify Site Deployment Tool"
  echo "---------------------------"
  echo "This tool builds and deploys your site to Netlify."
  echo ""
  echo "Usage: $0 [command]"
  echo ""
  echo "Commands:"
  echo "  build        Build the site locally"
  echo "  deploy       Deploy the built site to Netlify"
  echo "  build-deploy Build and deploy in one step"
  echo "  status       Check deployment status"
  echo "  help         Show this help message"
  echo ""
  echo "Configuration:"
  echo "Set your Netlify credentials in .env file or as environment variables:"
  echo "  NETLIFY_AUTH_TOKEN - Your Netlify personal access token"
  echo "  NETLIFY_SITE_ID    - Your Netlify site ID"
}

# Check if .env file exists and load it
if [ -f ".env" ]; then
  print_success "Loading environment variables from .env file"
  export $(grep -v '^#' .env | xargs)
else
  print_warning "No .env file found. Make sure NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID are set."
fi

# Check for required environment variables
if [ -z "$NETLIFY_AUTH_TOKEN" ]; then
  print_error "NETLIFY_AUTH_TOKEN is not set. Please set it in your .env file or environment."
  exit 1
fi

if [ -z "$NETLIFY_SITE_ID" ]; then
  print_error "NETLIFY_SITE_ID is not set. Please set it in your .env file or environment."
  exit 1
fi

# Parse command
COMMAND=${1:-help}

print_header "Netlify Deployment Tool"

# Execute the appropriate command
case "$COMMAND" in
  build)
    print_header "Building Site"
    node netlify-tools/netlify-agent/netlify-deployment-agent.js build
    ;;
  deploy)
    print_header "Deploying Site"
    node netlify-tools/netlify-agent/netlify-deployment-agent.js deploy
    ;;
  build-deploy)
    print_header "Building and Deploying Site"
    node netlify-tools/netlify-agent/netlify-deployment-agent.js build-deploy
    ;;
  status)
    print_header "Checking Deployment Status"
    node netlify-tools/netlify-agent/netlify-deployment-agent.js status
    ;;
  help)
    print_help
    ;;
  *)
    print_error "Unknown command: $COMMAND"
    print_help
    exit 1
    ;;
esac

exit 0 