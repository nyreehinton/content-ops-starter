#!/bin/bash

# Netlify Build Diagnostic Tool
# This script helps diagnose and fix Netlify build issues

echo "Running Netlify Build Agent v1.0.0"
echo "Checking build configuration..."

# Check if netlify.toml exists
if [ -f ../netlify.toml ]; then
  echo "✅ netlify.toml found"
else
  echo "❌ netlify.toml not found"
  exit 1
fi

# Check build command
BUILD_CMD=$(grep -m 1 "command" ../netlify.toml | cut -d "=" -f 2 | tr -d '"')
echo "Current build command: $BUILD_CMD"

# Check Next.js configuration
if [ -f ../next.config.js ]; then
  echo "✅ next.config.js found"
  
  # Check for problematic ESLint settings
  if grep -q "ignoreDuringBuilds" ../next.config.js; then
    ESLINT_CONFIG=$(grep -A 5 "eslint" ../next.config.js)
    echo "Current ESLint config in next.config.js:"
    echo "$ESLINT_CONFIG"
  fi
else
  echo "❌ next.config.js not found"
fi

# Check ESLint configuration
if [ -f ../.eslintrc.json ]; then
  echo "✅ .eslintrc.json found"
  echo "ESLint config: $(cat ../.eslintrc.json)"
else
  echo "❌ .eslintrc.json not found"
fi

# Check for package.json scripts
if [ -f ../package.json ]; then
  echo "✅ package.json found"
  SCRIPTS=$(grep -A 10 "scripts" ../package.json)
  echo "Current scripts:"
  echo "$SCRIPTS"
else
  echo "❌ package.json not found"
fi

# Run a test build
echo "Running a test build to diagnose issues..."
cd .. && NODE_ENV=production NEXT_IGNORE_ESLINT=1 npm run build

echo "Netlify Build Agent diagnostics complete." 