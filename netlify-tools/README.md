# Netlify Tools

This directory contains utilities, scripts, and configuration files related to Netlify deployment and troubleshooting.

## Directory Structure

- `agent/` - Netlify agent scripts for process monitoring, resource tracking, and build management
- `build-fixer/` - Diagnostic tools and utilities to fix common Netlify build issues
- `build-logs/` - Storage for Netlify build, resource, and issue logs
- `config/` - Netlify configuration files, including `netlify.toml`
- `scripts/` - Shell scripts and utilities for managing Netlify agents and builds
- Other log directories - Organized storage for test, process, and deploy logs

## Usage

Scripts can be run using npm commands from package.json:

```bash
# Run all Netlify agents
npm run run-netlify-agents

# Run specific agents
npm run run-agents

# Start a specific agent
npm run start-agent
```

## Configuration

The main Netlify configuration is in `config/netlify.toml`, which is symlinked to the project root for compatibility.

## Logs

Build and resource logs are stored in the `build-logs/` directory, with additional logs in their respective directories organized by purpose.
