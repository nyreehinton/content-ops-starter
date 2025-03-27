#!/bin/bash

# Script to deploy the site to Netlify after running validation agents

# Exit on any error
set -e

# Default deployment mode
DEPLOY_MODE="draft"

# Parse command-line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --prod|--production)
      DEPLOY_MODE="prod"
      shift
      ;;
    --draft)
      DEPLOY_MODE="draft"
      shift
      ;;
    --site=*)
      SITE_NAME="${1#*=}"
      shift
      ;;
    --no-verify)
      NO_VERIFY=true
      shift
      ;;
    *)
      echo "Unknown argument: $1"
      echo "Usage: $0 [--prod|--draft] [--site=site-name] [--no-verify]"
      exit 1
      ;;
  esac
done

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
  echo "Netlify CLI not found, installing..."
  npm install -g netlify-cli
fi

# Optional: Run diagnostic agent first to check for issues
echo "Running diagnostic checks before deployment..."
bash netlify-tools/scripts/start-agent.sh diagnostic

# Check if any blockers were found
if [ $? -ne 0 ]; then
  echo "Warning: Diagnostic checks found issues that might prevent successful deployment."
  read -p "Continue with deployment anyway? (y/N): " CONTINUE
  if [[ "$CONTINUE" != "y" && "$CONTINUE" != "Y" ]]; then
    echo "Deployment aborted."
    exit 1
  fi
fi

# Build the site
echo "Building site..."
npm run build

if [ $? -ne 0 ]; then
  echo "Build failed. Running debug agent to help diagnose the issue..."
  bash netlify-tools/scripts/start-agent.sh debug
  exit 1
fi

# Deploy to Netlify
if [ "$DEPLOY_MODE" == "prod" ]; then
  echo "Deploying to production..."
  if [ -n "$SITE_NAME" ]; then
    netlify deploy --prod --site="$SITE_NAME"
  else
    netlify deploy --prod
  fi
else
  echo "Deploying draft version..."
  if [ -n "$SITE_NAME" ]; then
    netlify deploy --site="$SITE_NAME"
  else
    netlify deploy
  fi
fi

# Check deployment status
DEPLOY_STATUS=$?
if [ $DEPLOY_STATUS -ne 0 ]; then
  echo "Deployment failed. Running debug agent to help diagnose the issue..."
  bash netlify-tools/scripts/start-agent.sh debug
  exit 1
else
  echo "Deployment initiated successfully!"
  
  # Verify deployment (unless --no-verify flag is used)
  if [ "$NO_VERIFY" != "true" ] && [ -n "$SITE_NAME" ]; then
    echo "Verifying deployment status..."
    
    # Check if Python or Node.js is available for verification
    if command -v python3 &> /dev/null && [ -f "netifly-agents/netlify-deploy-checker.py" ]; then
      # Use Python version
      echo "Using Python deploy checker..."
      python3 netifly-agents/netlify-deploy-checker.py "$SITE_NAME" --verbose
      VERIFY_STATUS=$?
    elif command -v node &> /dev/null && [ -f "netifly-agents/netlify-node-checker.js" ]; then
      # Use Node.js version
      echo "Using Node.js deploy checker..."
      node netifly-agents/netlify-node-checker.js "$SITE_NAME" --verbose
      VERIFY_STATUS=$?
    else
      echo "Warning: Deploy verification tools not found or dependencies not installed."
      echo "Run 'npm run setup-deploy-checker' to set up the verification tools."
      VERIFY_STATUS=0
    fi
    
    if [ $VERIFY_STATUS -ne 0 ]; then
      echo "❌ Deployment verification failed. Check the logs for details."
      exit 1
    else
      echo "✅ Deployment verified successfully!"
    fi
  fi
fi 