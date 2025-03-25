# Hung or Stuck, But Seemingly Successful Build

## Understanding Hung Builds

### What Are Hung Builds?
- Builds that complete successfully but never finish deploying
- The build log shows completion but deployment appears stuck
- Often caused by processes that continue running after the main build script finishes
- Netlify waits for all processes to exit before completing the deployment

### Common Signs
- Build log shows "Build completed successfully, but the following processes were still running:"
- List of processes remaining active after build script completion
- Deployment appears to be processing indefinitely
- Site preview not generated despite successful build

## Common Causes

### Background Processes
- Development servers that aren't properly terminated
- Watch processes that continue monitoring for changes
- Database or API servers started during build but not stopped
- Content generation tools that spawn background processes

### Common Culprits
- Node.js servers (Express, Next.js, etc.)
- Webpack dev server or other bundlers in watch mode
- Gatsby develop instead of Gatsby build
- React development server
- Database instances or API mocks
- Test watchers or continuous test runners

### Process Management Issues
- Failure to properly terminate child processes
- Missing process cleanup in build scripts
- Improper signal handling in custom scripts
- Daemonized processes started during build

## Debugging Techniques

### Identifying Lingering Processes
- Review build logs for the list of processes still running
- Look for node, npm, yarn, or other development tool processes
- Note process IDs and commands that haven't exited

### Examining Build Commands
- Check build commands in netlify.toml or site settings
- Look for development commands instead of production build commands
- Watch for commands that might start servers or watchers

### Logging Process Information
- Add commands to your build script to list running processes
- Use `ps auxw` to show all processes near the end of your build
- Log process information with `ps auxw | grep node` or similar

### Testing Locally
- Try to reproduce the build process locally
- Use Netlify CLI to simulate the build environment
- Monitor for processes that don't terminate

## Solutions

### Proper Build Commands
- Use production build commands instead of development commands
- Examples:
  - `npm run build` instead of `npm start`
  - `gatsby build` instead of `gatsby develop`
  - `next build` instead of `next dev`
- Ensure build commands create static files rather than starting servers

### Process Termination
- Explicitly terminate any processes your build starts
- Add cleanup commands at the end of build scripts
- Use process managers like `pm2` to ensure proper cleanup

### Script Modifications
- Modify build scripts to terminate after completing tasks
- Add timeouts for operations that might not complete
- Implement proper signal handling (SIGINT, SIGTERM)

### Command Examples
- Find and kill Node.js processes: `pkill -f node`
- List all processes for debugging: `ps auxw`
- Add debugging to your build command: `npm run build && ps auxw ; false`
- Force build to terminate even with lingering processes: `npm run build || true`

## Implementing Fixes

### For npm/yarn Scripts
- Modify your package.json scripts section:
```json
"scripts": {
  "build": "your-build-command && pkill -f 'some-process-pattern' || true"
}
```

### For Netlify.toml
- Update build command to include process cleanup:
```toml
[build]
  command = "npm run build && pkill -f node || true"
```

### Custom Build Scripts
- Add cleanup functions to custom build scripts:
```bash
#!/bin/bash
trap 'kill $(jobs -p)' EXIT
npm run build
# Additional commands
```

### Process Monitoring
- Add process monitoring to identify issues:
```bash
npm run build
echo "Checking for lingering processes:"
ps auxw
```

## Prevention Strategies

### Development vs. Production
- Clearly separate development and production configurations
- Use environment variables to control behavior
- Test build commands locally before deploying

### Process Management
- Implement proper lifecycle management for processes
- Use tools designed for the Netlify environment
- Consider using Netlify Functions instead of server processes

### Build Script Best Practices
- Keep build scripts simple and focused
- Avoid starting unnecessary services
- Implement proper cleanup and error handling
- Test build scripts in isolation

## Getting Support

### Netlify Support Resources
- Community forums for common issues
- Support tickets for persistent problems
- Documentation for standard processes

### Providing Information
- Complete build logs showing the hung process
- Your netlify.toml or build settings
- Package.json scripts section
- Steps to reproduce the issue
