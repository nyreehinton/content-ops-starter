#!/bin/bash

# This script fixes the CDN domain issue by creating a special public/index.html file
# that has no CDN references and deploying it directly

# Color definitions
GREEN="\033[0;32m"
RED="\033[0;31m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
NC="\033[0m" # No Color

echo "==============================================================="
echo -e "${BLUE}CDN REFERENCE FIX SCRIPT${NC}"
echo "==============================================================="

# Create public directory if it doesn't exist
if [ ! -d "public" ]; then
  mkdir -p public
fi

# Create a simple HTML file without CDN references
echo -e "${BLUE}Creating clean index.html...${NC}"
cat > public/index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nyree Hinton | Financial Analyst & Product Manager</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .container {
      margin-top: 80px;
      text-align: center;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 1.5rem;
      color: #555;
      margin-bottom: 2rem;
    }
    .description {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    .cta {
      display: inline-block;
      background: #0A66C2;
      color: white;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 500;
      margin-top: 1rem;
    }
    .cta:hover {
      background: #0855a1;
    }
    .links {
      margin-top: 3rem;
    }
    .links a {
      display: inline-block;
      margin: 0 15px;
      color: #0A66C2;
      text-decoration: none;
    }
    .links a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Nyree Hinton</h1>
    <h2>Financial Analyst & Product Manager</h2>
    
    <div class="description">
      Expert in financial analysis, market research, and product management with a focus on data-driven strategies.
    </div>
    
    <a href="/tesla" class="cta">View Tesla Analysis</a>
    <a href="/bloomberg" class="cta">View Bloomberg Analysis</a>
    
    <div class="links">
      <a href="https://www.linkedin.com/in/nyreehinton/" target="_blank">LinkedIn</a>
      <a href="mailto:contact@nyreehinton.com">Contact</a>
    </div>
  </div>
</body>
</html>
EOF

echo -e "${GREEN}✓ index.html created${NC}"

# Install Netlify CLI if not available
if ! command -v netlify &> /dev/null; then
  echo -e "${BLUE}Installing Netlify CLI...${NC}"
  npm install netlify-cli --save-dev
  echo -e "${GREEN}✓ Netlify CLI installed${NC}"
  NETLIFY_CMD="npx netlify"
else
  NETLIFY_CMD="netlify"
fi

# Deploy the public directory to Netlify
echo -e "${BLUE}Deploying to Netlify...${NC}"
$NETLIFY_CMD deploy --dir=public --prod
if [ $? -ne 0 ]; then
  echo -e "${RED}Deployment failed${NC}"
  exit 1
fi

echo -e "${GREEN}✓ Deployment successful${NC}"
echo -e "${GREEN}Your site should now be available without CDN issues at: https://nyreehinton.com${NC}"

exit 0 