#!/bin/bash

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Get script directory for relative paths
# Handle symlinks by resolving to the actual script location
if [[ -L "${BASH_SOURCE[0]}" ]]; then
  SCRIPT_DIR="$( cd "$( dirname "$(readlink "${BASH_SOURCE[0]}")" )" && pwd )"
else
  SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
fi

# Make sure we're always using the netlify-agent directory
if [[ $(basename "$SCRIPT_DIR") != "netlify-agent" ]]; then
  SCRIPT_DIR="$SCRIPT_DIR/netlify-agent"
fi

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

# Process an issue description
process_issue() {
  if [ -z "$1" ]; then
    print_info "No issue description provided."
    return
  fi
  
  print_header "Processing Issue Description"
  print_info "Issue: \"$1\""
  
  if [ -f "${SCRIPT_DIR}/issue-tracker.js" ]; then
    node "${SCRIPT_DIR}/issue-tracker.js" "$1"
    print_success "Issue processed by tracker"
  else
    print_error "Issue tracker not found. Creating issue log manually."
    echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] ISSUE: $1" >> "${SCRIPT_DIR}/netlify-issues.log"
  fi
}

# Run the Netlify debug agent
run_debug_agent() {
  print_header "Running Netlify Debug Agent"
  if [ -f "${SCRIPT_DIR}/enhanced-netlify-debug-agent.sh" ]; then
    bash "${SCRIPT_DIR}/enhanced-netlify-debug-agent.sh"
  else
    print_error "Enhanced Netlify Debug Agent not found."
  fi
}

# Run the resource monitor
run_resource_monitor() {
  print_header "Running Resource Monitor"
  if [ -f "${SCRIPT_DIR}/resource-monitor.js" ]; then
    node "${SCRIPT_DIR}/resource-monitor.js" &
    RESOURCE_MONITOR_PID=$!
    print_success "Resource monitor started (PID: $RESOURCE_MONITOR_PID)"
    print_info "Monitor will run in the background"
  else
    print_error "Resource Monitor not found."
  fi
}

# Run the test executor
run_test_executor() {
  print_header "Running Test Executor"
  if [ -f "${SCRIPT_DIR}/test-executor.js" ]; then
    print_info "Running all tests"
    node "${SCRIPT_DIR}/test-executor.js" all
  else
    print_error "Test Executor not found."
  fi
}

# Run the process manager
run_process_manager() {
  print_header "Running Process Manager"
  if [ -f "${SCRIPT_DIR}/process-manager.js" ]; then
    print_info "Scanning for problematic processes"
    node "${SCRIPT_DIR}/process-manager.js" scan
  else
    print_error "Process Manager not found."
  fi
}

# Run the deployment manager
run_deployment_manager() {
  print_header "Running Deployment Manager"
  if [ -f "${SCRIPT_DIR}/deployment-manager.js" ]; then
    print_info "Getting deployment information"
    node "${SCRIPT_DIR}/deployment-manager.js" info
  else
    print_error "Deployment Manager not found."
  fi
}

# Run API deploy utility
run_api_deploy() {
  print_header "Running API Deploy Utility"
  if [ -f "${SCRIPT_DIR}/netlify-api-deploy.js" ]; then
    print_info "Listing recent deploys"
    node "${SCRIPT_DIR}/netlify-api-deploy.js" list-deploys
  else
    print_error "API Deploy Utility not found."
  fi
}

# Run all Netlify agents
run_all_agents() {
  print_header "Running All Netlify Agents"
  
  # Process issue if provided
  if [ -n "$1" ]; then
    process_issue "$1"
  fi
  
  run_debug_agent
  run_resource_monitor
  run_test_executor
  run_process_manager
  run_deployment_manager
  run_api_deploy
  
  print_header "All Agents Completed"
  
  # Cleanup background processes
  if [ -n "$RESOURCE_MONITOR_PID" ]; then
    print_info "Stopping resource monitor (PID: $RESOURCE_MONITOR_PID)"
    kill $RESOURCE_MONITOR_PID 2>/dev/null
  fi
  
  if [ -f "${SCRIPT_DIR}/process-manager.js" ]; then
    print_info "Cleaning up any lingering processes"
    node "${SCRIPT_DIR}/process-manager.js" cleanup-all
  fi
}

# Print help information
print_help() {
  echo "Netlify Agents Runner"
  echo ""
  echo "Usage:"
  echo "  $0 [command] [\"issue description\"]"
  echo ""
  echo "Commands:"
  echo "  all          Run all Netlify agents (default)"
  echo "  debug        Run only the debug agent"
  echo "  monitor      Run only the resource monitor"
  echo "  test         Run only the test executor"
  echo "  process      Run only the process manager"
  echo "  deploy       Run only the deployment manager"
  echo "  issue        Process an issue description only"
  echo "  help         Show this help message"
  echo ""
  echo "Examples:"
  echo "  $0                                         # Runs all agents"
  echo "  $0 debug                                   # Runs only the debug agent"
  echo "  $0 issue \"Landing page is showing errors\"  # Process an issue"
  echo "  $0 all \"Need to fix broken images\"         # Run all agents and process issue"
}

# Main script execution
COMMAND=${1:-"all"}
ISSUE_DESCRIPTION=$2

case "$COMMAND" in
  "all")
    run_all_agents "$ISSUE_DESCRIPTION"
    ;;
  "debug")
    run_debug_agent
    ;;
  "monitor")
    run_resource_monitor
    ;;
  "test")
    run_test_executor
    ;;
  "process")
    run_process_manager
    ;;
  "deploy")
    run_deployment_manager
    ;;
  "issue")
    if [ -z "$ISSUE_DESCRIPTION" ]; then
      print_error "No issue description provided"
      print_help
      exit 1
    fi
    process_issue "$ISSUE_DESCRIPTION"
    ;;
  "help")
    print_help
    ;;
  *)
    print_error "Unknown command: $COMMAND"
    print_help
    exit 1
    ;;
esac

exit 0 