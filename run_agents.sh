#!/bin/bash
# Multi-Agent Runner Script
# This script makes it easy to run the Multi-Agent system with different configurations

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
  echo -e "\n${CYAN}=== $1 ===${NC}\n"
}

print_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
  echo -e "${RED}✗ $1${NC}"
}

print_info() {
  echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
  echo -e "${YELLOW}⚠ $1${NC}"
}

# Set the path to the Python executable
PYTHON="python3"

# Ensure required packages are installed
check_dependencies() {
  echo "Checking dependencies..."
  $PYTHON -c "import agno" 2>/dev/null || { echo "Installing agno..."; pip install agno; }
  if ! command -v npx &> /dev/null; then
    echo "Node.js and NPM are required for the screenshot tools. Please install Node.js."
    exit 1
  fi
  
  # Check for playwright and install if needed
  npx playwright --version &>/dev/null || { 
    echo "Installing Playwright..."; 
    npx playwright install --with-deps chromium; 
  }
  
  # Check for lighthouse and install if needed
  npx lighthouse --version &>/dev/null || {
    echo "Installing Lighthouse...";
    npm install -g lighthouse;
  }
  
  # Check for html-validator and install if needed
  npx html-validator --version &>/dev/null || {
    echo "Installing html-validator...";
    npm install -g html-validator-cli;
  }
  
  echo "All dependencies installed."
}

# Function to run all agents in interactive mode
run_all_interactive() {
  echo "Running all agents in interactive mode..."
  $PYTHON run_agents.py --all --interactive
}

# Function to run Netlify debug workflow
run_netlify_debug() {
  if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Error: Netlify URL and logs file are required."
    echo "Usage: $0 netlify <netlify_url> <logs_file>"
    exit 1
  fi
  
  echo "Running Netlify debug workflow for $1..."
  $PYTHON run_agents.py --netlify --netlify-url "$1" --netlify-logs "$2"
}

# Function to run specific agent team
run_team() {
  if [ -z "$1" ]; then
    echo "Error: Team name is required."
    echo "Usage: $0 team <team_name>"
    echo "Available teams: netlify, web, utility, productivity"
    exit 1
  fi
  
  echo "Running $1 team in interactive mode..."
  $PYTHON run_agents.py --"$1" --interactive
}

# Display help message
show_help() {
  echo "Multi-Agent Runner Script"
  echo "-------------------------"
  echo "Usage: $0 [command] [options]"
  echo ""
  echo "Commands:"
  echo "  all                Run all agents in interactive mode"
  echo "  netlify URL LOGS   Run Netlify debug workflow with URL and logs file"
  echo "  team TEAM_NAME     Run specific team in interactive mode"
  echo "                     (netlify, web, utility, productivity)"
  echo "  help               Show this help message"
  echo ""
  echo "Examples:"
  echo "  $0 all                              # Run all agents interactively"
  echo "  $0 netlify https://mysite.com logs.txt  # Debug Netlify site"
  echo "  $0 team web                         # Run web research team"
}

# Main script logic
main() {
  # Check if at least one argument is provided
  if [ $# -eq 0 ]; then
    show_help
    exit 0
  fi
  
  # Check dependencies
  check_dependencies
  
  # Parse command
  case "$1" in
    all)
      run_all_interactive
      ;;
    netlify)
      run_netlify_debug "$2" "$3"
      ;;
    team)
      run_team "$2"
      ;;
    help|--help|-h)
      show_help
      ;;
    *)
      echo "Unknown command: $1"
      show_help
      exit 1
      ;;
  esac
}

# Run main function with all arguments
main "$@" 