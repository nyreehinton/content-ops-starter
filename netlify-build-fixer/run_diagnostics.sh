#!/bin/bash

echo "Netlify Build Debug Agent - FULL DIAGNOSTIC MODE"
echo "----------------------------------------------"
echo "Running all available diagnostic tasks..."

# Ensure we're in the right directory
cd "$(dirname "$0")"

# Run the agent with key tasks
echo -e "\n1. Validating Netlify configuration with the full agent..."
python3 netlify_debug_agent.py

# Run specific Netlify commands
echo -e "\n2. Checking Netlify site status..."
netlify status

echo -e "\n3. Checking Netlify CLI version..."
netlify --version

echo -e "\n4. Listing Netlify sites..."
netlify sites:list

echo -e "\n5. Displaying Netlify configuration..."
if [ -f "../../netlify.toml" ]; then
  cat "../../netlify.toml"
else
  echo "netlify.toml not found in the expected location"
fi

echo -e "\n6. Checking for package.json..."
if [ -f "../../package.json" ]; then
  cat "../../package.json" | grep -A 5 '"dependencies":'
  cat "../../package.json" | grep -A 5 '"devDependencies":'
else
  echo "package.json not found in the expected location"
fi

echo -e "\n7. Checking Netlify build logs command..."
netlify logs --help

echo -e "\n8. Checking available Netlify commands..."
netlify help

echo -e "\n✅ Netlify Debug Agent full diagnostic is complete!"
echo "Review the results above for insights into your Netlify configuration and build process." 