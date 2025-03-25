# Debugging Failed Builds or Non-Zero Exit Codes

## Understanding Non-Zero Exit Codes

### What Are Non-Zero Exit Codes?
- In Unix-like systems, programs return 0 for success and non-zero values for failure
- Netlify's build system follows this convention
- Any command in your build that exits with a non-zero code will cause the build to fail

### Common Exit Codes
- Exit code 1: General errors
- Exit code 2: Misuse of shell builtins
- Exit code 126: Command cannot execute
- Exit code 127: Command not found
- Exit code 128: Invalid argument to exit
- Exit code 130: Terminated by Ctrl-C
- Exit code 137: Process killed (often due to memory issues)
- Exit code 143: Process terminated (often via SIGTERM)

## Common Causes of Failed Builds

### Syntax Errors
- Syntax errors in your code or configuration files
- Look for error messages indicating parsing failures
- Common in JavaScript, CSS, and HTML files

### Missing Dependencies
- Required packages not installed or specified in package.json
- Node modules referenced but not included in dependencies
- External tools or commands not available in the build environment

### Configuration Issues
- Incorrect settings in configuration files like package.json, netlify.toml
- Build commands that work locally but not in Netlify's environment
- Incorrect paths or case sensitivity issues

### Environment Variables
- Missing required environment variables
- Incorrect environment variable values
- Secrets or tokens not properly configured

### Memory Issues
- Processes requiring more memory than available (3GB limit)
- Large asset processing causing out-of-memory errors
- Memory leaks in build scripts or plugins

## Debugging Process

### Examining Build Logs
- Carefully read the entire build log
- Look for the first occurrence of error messages
- Pay attention to command output before the failure
- Check for warnings that might indicate potential issues

### Identifying Problematic Commands
- Identify which command in your build process is failing
- Look for non-zero exit code messages in the logs
- Note any error messages associated with the failing command

### Reproducing Locally
- Try to reproduce the failure in a similar environment
- Use the same build command specified in netlify.toml
- Consider using Netlify CLI to replicate the build environment

### Isolating Components
- Comment out or temporarily skip parts of your build process
- Add debug output at different stages
- Test individual commands separately

## Common Solutions

### Syntax and Code Errors
- Validate syntax locally before deploying
- Use linters and formatters to catch issues early
- Test code in a similar environment to Netlify's build system

### Dependency Issues
- Ensure all dependencies are properly declared in package.json
- Use lockfiles (package-lock.json, yarn.lock) for consistency
- Specify exact versions for critical dependencies
- Check for platform-specific dependencies that might not work on Linux

### Build Configuration
- Verify commands in netlify.toml or site settings
- Ensure build directory paths are correct
- Check for case sensitivity issues in imports and file paths
- Validate environment variable usage

### Memory Management
- Optimize memory-intensive processes
- Break large builds into smaller steps
- Consider pre-building large assets
- Monitor memory usage during local builds

### Timeouts
- Keep build processes under the 15-minute limit
- Optimize lengthy build steps
- Consider using build caching for faster builds
- Use Netlify Large Media for handling large assets

## Advanced Debugging Techniques

### Adding Diagnostic Commands
- Add commands like `ls -la` to check file presence and permissions
- Use `env` to verify environment variables
- Add `echo` statements to track progress
- Implement `set -x` in bash scripts for detailed command tracing

### Memory Profiling
- Add commands to check memory usage during build
- Monitor process sizes with tools like `ps`
- Split memory-intensive tasks into smaller chunks

### Verbose Output
- Enable verbose mode for build tools when available
- Use flags like `--verbose` or `--debug` with CLI tools
- Set environment variables that enable detailed logging

### Testing Edge Cases
- Test with minimal configuration
- Try alternative build commands
- Test with different Node.js versions

## Getting Help

### Netlify Support Channels
- Community forums for common issues
- Support tickets for persistent problems
- Documentation for standard processes

### Required Information for Support
- Build logs (complete)
- Repository access or reproducible example
- netlify.toml and package.json contents
- Steps to reproduce the issue
- Local environment details if relevant
