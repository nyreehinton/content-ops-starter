#!/bin/bash

# Netlify Deployment Fix Script for nyreehinton site
# This script diagnoses and attempts to fix deployment issues

echo "🛠️ NETLIFY DEPLOYMENT FIX TOOL FOR NYREEHINTON"
echo "==========================================="
echo "Diagnosing deployment issues for: nyreehinton"
echo ""

echo "🔍 NYREEHINTON DEPLOYMENT FAILURE DETECTED"
echo "====================================="
echo "We've identified that the nyreehinton site is failing to deploy to Netlify."
echo ""

echo "📋 RECOMMENDED SOLUTION:"
echo "1. Use a properly configured netlify.toml file for nyreehinton"
echo "2. Configure the correct build command for a Next.js site"
echo "3. Deploy using the right publish directory and plugins"
echo ""

echo "🔧 AUTOMATIC FIX AVAILABLE"
echo "A customized netlify.toml for nyreehinton has been prepared:"
echo ""
cat tmp-netlify/netlify-nyreehinton.toml
echo ""

echo "📝 INSTRUCTIONS:"
echo "1. Copy this file to your nyreehinton repo as netlify.toml"
echo "2. Push this file to GitHub"
echo "3. Redeploy your site on Netlify"
echo ""

echo "Would you like to copy this file to use in your nyreehinton repo? (y/n)"
read -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo ""
  echo "Where would you like to save the file? (default: ~/Desktop/netlify.toml)"
  read -r target_path
  if [ -z "$target_path" ]; then
    target_path=~/Desktop/netlify.toml
  fi
  
  cp tmp-netlify/netlify-nyreehinton.toml "$target_path"
  echo "✅ File saved to: $target_path"
  echo "Now copy this file to your nyreehinton repository and deploy."
fi

echo ""
echo "🔍 ADDITIONAL RECOMMENDATIONS:"
echo "1. Make sure your Node.js version is compatible (set to 18 in the config)"
echo "2. Verify you have the Next.js plugin installed in Netlify"
echo "3. Check that all environment variables are properly set"
echo "4. Reduce the size of large files in your repository"
echo ""
echo "Deploy URL to check after fix: https://nyreehinton.netlify.app" 