#!/bin/bash

# Enhanced Netlify Build Debug Agent
# This script implements the expanded capabilities identified in the Netlify build guidelines

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Helper functions
info() {
  echo -e "${BLUE}[INFO]${NC} $1"
}

success() {
  echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
  echo -e "${YELLOW}[WARNING]${NC} $1"
}

error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

heading() {
  echo -e "\n${CYAN}=== $1 ===${NC}"
}

# Check if a file exists
check_file() {
  local file_path="$1"
  if [ -f "$file_path" ]; then
    success "Found $1"
    return 0
  else
    error "Missing $1"
    return 1
  fi
}

# Check if a string exists in a file
check_string_in_file() {
  local file_path="$1"
  local search_string="$2"
  
  if grep -q "$search_string" "$file_path"; then
    return 0
  else
    return 1
  fi
}

# Check for background processes
check_background_processes() {
  local process_count=$(ps aux | grep -v grep | grep -c "$1")
  if [ $process_count -gt 0 ]; then
    warning "Found $process_count background processes matching '$1'"
    ps aux | grep -v grep | grep "$1"
    return 1
  else
    success "No lingering background processes for '$1'"
    return 0
  fi
}

# Introduction
heading "Enhanced Netlify Build Debug Agent"
echo -e "This agent diagnoses and enhances Netlify builds according to best practices"
echo -e "Version: 1.0.0"
echo ""

# MODULE 1: Basic file and configuration checks
heading "Basic Configuration Checks"
info "Checking for required files..."
required_files=("netlify.toml" "next.config.js" ".eslintrc.json" "package.json")
missing_files=0

for file in "${required_files[@]}"; do
  if ! check_file "$file"; then
    missing_files=$((missing_files+1))
  fi
done

if [ $missing_files -gt 0 ]; then
  error "Missing $missing_files required file(s). Please fix before continuing."
else
  success "All required files present"
fi

# Check Netlify configuration
info "Checking Netlify configuration..."
build_command=$(grep -E "command\s*=\s*\".*\"" netlify.toml 2>/dev/null | head -1 | sed -E 's/.*command\s*=\s*"([^"]+)".*/\1/')

if [ -n "$build_command" ]; then
  info "Current build command: $build_command"
  
  # Check if linting and type checking are included
  if [[ "$build_command" != *"lint"* ]] && [[ "$build_command" != *"type-check"* ]]; then
    warning "Build command does not include linting or type checking"
    info "Recommendation: Update build command to include tests: npm run test && npm run build"
  else
    success "Build command includes validation steps"
  fi
else
  error "Could not find build command in netlify.toml"
fi

# MODULE 2: Testing Validation
heading "Testing Validation"

# Check for unit tests
info "Checking for unit testing setup..."
if check_file "jest.config.js" || check_string_in_file "package.json" "\"test\":" || check_file "vitest.config.js"; then
  success "Unit testing appears to be configured"
  
  # Check if tests are part of build
  if [[ "$build_command" == *"test"* ]]; then
    success "Tests are included in build command"
  else
    warning "Tests are configured but not included in build command"
    info "Recommendation: Update build command to: npm run test && $build_command"
  fi
else
  warning "No standard unit testing configuration detected"
  info "Recommendation: Set up Jest or Vitest for unit testing"
fi

# Check for integration testing
info "Checking for integration testing setup..."
if check_file "cypress.config.js" || check_file "playwright.config.js" || check_string_in_file "package.json" "\"cypress\":" || check_string_in_file "package.json" "\"playwright\":"; then
  success "Integration testing appears to be configured"
  
  # Check headless browser configuration
  if check_string_in_file "cypress.config.js" "headless" || check_string_in_file "playwright.config.js" "headless"; then
    success "Headless browser configuration detected"
  else
    warning "Integration testing configured, but headless mode not clearly defined"
    info "Recommendation: Configure headless mode for CI environment"
  fi
else
  warning "No standard integration testing configuration detected"
  info "Recommendation: Set up Cypress or Playwright for integration testing"
fi

# Check for e2e testing
info "Checking for end-to-end testing configuration..."
if check_string_in_file "package.json" "\"e2e\":" || check_string_in_file "netlify.toml" "deploy-preview"; then
  success "End-to-end testing appears to be configured"
else
  warning "No standard end-to-end testing configuration detected"
  info "Recommendation: Use Deploy Previews for end-to-end testing before merging"
