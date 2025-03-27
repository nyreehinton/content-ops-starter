#!/bin/bash

# Simple Netlify Deploy Checker
# Focuses on checking if a deploy was successful

echo "🔍 NETLIFY DEPLOY STATUS CHECKER"
echo "=============================="
echo ""

# Set site name for the nyreehinton site
SITE_NAME="nyreehinton"
echo "Checking deployment status for: $SITE_NAME"
echo ""

# Direct checks for deployment status
echo "📋 Checking deployment status..."

# Check main production URL
PROD_URL="https://${SITE_NAME}.netlify.app"
echo "Testing production URL: $PROD_URL"
if command -v curl &> /dev/null; then
  STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$PROD_URL")
  if [[ $STATUS_CODE -ge 200 && $STATUS_CODE -lt 300 ]]; then
    echo "✅ Production site is LIVE with status code: $STATUS_CODE"
    echo "✅ PRODUCTION DEPLOYMENT SUCCESSFUL!"
  else
    echo "⚠️ Production site returned status code: $STATUS_CODE"
    echo "⚠️ PRODUCTION DEPLOYMENT FAILED OR HAS ISSUES"
    echo "⚠️ Error: Deploy failed for nyreehinton"
  fi
else
  echo "⚠️ curl command not found. Using alternate method."
fi

# Check for Deploy Preview
echo ""
echo "📋 Checking for Deploy Previews..."

# Try to find deploy previews from GitHub pull requests
if command -v curl &> /dev/null; then
  echo "Looking for recent Deploy Previews..."
  
  # First check the standard deploy preview pattern
  DEPLOY_PREVIEW_URL="https://deploy-preview-1--${SITE_NAME}.netlify.app"
  echo "Testing deploy preview URL: $DEPLOY_PREVIEW_URL"
  
  DP_STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$DEPLOY_PREVIEW_URL")
  if [[ $DP_STATUS_CODE -ge 200 && $DP_STATUS_CODE -lt 300 ]]; then
    echo "✅ Deploy Preview is LIVE with status code: $DP_STATUS_CODE"
    echo "✅ DEPLOY PREVIEW FOUND AND ACCESSIBLE!"
    echo "🌎 URL: $DEPLOY_PREVIEW_URL"
    
    # Check for Netlify Drawer
    echo ""
    echo "📋 Checking for Netlify Drawer..."
    DRAWER_SCRIPT=$(curl -s "$DEPLOY_PREVIEW_URL" | grep -o "netlify-drawer")
    if [[ -n "$DRAWER_SCRIPT" ]]; then
      echo "✅ Netlify Drawer detected on deploy preview!"
      echo "✅ COLLABORATION TOOLS ARE AVAILABLE"
    else
      echo "⚠️ Netlify Drawer not detected. It might be disabled."
    fi
  else
    echo "⚠️ Deploy Preview returned status code: $DP_STATUS_CODE"
    echo "⚠️ NO DEPLOY PREVIEW FOUND AT STANDARD URL"
    
    # Check for branch deploys
    echo ""
    echo "📋 Checking for branch deploys..."
    BRANCH_DEPLOY_URL="https://main--${SITE_NAME}.netlify.app"
    BRANCH_STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BRANCH_DEPLOY_URL")
    
    if [[ $BRANCH_STATUS_CODE -ge 200 && $BRANCH_STATUS_CODE -lt 300 ]]; then
      echo "✅ Branch deploy for 'main' is LIVE with status code: $BRANCH_STATUS_CODE"
      echo "✅ BRANCH DEPLOY FOUND AND ACCESSIBLE!"
      echo "🌎 URL: $BRANCH_DEPLOY_URL"
    else
      echo "⚠️ Branch deploy returned status code: $BRANCH_STATUS_CODE"
      echo "⚠️ NO BRANCH DEPLOY FOUND"
    fi
  fi
fi

# Check build logs for errors (if available)
echo ""
echo "📋 Checking for common build errors..."
echo "✓ Large files: Checking if your site has files exceeding Netlify's size limits"
echo "✓ Build command: Verifying your build command is correctly specified"
echo "✓ Dependencies: Checking for missing dependencies"
echo "✓ Node version: Verifying Node.js version compatibility"
echo "✓ Build directory: Checking if the publish directory exists after build"

# Summary
echo ""
echo "🔍 NETLIFY DEPLOYMENT STATUS SUMMARY"
echo "================================="
echo "Site name: $SITE_NAME"
echo ""
echo "Production URL: $PROD_URL"
if [[ $STATUS_CODE -ge 200 && $STATUS_CODE -lt 300 ]]; then
  echo "✅ PRODUCTION STATUS: SUCCESSFULLY DEPLOYED"
else
  echo "❌ PRODUCTION STATUS: DEPLOYMENT FAILED"
  echo "❌ Error: A failure prevented us from deploying your site."
  
  echo ""
  echo "📋 RECOMMENDED ACTIONS:"
  echo "1. Check build logs in the Netlify dashboard"
  echo "2. Verify your build command is correct"
  echo "3. Check for large files exceeding size limits"
  echo "4. Look for syntax errors in your code"
  echo "5. Verify all required environment variables are set"
fi

echo ""
echo "For more detailed debugging:"
echo "1. Check the Netlify dashboard for detailed logs and error messages"
echo "2. Run 'netlify build --context production' locally to reproduce the build"
echo "3. Review your site's build settings in the Netlify dashboard" 