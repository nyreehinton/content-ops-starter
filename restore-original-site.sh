#!/bin/bash

# Final Site Restoration Script
# This script finalizes the restoration of the site to its original configuration

echo "=== Content-Ops-Starter Restoration Script ==="
echo "This script will complete the restoration of your website to its original configuration."
echo ""

# Check if git is available
if ! command -v git &> /dev/null; then
  echo "Error: Git is not installed or not in your PATH."
  exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree &> /dev/null; then
  echo "Error: Not in a git repository. Please run this script from your project root."
  exit 1
fi

# Check for netlify-cli
if command -v netlify &> /dev/null; then
  HAS_NETLIFY_CLI=true
else
  HAS_NETLIFY_CLI=false
  echo "Notice: Netlify CLI not found. We'll skip the direct deployment step."
  echo "You'll need to trigger the deployment from the Netlify dashboard after pushing."
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
COMMIT_MESSAGE="Restore site to original configuration"
git commit -m "$COMMIT_MESSAGE"

echo "Changes committed with message: '$COMMIT_MESSAGE'"

# Push to remote
echo "Pushing to remote repository on branch '$CURRENT_BRANCH'..."
git push origin $CURRENT_BRANCH

echo "Changes successfully pushed to GitHub."

# Deploy with Netlify CLI if available
if [ "$HAS_NETLIFY_CLI" = true ]; then
  echo "Triggering Netlify deployment..."
  netlify deploy --prod
  
  echo "Deployment triggered successfully!"
  echo "Your site should be live in a few minutes."
else
  echo "Please go to your Netlify dashboard to trigger a deployment:"
  echo "https://app.netlify.com/"
  echo "Your changes have been pushed to GitHub, which may automatically trigger a deployment depending on your settings."
fi

echo ""
echo "=== Restoration process completed ==="
echo "Your website has been restored to its original configuration."