fi

# MODULE 3: Resource Management
heading "Resource Management"

# Check for memory limits
info "Checking for memory configuration..."
if check_string_in_file "netlify.toml" "NODE_OPTIONS" && check_string_in_file "netlify.toml" "max_old_space_size"; then
  success "Memory limits configured in netlify.toml"
else
  warning "No memory limit configuration detected"
  info "Recommendation: Add NODE_OPTIONS=\"--max_old_space_size=4096\" to build.environment in netlify.toml"
fi

# Check for lingering processes management
info "Checking for lingering process handling..."
if check_string_in_file "package.json" "\"postbuild\":" || check_string_in_file "package.json" "\"cleanup\":"; then
  success "Post-build cleanup appears to be configured"
else
  warning "No explicit cleanup scripts detected"
  info "Recommendation: Add a postbuild script to clean up any lingering processes"
fi

# MODULE 4: Build Process Enhancement
heading "Build Process Enhancement"

# Check for proper exit code handling
info "Checking build scripts for proper exit code handling..."
if check_string_in_file "package.json" "\"build\":" && check_string_in_file "package.json" "\"&&\""; then
  success "Build scripts appear to use proper exit code chaining (&&)"
else
  warning "Build scripts may not properly chain commands with &&"
  info "Recommendation: Ensure commands are chained with && to stop on failure"
fi

# Check for build plugins
info "Checking for Netlify build plugins..."
if check_string_in_file "netlify.toml" "[[plugins]]"; then
  success "Netlify plugins configured"
  # Count plugins
  plugin_count=$(grep -c "package =" netlify.toml 2>/dev/null)
  info "Found $plugin_count plugin(s) configured"
else
  warning "No Netlify plugins detected"
  info "Recommendation: Consider adding helpful plugins like @netlify/plugin-nextjs"
fi

# MODULE 5: Deployment Strategy
heading "Deployment Strategy"

# Check for locked deploys capability
info "Checking for locked deploys configuration..."
if check_string_in_file "netlify.toml" "locked"; then
  success "Locked deploys appears to be configured"
else
  info "No locked deploys configuration detected in netlify.toml"
  info "Recommendation: Consider using the 'Stop auto publishing' feature for controlled deployments"
fi

# Check for API-based deploys
info "Checking for API-based deploy configuration..."
if check_file "netlify/functions/trigger-deploy.js" || check_file "netlify/functions/publish-deploy.js"; then
  success "API-based deploy functions detected"
else
  info "No API-based deploy functions detected"
  info "Recommendation: Consider setting up functions for programmatic deploys after tests pass"
fi

# MODULE 6: Notification Integration
heading "Notification Integration"

# Check for GitHub checks integration
info "Checking for GitHub integration..."
if check_file ".github/workflows/netlify.yml"; then
  success "GitHub workflow for Netlify detected"
else
  info "No GitHub workflow for Netlify detected"
  info "Recommendation: Set up a GitHub workflow to ensure tests pass before deployment"
fi

# Check for public build logs
info "Checking site settings for public build logs..."
info "Note: This check requires manual verification in the Netlify UI"
info "Recommendation: Enable public build logs for better collaboration"

# Final assessment
heading "Assessment Summary"

# Run a test build if no critical issues
if [ $missing_files -eq 0 ]; then
  info "Running a test build to verify configuration..."
  echo ""
  NODE_ENV=production npm run build
  
  build_exit_code=$?
  echo ""
  
  if [ $build_exit_code -eq 0 ]; then
    success "Build completed successfully!"
  else
    error "Build failed with exit code $build_exit_code"
  fi
  
  # Check for lingering processes after build
  info "Checking for lingering processes after build..."
  check_background_processes "node"
  check_background_processes "npm"
else
  error "Critical issues must be resolved before running a test build"
fi

heading "Recommendations"
echo -e "1. Ensure all three types of testing are configured (unit, integration, acceptance)"
echo -e "2. Include tests in your build command with proper exit code handling"
echo -e "3. Configure memory limits appropriate for your build needs"
echo -e "4. Set up cleanup scripts for any background processes"
echo -e "5. Use build plugins for common tasks"
echo -e "6. Consider using locked deploys for controlled publishing"
echo -e "7. Set up GitHub checks integration for better workflow"

echo -e "\n${GREEN}Enhanced Netlify Build Debug Agent completed${NC}" 