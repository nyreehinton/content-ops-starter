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

print_header "Netlify Environment Setup"
echo "This script will help you set up the required Netlify environment variables."
echo "You will need a Netlify personal access token and your site ID."
echo ""
echo "You can find your site ID in the Netlify dashboard under:"
echo "Site Settings > General > Site Details > API ID"
echo ""
echo "To create a personal access token, go to:"
echo "User Settings > Applications > Personal Access Tokens"
echo ""

# Check if .env file exists
ENV_FILE=".env"
if [ -f "$ENV_FILE" ]; then
  # Load existing .env file
  print_warning "Existing .env file found. Checking for Netlify settings..."
  
  # Check if we already have the variables
  NETLIFY_AUTH_TOKEN=$(grep -o 'NETLIFY_AUTH_TOKEN=.*' "$ENV_FILE" | cut -d= -f2)
  NETLIFY_SITE_ID=$(grep -o 'NETLIFY_SITE_ID=.*' "$ENV_FILE" | cut -d= -f2)
  
  if [ ! -z "$NETLIFY_AUTH_TOKEN" ]; then
    print_success "NETLIFY_AUTH_TOKEN already exists."
  fi
  
  if [ ! -z "$NETLIFY_SITE_ID" ]; then
    print_success "NETLIFY_SITE_ID already exists."
  fi
else
  print_warning "No .env file found. Creating a new one."
  touch "$ENV_FILE"
fi

# Ask for missing variables
if [ -z "$NETLIFY_AUTH_TOKEN" ]; then
  echo ""
  echo "Enter your Netlify personal access token:"
  read -s token
  
  if [ -z "$token" ]; then
    print_error "No token provided. Exiting."
    exit 1
  fi
  
  # Check if variable already exists in .env
  if grep -q "NETLIFY_AUTH_TOKEN" "$ENV_FILE"; then
    # Replace existing token
    sed -i '' "s/NETLIFY_AUTH_TOKEN=.*/NETLIFY_AUTH_TOKEN=$token/" "$ENV_FILE"
  else
    # Add new token
    echo "NETLIFY_AUTH_TOKEN=$token" >> "$ENV_FILE"
  fi
  
  print_success "Added NETLIFY_AUTH_TOKEN to $ENV_FILE"
fi

if [ -z "$NETLIFY_SITE_ID" ]; then
  echo ""
  echo "Enter your Netlify site ID:"
  read site_id
  
  if [ -z "$site_id" ]; then
    print_error "No site ID provided. Exiting."
    exit 1
  fi
  
  # Check if variable already exists in .env
  if grep -q "NETLIFY_SITE_ID" "$ENV_FILE"; then
    # Replace existing site ID
    sed -i '' "s/NETLIFY_SITE_ID=.*/NETLIFY_SITE_ID=$site_id/" "$ENV_FILE"
  else
    # Add new site ID
    echo "NETLIFY_SITE_ID=$site_id" >> "$ENV_FILE"
  fi
  
  print_success "Added NETLIFY_SITE_ID to $ENV_FILE"
fi

print_header "Setup Complete"
echo "Your Netlify environment is now configured."
echo "You can now use the deployment tools with:"
echo "  npm run deploy-site build-deploy"
echo ""
echo "To check your settings, run:"
echo "  npm run deploy-site status" 