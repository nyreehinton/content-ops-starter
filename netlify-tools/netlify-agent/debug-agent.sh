#!/bin/bash

# Netlify Build Debug Agent
# This script helps diagnose and fix common Netlify build issues

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

# Check if a file exists
check_file() {
  if [ -f "../$1" ]; then
    success "Found $1"
    return 0
  else
    error "Missing $1"
    return 1
  fi
}

# Introduction
echo -e "${CYAN}=== Netlify Build Debug Agent ===${NC}"
echo -e "${CYAN}Diagnosing build configuration...${NC}"
echo ""

# Check for required files
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
  exit 1
fi

# Check Netlify configuration
info "Checking Netlify configuration..."
build_command=$(grep -E "command\s*=\s*\".*\"" ../netlify.toml | head -1 | sed -E 's/.*command\s*=\s*"([^"]+)".*/\1/')

if [ -n "$build_command" ]; then
  info "Current build command: $build_command"
  
  # Check if linting and type checking are included
  if [[ "$build_command" != *"lint"* ]] && [[ "$build_command" != *"type-check"* ]]; then
    warning "Build command does not include linting or type checking"
  fi
else
  error "Could not find build command in netlify.toml"
fi

# Check package.json scripts
info "Checking package.json scripts..."
if [ -f "../package.json" ]; then
  build_script=$(grep -E "\"build\":" ../package.json | head -1 | sed -E 's/.*"build":\s*"([^"]+)".*/\1/')
  lint_script=$(grep -E "\"lint\":" ../package.json | head -1 | sed -E 's/.*"lint":\s*"([^"]+)".*/\1/')
  type_check_script=$(grep -E "\"type-check\":" ../package.json | head -1 | sed -E 's/.*"type-check":\s*"([^"]+)".*/\1/')
  
  if [ -n "$build_script" ]; then
    info "Current build script: $build_script"
  else
    error "No build script found in package.json"
  fi
  
  if [ -n "$lint_script" ]; then
    success "Found lint script: $lint_script"
  else
    warning "No lint script found in package.json"
  fi
  
  if [ -n "$type_check_script" ]; then
    success "Found type-check script: $type_check_script"
  else
    warning "No type-check script found in package.json"
  fi
else
  error "package.json not found"
fi

# Run a test build
echo ""
info "Running a test build to verify configuration..."
cd .. && NODE_ENV=production NEXT_IGNORE_ESLINT=1 npm run build

if [ $? -eq 0 ]; then
  echo ""
  success "Build completed successfully! Your project should build successfully on Netlify."
else
  echo ""
  error "Build failed. Please review the errors and fix your configuration."
fi