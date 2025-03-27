#!/bin/bash

# Netlify Deployment Verification Script
# This script performs a comprehensive check of the deployment status
# and verifies that all fixes have been successfully applied

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Site details
SITE_ID=${1:-"nyreehinton"}
DOMAIN="$SITE_ID.com"
NETLIFY_DOMAIN="$SITE_ID.netlify.app"
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

echo "==============================================================="
echo -e "${BLUE}NETLIFY DEPLOYMENT VERIFICATION - $TIMESTAMP${NC}"
echo "==============================================================="
echo -e "Checking deployment status for: ${YELLOW}$SITE_ID${NC}"
echo ""

# Function to check HTTP status and content
check_site() {
    local url=$1
    local name=$2
    
    echo -e "${BLUE}Checking $name at $url...${NC}"
    
    # Get HTTP status
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$HTTP_STATUS" -eq 200 ]; then
        echo -e "  ${GREEN}✓ Status: $HTTP_STATUS (OK)${NC}"
        
        # Download content and check for issues
        TEMP_FILE=$(mktemp)
        curl -s "$url" > "$TEMP_FILE"
        
        # Check for common error indicators
        if grep -q "Home page content not found" "$TEMP_FILE"; then
            echo -e "  ${RED}✗ Content: Home page content not found error detected${NC}"
            CONTENT_STATUS="FAIL"
        elif grep -q "page\":null" "$TEMP_FILE"; then
            echo -e "  ${RED}✗ Content: Null page data detected in Next.js payload${NC}"
            CONTENT_STATUS="FAIL"
        else
            # Check for positive indicators
            if grep -q "<h1" "$TEMP_FILE"; then
                echo -e "  ${GREEN}✓ Content: Page contains headings${NC}"
                CONTENT_STATUS="PASS"
            else
                echo -e "  ${YELLOW}⚠ Content: No headings found, might be incomplete${NC}"
                CONTENT_STATUS="WARNING"
            fi
        fi
        
        # Check for proper build ID
        BUILD_ID=$(grep -o "buildId\":\"[^\"]*\"" "$TEMP_FILE" | cut -d'"' -f3)
        if [ -n "$BUILD_ID" ]; then
            echo -e "  ${GREEN}✓ Build ID: $BUILD_ID${NC}"
        else
            echo -e "  ${YELLOW}⚠ Build ID: Not found${NC}"
        fi
        
        # Clean up
        rm "$TEMP_FILE"
    else
        echo -e "  ${RED}✗ Status: $HTTP_STATUS (Error)${NC}"
        CONTENT_STATUS="FAIL"
    fi
}

