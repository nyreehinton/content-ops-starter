# Netlify Build Agents

A comprehensive toolkit for managing Netlify build and deployment processes according to best practices.

## Overview

This collection of agents provides tools to enhance your Netlify builds by implementing the guidelines and best practices from the Netlify build documentation. The toolkit includes:

- **Debug Agent**: Basic file and configuration checks
- **Enhanced Debug Agent**: Advanced validation of build configurations
- **Resource Monitor**: Track memory and CPU usage during builds
- **Process Manager**: Handle server processes and prevent hung builds
- **Test Executor**: Orchestrate different testing phases (unit, integration, e2e)
- **Deployment Manager**: Facilitate deployment patterns like locked deploys

## Installation

```bash
# Install globally
npm install -g netlify-agents

# Or in your project
npm install --save-dev netlify-agents
```

## Usage

### Debug Agent

Check your Netlify configuration for common issues:

```bash
netlify-debug
```

### Enhanced Debug Agent

Run a more comprehensive check of your Netlify setup:

```bash
netlify-build-check
```

### Resource Monitor

Monitor resource usage during your build:

```bash
netlify-monitor
```

### Process Manager

Manage processes during builds:

```bash
# Scan for problematic processes
netlify-process scan

# Clean up problematic processes
netlify-process cleanup

# Clean up all tracked and problematic processes
netlify-process cleanup-all
```

### Test Executor

Run tests in the proper sequence:

```bash
# Run all tests
netlify-tests all

# Run only unit tests
netlify-tests unit

# Run integration tests
netlify-tests integration

# Run e2e tests
netlify-tests e2e

# Run acceptance tests against a deploy preview
netlify-tests all --deploy-url https://deploy-preview-123--your-site.netlify.app
```

### Deployment Manager

Manage deployments:

```bash
# Get site info
netlify-deploy info

# List recent deploys
netlify-deploy list-deploys

# Create a locked deploy for testing
netlify-deploy create-locked "Testing new feature X"

# Generate a deployment report
netlify-deploy report
```

## Configuration

The agents can be configured through environment variables:

- `NETLIFY_AUTH_TOKEN`: Your Netlify authentication token (for deployment management)
- `NETLIFY_SITE_ID`: Your Netlify site ID (for deployment management)

## Integration with Build Process

Add these agents to your Netlify build process by updating your `netlify.toml`:

```toml
[build]
  command = "npm run netlify-build"

[build.environment]
  NODE_ENV = "production"

[plugins]
  package = "@netlify/plugin-lighthouse"
```

Then update your `package.json`:

```json
{
  "scripts": {
    "netlify-build": "netlify-process cleanup && npm run test && npm run build && netlify-process cleanup-all",
    "postbuild": "netlify-deploy report"
  }
}
```

## Recommended Workflow

1. **Development Phase**:

   - Use `netlify-debug` to check configuration
   - Use `netlify-tests unit` during development

2. **Pre-Deployment**:

   - Run `netlify-tests all` before pushing changes
   - Monitor resource usage with `netlify-monitor`

3. **Deployment**:
   - Create locked deploys with `netlify-deploy create-locked`
   - Run acceptance tests against the deploy preview
   - Generate reports with `netlify-deploy report`

## Testing Categories

These agents support the three main testing categories recommended in the Netlify build guidelines:

1. **Unit Testing**: Fast, focused tests that run during development and build
2. **Integration Testing**: Testing how components work together
3. **Acceptance/E2E Testing**: Testing against a deployed version, preferably on a deploy preview

## Resource Constraints

The resource monitor helps ensure your build stays within Netlify's limits:

- Memory: Warns when approaching the 8GB limit
- Build time: Monitors builds approaching the 15-minute limit
- Processes: Identifies and cleans up hung processes

## License

MIT
