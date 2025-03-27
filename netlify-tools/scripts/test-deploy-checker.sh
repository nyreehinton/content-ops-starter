#!/bin/bash

# Simple test script for Netlify Deploy Checker
# This script runs a simplified check for Netlify site deployment

set -e

echo "🧪 Testing Netlify Deploy Status..."

# Check if site name was provided
if [ -z "$1" ]; then
  echo "⚠️ Usage: $0 <netlify-site-name>"
  echo "Example: $0 nyreehinton"
  exit 1
fi

SITE_NAME=$1
SITE_URL="https://${SITE_NAME}.netlify.app"

# Check if it's a custom domain
if [[ "$SITE_NAME" == "nyreehinton" ]]; then
  SITE_URL="https://nyreehinton.com"
  echo "📝 Using custom domain: $SITE_URL"
fi

echo ""
echo "🔍 Direct site check..."
echo "----------------------"
echo "Checking if $SITE_URL is accessible..."

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check site accessibility using curl or wget
if command_exists curl; then
  echo "Using curl to check site status..."
  
  # First check if the site is up with a HEAD request
  HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --head "$SITE_URL")
  echo "HTTP Status Code: $HTTP_STATUS"
  
  if [[ "$HTTP_STATUS" == "200" ]]; then
    echo "✅ Site is accessible!"
    
    # Now check for expected content on the homepage
    if curl -s "$SITE_URL" | grep -i "Nyree Hinton" > /dev/null; then
      echo "✅ Homepage contains expected content!"
    else
      echo "⚠️ Homepage might be missing expected content. Downloading for inspection..."
      curl -s "$SITE_URL" -o homepage_content.html
      echo "⚠️ Downloaded homepage to homepage_content.html for manual inspection"
      
      # Count lines in the downloaded file
      LINE_COUNT=$(wc -l < homepage_content.html)
      echo "Downloaded file has $LINE_COUNT lines"
      
      # Show the first 10 lines
      echo "First 10 lines of content:"
      head -n 10 homepage_content.html
    fi
  else
    echo "❌ Site returned HTTP status code: $HTTP_STATUS"
  fi
  
  # Check deployment status directly using Netlify API (doesn't require authentication for public info)
  echo ""
  echo "Checking recent deployment status..."
  if command_exists jq; then
    NETLIFY_API_URL="https://api.netlify.com/api/v1/sites/${SITE_NAME}.netlify.app"
    echo "Fetching from: $NETLIFY_API_URL"
    curl -s "$NETLIFY_API_URL" | jq '.state' 
  else
    echo "⚠️ jq not available. Cannot parse Netlify API response."
  fi
elif command_exists wget; then
  echo "Using wget to check site status..."
  
  if wget -q --spider "$SITE_URL"; then
    echo "✅ Site is accessible!"
    
    # Check content with wget
    if wget -q -O - "$SITE_URL" | grep -i "Nyree Hinton" > /dev/null; then
      echo "✅ Homepage appears to contain expected content!"
    else
      echo "⚠️ Homepage might be missing expected content. Downloading for inspection..."
      wget -q -O homepage_content.html "$SITE_URL"
      echo "⚠️ Downloaded homepage to homepage_content.html for manual inspection"
    fi
  else
    echo "❌ Site appears to be down or returning an error code"
  fi
else
  echo "⚠️ Neither curl nor wget is available. Skipping content check."
fi

echo ""
echo "✅ Testing complete!"
echo ""
echo "For production use:"
echo "  - Set up your environment variables in .env"
echo "  - Configure webhooks in your Netlify site settings"
echo "  - Use the tools in your CI/CD pipeline as needed"
echo ""
echo "See netifly-agents/netlify-setup-guide.md for detailed instructions." 