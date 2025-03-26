# "Build completed successfully, but the following processes were still running" - How to Remove

## Understanding Lingering Processes

### What Are Lingering Processes?

- Background processes that continue running after the main build script completes
- Prevent Netlify from completing the deployment
- Result in builds appearing stuck at the "Processing" stage
- Common with development servers, watchers, or daemon processes

### How Netlify Handles Processes

- Netlify waits for all processes to exit before completing deployment
- After a timeout, Netlify may report the lingering processes
- Build logs will show: "Build completed successfully, but the following processes were still running:"
- Followed by a list of processes that are preventing deployment completion

### Common Culprits

- Node.js development servers (Express, Next.js dev server)
- Webpack dev server in watch mode
- Gatsby develop command (instead of gatsby build)
- Test watchers or continuous test runners
- Background tasks that don't terminate
- Database instances or API mocks
- Service workers or proxy servers

## Identifying Lingering Processes

### Build Log Analysis

- Look for messages about lingering processes at the end of your build log
- Note the process IDs (PIDs) and commands that are listed
- Common patterns include:
  - Node.js processes
  - npm or yarn processes with watch flags
  - Development servers
  - Processes containing "dev" or "watch" in their name

### Example Build Log Output

```
1:29:38 PM: Build completed successfully, but the following processes were still running:
1:29:38 PM: 1491 /root/.nvm/versions/node/v16.14.0/bin/node /opt/build/repo/node_modules/.bin/next dev
1:29:38 PM: 1527 /root/.nvm/versions/node/v16.14.0/bin/node -e ...
```

### Diagnosing Local Issues

- Run your build command locally
- Check for background processes using:

```bash
ps aux | grep node
ps aux | grep npm
ps aux | grep yarn
```

- Ensure processes terminate after completion

## Common Causes and Solutions

### Incorrect Build Commands

#### Development vs. Production Commands

- Problem: Using development commands instead of production build commands
- Solution: Use proper production build commands

```bash
# INCORRECT
npm start
gatsby develop
next dev

# CORRECT
npm run build
gatsby build
next build
```

#### Watch Mode

- Problem: Commands with watch flags that never exit
- Solution: Remove watch flags from build commands

```bash
# INCORRECT
webpack --watch
nodemon server.js
tsc --watch

# CORRECT
webpack
node server.js
tsc
```

### Framework-Specific Solutions

#### Next.js

- Problem: Using `next dev` instead of `next build`
- Solution: Use the correct build command

```bash
# In netlify.toml
[build]
  command = "next build"
```

#### Gatsby

- Problem: Using `gatsby develop` instead of `gatsby build`
- Solution: Use the correct build command

```bash
# In netlify.toml
[build]
  command = "gatsby build"
```

#### React Applications

- Problem: Using `react-scripts start` instead of `react-scripts build`
- Solution: Use the correct build command

```bash
# In package.json
{
  "scripts": {
    "build": "react-scripts build"
  }
}
```

#### Vue/Nuxt Applications

- Problem: Using dev server instead of generating static files
- Solution: Use static generation commands

```bash
# For Nuxt.js
nuxt generate
# For Vue CLI
vue-cli-service build
```

### Process Management Issues

#### Child Processes Not Terminating

- Problem: Scripts spawn child processes that continue running
- Solution: Ensure proper process termination

```javascript
// In Node.js scripts, use:
process.on('exit', () => {
  childProcess.kill();
});
```

#### Signal Handling

- Problem: Processes not responding to termination signals
- Solution: Implement proper signal handling

```javascript
// In Node.js scripts
process.on('SIGINT', () => {
  // Cleanup and exit
  process.exit(0);
});
process.on('SIGTERM', () => {
  // Cleanup and exit
  process.exit(0);
});
```

## Implementation Strategies

### Build Command Modifications

#### Force Process Termination

- Add commands to kill lingering processes

```bash
# In netlify.toml
[build]
  command = "npm run build && pkill -f node || true"
```

#### Process Logging

- Add diagnostic commands to identify issues

```bash
# In netlify.toml
[build]
  command = "npm run build && ps auxw && exit 0"
```

#### Using Build Hooks

- Implement cleanup in post-build hooks

```json
// In package.json
{
  "scripts": {
    "build": "react-scripts build",
    "postbuild": "node scripts/cleanup.js"
  }
}
```

### Cleanup Script Examples

#### Node.js Process Cleanup

```javascript
// scripts/cleanup.js
const { execSync } = require('child_process');

try {
  // Find all node processes
  const nodeProcesses = execSync('ps aux | grep node').toString();
  console.log('Current Node.js processes:');
  console.log(nodeProcesses);

  // Kill all node processes except the current one
  console.log('Attempting to terminate Node.js processes...');
  execSync('pkill -f node || true');
  console.log('Process cleanup completed');
} catch (error) {
  console.error('Error during cleanup:', error.message);
  // Don't fail the build if cleanup has issues
}
```

#### Shell Script Cleanup

```bash
#!/bin/bash
# cleanup.sh

echo "Cleaning up processes..."

# List all processes for debugging
ps auxw

# Kill any node processes
pkill -f "node" || true
pkill -f "npm" || true
pkill -f "yarn" || true

# List processes after cleanup
echo "Processes after cleanup:"
ps auxw

echo "Cleanup completed"
```

### Advanced Solutions

#### Build Process Isolation

- Use isolated build steps to prevent process leaks
- Split your build into distinct phases
- Use separate scripts for different build stages

#### Environment Variable Controls

- Use environment variables to control process behavior

```bash
# In netlify.toml
[build.environment]
  NODE_ENV = "production"
  CI = "true"
```

#### Custom Build Plugins

- Create Netlify Build Plugins for process management
- Implement pre-build and post-build hooks
- Ensure proper cleanup in onEnd events

## Prevention Strategies

### Development Best Practices

- Always use production build commands for deployment
- Avoid watch mode in build scripts
- Implement proper process termination in custom scripts
- Test builds locally before deploying
- Use Netlify CLI for local testing

### Common Process Management Patterns

- Always prefer synchronous builds over servers
- Use proper exit codes and signal handling
- Implement timeouts for long-running processes
- Document process behavior in your project

### CI/CD Considerations

- Use different commands for CI/CD vs. local development
- Implement environment-specific behavior

```json
// package.json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "CI=true react-scripts build",
    "build:local": "react-scripts build"
  }
}
```

## Troubleshooting Guide

### Diagnostic Steps

1. Identify lingering processes in build logs
2. Check build commands for development mode flags
3. Review scripts for background processes
4. Test build locally with process monitoring
5. Implement process termination solutions
6. Verify fix with a new deployment

### Quick Fixes

- Replace development commands with production commands
- Add process termination to build command
- Implement signal handlers in custom scripts
- Use build plugins for process management

### When to Contact Support

- Persistent issues despite following best practices
- Unexpected process behavior in the build environment
- Build-specific issues not reproducible locally
- Complex build pipelines with dependency conflicts

## Additional Resources

### Documentation and References

- Netlify Build Documentation
- Process Management Best Practices
- Framework-specific build guides

### Community Solutions

- Build Plugins for process management
- Community-contributed deployment patterns
- Framework-specific deployment templates
