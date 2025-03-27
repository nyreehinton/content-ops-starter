#!/bin/bash

# Script to check multiple pages on a Netlify site
# Usage: sh check-pages.sh domain

set -e

if [ -z "$1" ]; then
  echo "Please provide a domain name (without https://)"
  echo "Usage: sh check-pages.sh domain"
  exit 1
fi

DOMAIN="$1"
BASE_URL="https://$DOMAIN"

# Create a temporary directory for downloads
TEMP_DIR=$(mktemp -d)
trap 'rm -rf "$TEMP_DIR"' EXIT

# Function to check a specific page
check_page() {
  local path="$1"
  local name="$2"
  local url="${BASE_URL}${path}"
  local output_file="${TEMP_DIR}/${name// /_}.html"
  
  echo "-------------------------------------------"
  echo "🔍 Checking $name at $url"
  
  # Check HTTP status code
  status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$status_code" -eq 200 ]; then
    echo "✅ Status: $status_code (OK)"
    
    # Download content for inspection
    curl -s "$url" > "$output_file"
    content_size=$(wc -c < "$output_file")
    
    # Check for error messages in the content
    if grep -q "page not found" "$output_file" || grep -q "content not found" "$output_file"; then
      echo "⚠️ Warning: Page returns 200 but contains error message"
    else
      echo "✅ Content looks good (size: $content_size bytes)"
    fi
    
    # Check for title
    title=$(grep -o '<title>[^<]*</title>' "$output_file" | sed 's/<title>\(.*\)<\/title>/\1/')
    if [ -n "$title" ]; then
      echo "📝 Title: $title"
    else
      echo "⚠️ Warning: No title found"
    fi
    
  else
    echo "❌ Status: $status_code (Error)"
  fi
  
  echo ""
}

echo "🧪 Testing pages on $BASE_URL"
echo "-------------------------------------------"

# List of pages to check
check_page "/" "Home Page"
check_page "/capital" "Capital Group Page"
check_page "/thirdbridge" "Third Bridge Page"
check_page "/tesla" "Tesla Report Page"
check_page "/bloomberg" "Bloomberg Page"

echo "🏁 Testing complete!"
echo "-------------------------------------------" 