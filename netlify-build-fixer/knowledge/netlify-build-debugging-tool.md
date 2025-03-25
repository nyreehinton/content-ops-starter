# Netlify Build Debugging and Fixing Tool

## Overview

This tool is designed to help identify and resolve common Netlify build and deployment issues. It provides structured guidance to diagnose problems, understand their root causes, and implement effective solutions for various build failure scenarios.

## Common Build Issues

### 1. Failed Builds (Non-Zero Exit Codes)

If your build fails with a non-zero exit code:

- Review the build logs for specific error messages
- Identify which command in your build process is failing
- Look for common error patterns:
  - Syntax errors in code
  - Missing dependencies
  - Configuration issues
  - Environment variable problems

[Learn more about debugging failed builds](./debugging-failed-builds.md)

### 2. Hung or Stuck Builds

If your build completes but appears stuck in processing:

- Check for lingering processes in the build log
- Look for development servers or watch processes
- Ensure you're using production build commands rather than development commands
- Implement process termination in your build scripts

[Learn more about hung or stuck builds](./hung-or-stuck-builds.md)

### 3. Memory-Related Failures

If your build fails due to memory limitations:

- Look for "JavaScript heap out of memory" or "Exit code: 137" errors
- Optimize memory-intensive operations
- Allocate more memory to Node.js processes with `NODE_OPTIONS`
- Break large build steps into smaller chunks
- Implement incremental builds where possible

[Learn more about memory-related errors](./memory-errors.md)

### 4. Build Cache Issues

If your builds fail unless the cache is cleared:

- Check for dependency conflicts or corrupted cache
- Implement proper lockfile maintenance
- Use clean install commands like `npm ci`
- Consider explicit cache management in build scripts

[Learn more about build cache issues](./build-cache-issues.md)

### 5. Case Sensitivity Problems

If your build works locally (macOS/Windows) but fails on Netlify (Linux):

- Check for case mismatches in import statements and file paths
- Ensure consistent casing in your codebase
- Implement case sensitivity testing locally
- Use path utilities for consistent file references

[Learn more about case sensitivity issues](./case-sensitivity-issues.md)

### 6. Permission Errors

If your build fails with permission denied errors:

- Examine file permissions in your repository
- Ensure scripts have executable permissions
- Avoid writing to restricted directories
- Use proper npm/yarn installation flags

[Learn more about permission errors](./permission-errors.md)

### 7. Build Performance Issues

If your builds are slow or timing out:

- Implement caching strategies
- Optimize dependency installation
- Use production flags to skip development tasks
- Consider incremental builds

[Learn more about optimizing build time](./optimize-build-time.md)

## Diagnostic Process

### Step 1: Gather Information

Before troubleshooting, collect the following information:

- Complete build logs from Netlify
- Your build configuration (netlify.toml or site settings)
- Package manager configuration (package.json, yarn.lock, etc.)
- Recent changes that might have affected the build
- Local environment details if relevant

### Step 2: Identify Error Patterns

Look for specific error patterns in your build logs:

- Error messages with specific file paths or line numbers
- Non-zero exit code indicators
- Memory-related errors
- Process termination messages
- Permission or file access errors
- Timeout notifications

### Step 3: Reproduce Locally

Attempt to reproduce the issue in your local environment:

- Use the same build command specified in Netlify
- Match environment variables when possible
- Use Netlify CLI for local builds with `netlify build`
- Check for environment-specific differences (OS, Node.js version)

### Step 4: Implement Targeted Solutions

Based on the identified issue, implement the relevant solution:

- Fix code or syntax errors
- Update dependencies or configuration
- Modify build commands
- Optimize resource usage
- Implement proper process management
- Update file permissions or references

### Step 5: Test and Verify

After implementing solutions:

- Test locally to ensure the fix works
- Deploy to Netlify to verify the solution
- Monitor for regressions or related issues
- Document the solution for future reference

## Common Fixes for Build Issues

### Non-Zero Exit Code Fixes

```bash
# Example: Adding more context to build errors
npm run build --verbose

# Example: Fixing dependency issues
npm ci && npm run build
```

### Hung Build Fixes

```bash
# Example: Ensure processes terminate
npm run build && pkill -f node || true

# Example: Use production build commands
# In netlify.toml
[build]
  command = "npm run build:prod"
```

### Memory Issue Fixes

```bash
# Example: Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=3072" npm run build

# Example: Optimize Gatsby builds
GATSBY_CONCURRENT_DOWNLOAD=5 gatsby build
```

### Cache Issue Fixes

```bash
# Example: Force clean install
rm -rf node_modules && npm ci && npm run build

# Example: Skip cache for problematic builds
NETLIFY_USE_YARN_CACHE=false npm run build
```

### Case Sensitivity Fixes

```bash
# Example: Check for case sensitivity issues
find . -name "*.js" | sort -f | uniq -di

# Example: Correct file references
git mv src/components/header.js src/components/Header.js
```