# Function to check assets
check_assets() {
    local url=$1
    local name=$2
    
    echo -e "${BLUE}Checking assets at $name...${NC}"
    
    # Get the homepage to extract asset URLs
    TEMP_FILE=$(mktemp)
    curl -s "$url" > "$TEMP_FILE"
    
    # Extract some CSS and JS URLs
    CSS_URLS=$(grep -o "href=\"[^\"]*\.css\"" "$TEMP_FILE" | cut -d'"' -f2)
    JS_URLS=$(grep -o "src=\"[^\"]*\.js\"" "$TEMP_FILE" | cut -d'"' -f2)
    
    # Check if assets are accessible
    ASSETS_CHECKED=0
    ASSETS_OK=0
    
    echo -e "  Testing random assets:"
    
    # Check up to 3 CSS files
    for url in $CSS_URLS; do
        if [[ $ASSETS_CHECKED -ge 3 ]]; then
            break
        fi
        
        # Handle relative URLs
        if [[ $url == /* ]]; then
            asset_url="https://$DOMAIN$url"
        elif [[ $url != http* ]]; then
            asset_url="https://$DOMAIN/$url"
        else
            asset_url="$url"
        fi
        
        HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$asset_url")
        
        if [ "$HTTP_STATUS" -eq 200 ]; then
            echo -e "  ${GREEN}✓ CSS: $asset_url ($HTTP_STATUS)${NC}"
            ASSETS_OK=$((ASSETS_OK + 1))
        else
            echo -e "  ${RED}✗ CSS: $asset_url ($HTTP_STATUS)${NC}"
        fi
        
        ASSETS_CHECKED=$((ASSETS_CHECKED + 1))
    done
    
    # Check up to 3 JS files
    for url in $JS_URLS; do
        if [[ $ASSETS_CHECKED -ge 6 ]]; then
            break
        fi
        
        # Handle relative URLs
        if [[ $url == /* ]]; then
            asset_url="https://$DOMAIN$url"
        elif [[ $url != http* ]]; then
            asset_url="https://$DOMAIN/$url"
        else
            asset_url="$url"
        fi
        
        HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$asset_url")
        
        if [ "$HTTP_STATUS" -eq 200 ]; then
            echo -e "  ${GREEN}✓ JS: $asset_url ($HTTP_STATUS)${NC}"
            ASSETS_OK=$((ASSETS_OK + 1))
        else
            echo -e "  ${RED}✗ JS: $asset_url ($HTTP_STATUS)${NC}"
        fi
        
        ASSETS_CHECKED=$((ASSETS_CHECKED + 1))
    done
    
    # Clean up
    rm "$TEMP_FILE"
    
    # Summary
    if [ $ASSETS_CHECKED -eq 0 ]; then
        echo -e "  ${YELLOW}⚠ No assets found to check${NC}"
        ASSETS_STATUS="WARNING"
    elif [ $ASSETS_OK -eq $ASSETS_CHECKED ]; then
        echo -e "  ${GREEN}✓ All assets checked ($ASSETS_OK/$ASSETS_CHECKED) are accessible${NC}"
        ASSETS_STATUS="PASS"
    else
        echo -e "  ${RED}✗ Some assets failed ($ASSETS_OK/$ASSETS_CHECKED)${NC}"
        ASSETS_STATUS="FAIL"
    fi
}

# Function to check current Netlify deployment status
check_netlify_status() {
    echo -e "${BLUE}Checking Netlify deployment status...${NC}"
    
    if [ -z "$NETLIFY_AUTH_TOKEN" ]; then
        echo -e "  ${YELLOW}⚠ NETLIFY_AUTH_TOKEN not set, skipping API check${NC}"
        DEPLOY_STATUS="UNKNOWN"
        return
    fi
    
    # Get latest deployment status
    RESPONSE=$(curl -s -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
                "https://api.netlify.com/api/v1/sites/$NETLIFY_DOMAIN/deploys?per_page=1")
    
    # Check if we got an error response
    if echo "$RESPONSE" | grep -q "error"; then
        ERROR_MSG=$(echo "$RESPONSE" | grep -o '"error":"[^"]*"' | cut -d'"' -f4)
        echo -e "  ${RED}✗ API Error: $ERROR_MSG${NC}"
        DEPLOY_STATUS="ERROR"
        return
    fi
    
    # Extract deployment information
    DEPLOY_ID=$(echo "$RESPONSE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
    DEPLOY_STATE=$(echo "$RESPONSE" | grep -o '"state":"[^"]*"' | head -1 | cut -d'"' -f4)
    DEPLOY_URL=$(echo "$RESPONSE" | grep -o '"url":"[^"]*"' | head -1 | cut -d'"' -f4)
    DEPLOY_CREATED=$(echo "$RESPONSE" | grep -o '"created_at":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    if [ -n "$DEPLOY_ID" ]; then
        echo -e "  ${GREEN}✓ Latest deploy ID: $DEPLOY_ID${NC}"
        echo -e "  ${GREEN}✓ Deploy state: $DEPLOY_STATE${NC}"
        echo -e "  ${GREEN}✓ Created at: $DEPLOY_CREATED${NC}"
        
        if [ "$DEPLOY_STATE" = "ready" ]; then
            echo -e "  ${GREEN}✓ Deployment status: LIVE${NC}"
            DEPLOY_STATUS="PASS"
        elif [ "$DEPLOY_STATE" = "building" ] || [ "$DEPLOY_STATE" = "enqueued" ]; then
            echo -e "  ${YELLOW}⚠ Deployment status: IN PROGRESS${NC}"
            DEPLOY_STATUS="WARNING"
        else
            echo -e "  ${RED}✗ Deployment status: $DEPLOY_STATE${NC}"
            DEPLOY_STATUS="FAIL"
        fi
    else
        echo -e "  ${RED}✗ Could not retrieve deployment information${NC}"
        DEPLOY_STATUS="FAIL"
    fi
}

# Execute checks
check_site "https://$DOMAIN" "Custom Domain"
CUSTOM_DOMAIN_STATUS=$CONTENT_STATUS

check_site "https://$NETLIFY_DOMAIN" "Netlify Domain"
NETLIFY_DOMAIN_STATUS=$CONTENT_STATUS

check_assets "https://$DOMAIN" "Custom Domain"
CUSTOM_ASSETS_STATUS=$ASSETS_STATUS

check_netlify_status
NETLIFY_STATUS=$DEPLOY_STATUS

# Final report
echo ""
echo "==============================================================="
echo -e "${BLUE}DEPLOYMENT VERIFICATION SUMMARY${NC}"
echo "==============================================================="
echo -e "Site: ${YELLOW}$SITE_ID${NC}"
echo -e "Timestamp: ${YELLOW}$TIMESTAMP${NC}"
echo ""

# Custom domain status
if [ "$CUSTOM_DOMAIN_STATUS" = "PASS" ]; then
    echo -e "${GREEN}✓ Custom Domain ($DOMAIN): Content loading correctly${NC}"
elif [ "$CUSTOM_DOMAIN_STATUS" = "WARNING" ]; then
    echo -e "${YELLOW}⚠ Custom Domain ($DOMAIN): Content may have issues${NC}"
else
    echo -e "${RED}✗ Custom Domain ($DOMAIN): Content not loading correctly${NC}"
fi

# Netlify domain status
if [ "$NETLIFY_DOMAIN_STATUS" = "PASS" ]; then
    echo -e "${GREEN}✓ Netlify Domain ($NETLIFY_DOMAIN): Content loading correctly${NC}"
elif [ "$NETLIFY_DOMAIN_STATUS" = "WARNING" ]; then
    echo -e "${YELLOW}⚠ Netlify Domain ($NETLIFY_DOMAIN): Content may have issues${NC}"
else
    echo -e "${RED}✗ Netlify Domain ($NETLIFY_DOMAIN): Content not loading correctly${NC}"
fi

# Assets status
if [ "$CUSTOM_ASSETS_STATUS" = "PASS" ]; then
    echo -e "${GREEN}✓ Static Assets: Loading correctly${NC}"
elif [ "$CUSTOM_ASSETS_STATUS" = "WARNING" ]; then
    echo -e "${YELLOW}⚠ Static Assets: Some issues detected${NC}"
else
    echo -e "${RED}✗ Static Assets: Not loading correctly${NC}"
fi

# Netlify deployment status
if [ "$NETLIFY_STATUS" = "PASS" ]; then
    echo -e "${GREEN}✓ Netlify Deployment: Active and healthy${NC}"
elif [ "$NETLIFY_STATUS" = "WARNING" ]; then
    echo -e "${YELLOW}⚠ Netlify Deployment: In progress or incomplete${NC}"
elif [ "$NETLIFY_STATUS" = "UNKNOWN" ]; then
    echo -e "${YELLOW}⚠ Netlify Deployment: Status unknown (auth token not provided)${NC}"
else
    echo -e "${RED}✗ Netlify Deployment: Issues detected${NC}"
fi

# Overall status
echo ""
if [[ "$CUSTOM_DOMAIN_STATUS" = "PASS" && "$NETLIFY_DOMAIN_STATUS" = "PASS" && "$CUSTOM_ASSETS_STATUS" = "PASS" && ("$NETLIFY_STATUS" = "PASS" || "$NETLIFY_STATUS" = "UNKNOWN") ]]; then
    echo -e "${GREEN}✅ OVERALL STATUS: DEPLOYMENT SUCCESSFUL${NC}"
    echo -e "${GREEN}   All checks passed. The site is running correctly.${NC}"
    EXIT_CODE=0
elif [[ "$CUSTOM_DOMAIN_STATUS" = "FAIL" || "$NETLIFY_DOMAIN_STATUS" = "FAIL" || "$CUSTOM_ASSETS_STATUS" = "FAIL" || "$NETLIFY_STATUS" = "FAIL" ]]; then
    echo -e "${RED}❌ OVERALL STATUS: DEPLOYMENT ISSUES DETECTED${NC}"
    echo -e "${RED}   Critical problems found. The site needs attention.${NC}"
    EXIT_CODE=2
else
    echo -e "${YELLOW}⚠️ OVERALL STATUS: DEPLOYMENT PARTIAL SUCCESS${NC}"
    echo -e "${YELLOW}   Some warnings detected. The site may have minor issues.${NC}"
    EXIT_CODE=1
fi

echo -e "\nFull details are available in our deployment guide:"
echo -e "${BLUE}.cursor/build-issues/netlify-nextjs-deployment-guide.md${NC}"
echo ""

exit $EXIT_CODE 