### Permission Error Fixes

```bash
# Example: Make scripts executable
chmod +x scripts/*.sh && npm run build

# Example: Use local npm prefix
npm config set prefix ./node_modules/.bin
```

### Build Performance Fixes

```bash
# Example: Optimize npm install
npm ci --prefer-offline --no-audit

# Example: Use parallel processing
npm run build:parallel
```

## Framework-Specific Solutions

### React Applications

Common issues:
- Missing build script in package.json
- Incorrect environment variable format (missing REACT_APP_ prefix)
- Case sensitivity in import statements

Solutions:
```bash
# Ensure proper build script
npm run build

# Set environment variables properly
REACT_APP_API_URL=https://api.example.com npm run build

# Check for case sensitivity
grep -r "import.*from" src --include="*.js" | grep -v node_modules
```

### Next.js

Common issues:
- Using development server instead of production build
- API routes not handled correctly
- Image optimization errors

Solutions:
```bash
# Proper build command
next build

# For static export
next build && next export

# Fix memory issues with image optimization
NODE_OPTIONS="--max-old-space-size=3072" next build
```

### Gatsby

Common issues:
- GraphQL query errors
- Image processing failures
- Memory limitations

Solutions:
```bash
# Proper build command
gatsby build

# Fix image processing issues
GATSBY_CONCURRENT_DOWNLOAD=5 gatsby build

# Debug build issues
gatsby clean && gatsby build --verbose
```

### Vue/Nuxt Applications

Common issues:
- Using dev server instead of production build
- SSR vs. static generation confusion
- Plugin compatibility issues

Solutions:
```bash
# Vue CLI proper build
vue-cli-service build

# Nuxt.js static generation
nuxt generate

# Debug mode
NUXT_DEBUG=1 nuxt generate
```

## Advanced Debugging Techniques

### Build Environment Analysis

Add diagnostic commands to your build:

```bash
# Add to your build command
npm run build && echo "==== Build Environment ====" && env | grep NETLIFY && node -e "console.log('Node.js ' + process.version)" && npm -v
```

### Memory Usage Monitoring

Track memory usage during builds:

```bash
# Add to your build script
node -e "setInterval(() => console.log('Memory usage: ' + Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'MB'), 5000)" & npm run build
```

### Process Monitoring

Identify lingering processes:

```bash
# Add to your build command
npm run build && echo "==== Process List ====" && ps auxw
```

### Network Connectivity Testing

Verify network access during build:

```bash
# Add to your build command
curl -I https://registry.npmjs.org && npm run build
```

## Preventative Measures

### Implement Netlify.toml

Create a comprehensive configuration:

```toml
# netlify.toml
[build]
  command = "npm ci && npm run build"
  publish = "build"
  
[build.environment]
  NODE_VERSION = "16"
  NPM_FLAGS = "--prefer-offline --no-audit"
  NODE_OPTIONS = "--max-old-space-size=3072"

[context.production]
  command = "npm ci && npm run build"
  
[context.deploy-preview]
  command = "npm ci && npm run build:preview"
```

### Automated Testing

Set up pre-deployment checks:

```yaml
# .github/workflows/netlify-test.yml
name: Test Netlify Build
on: [pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build
```

### Regular Maintenance

Establish routine maintenance tasks:

- Regularly update dependencies
- Audit and clean up unused code
- Monitor build times and resource usage
- Keep documentation updated
- Test builds in isolation

### Best Practices for Team Workflows

- Use `[skip ci]` in commit messages for documentation-only changes
- Document build requirements and environment setup
- Implement staging environments for testing
- Set up alerts for build failures
- Create runbooks for common issues

## Getting Support

If you're still experiencing issues after following this guide:

### Community Resources
- [Netlify Support Forums](https://community.netlify.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/netlify)
- [GitHub Issues](https://github.com/netlify/netlify-support/issues) for specific projects

### Contacting Netlify Support
- Provide complete build logs
- Share netlify.toml configuration
- Include package.json and lockfiles
- Describe troubleshooting steps already taken
- Link to minimal reproduction repository if possible

### Self-Service Resources
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Status Page](https://www.netlifystatus.com/)
- [Netlify Blog](https://www.netlify.com/blog/)
- [Netlify Build Plugins](https://app.netlify.com/plugins)

## Conclusion

Most Netlify build issues can be resolved by understanding the underlying causes and implementing targeted solutions. This guide provides a structured approach to diagnose and fix common problems, but each project may have unique requirements and challenges.

Remember to:
1. Gather comprehensive information about the issue
2. Identify specific error patterns
3. Implement targeted solutions based on the diagnosis
4. Test thoroughly before and after changes
5. Document solutions for future reference

By following these steps and leveraging the resources in this guide, you can quickly resolve Netlify build issues and maintain a smooth deployment workflow.
