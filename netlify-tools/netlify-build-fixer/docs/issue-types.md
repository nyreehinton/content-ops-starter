# Netlify Build Issue Types

This document provides a comprehensive list of issue types that Netlify Build Fixer can detect and fix.

## Memory Issues

Memory-related issues occur when your build process requires more memory than available in the build environment.

### Symptoms
- JavaScript heap out of memory errors
- Process termination with exit code 137
- Build suddenly stops without error message

### Issue Type: `memory-issues`

Memory issues are often related to:
- Large image processing operations
- Gatsby or Next.js static site generation with many pages
- Complex webpack bundling
- Large dependency installation

### Automatic Fixes
- Add NODE_OPTIONS="--max-old-space-size=3072" to build environment
- Create optimized build script with memory allocation
- Configure project-specific memory optimizations

## Permission Issues

Permission errors occur when your build process attempts to access or modify files without the proper permissions.

### Symptoms
- EACCES: permission denied errors
- Scripts failing to execute
- Unable to create or modify files during build

### Issue Type: `permission-errors`

Permission issues are often related to:
- Shell scripts without execute permissions
- Attempts to write to restricted directories
- Improper file ownership

### Automatic Fixes
- Add execute permissions to script files
- Add chmod commands to build scripts
- Fix file access patterns

## Cache Issues

Cache issues occur when the build cache is corrupted or improperly configured.

### Symptoms
- Inconsistent builds
- Unexpected build failures after successful builds
- Missing dependencies despite cache
- Slow builds despite caching

### Issue Type: `build-cache`

Cache issues are often related to:
- Incorrect cache configuration
- Cache invalidation problems
- Cache corruption

### Automatic Fixes
- Enable proper cache settings in netlify.toml
- Configure npm/yarn cache settings
- Add cache plugin to Netlify configuration
- Set up .npmrc with caching preferences

## Lingering Processes

Lingering processes issues occur when background processes started during the build don't terminate properly.

### Symptoms
- Build completes but deployment fails
- "Build completed successfully, but the following processes were still running" message
- Timeout waiting for build to finish

### Issue Type: `lingering-processes`

Lingering processes are often related to:
- Using development servers instead of build commands
- Background processes not being terminated
- Webpack watch mode or similar tools
- Development proxies

### Automatic Fixes
- Replace development commands with production equivalents
- Add process termination commands to build scripts
- Fix package.json build scripts
- Add proper build exit hooks

## Case Sensitivity Issues

Case sensitivity issues occur when file references don't match the actual case of the files, which causes problems in case-sensitive environments like Linux.

### Symptoms
- Cannot find module errors with paths
- Missing files in production that work in development
- Files not found despite existing in repository

### Issue Type: `case-sensitivity`

Case sensitivity issues are often related to:
- Developing on macOS or Windows (case-insensitive) and deploying to Linux (case-sensitive)
- Inconsistent file naming conventions
- Typos in import paths

### Automatic Fixes
- Fix import statement cases to match actual files
- Create script to detect and fix case mismatches
- Add .gitattributes configuration
- Fix filename references

## Environment Variable Issues

Environment variable issues occur when required environment variables are missing or incorrectly configured.

### Symptoms
- "undefined" values in build output
- API or service connection failures
- Configuration-related errors

### Issue Type: `environment-issues`

Environment variable issues are often related to:
- Missing API keys or secrets
- Environment variables not defined in Netlify UI
- Environment variable scope issues
- Context-specific variables

### Semi-automatic Fixes
- Identify missing environment variables
- Suggest proper environment variable configuration
- Check for environment variable naming issues

## Framework-Specific Issues

Various frameworks have their own specific issues that can cause build failures.

### Next.js Issues

#### Issue Types
- `nextjs-export-error`: Static export issues
- `nextjs-invalid-dynamic-routes`: Problems with dynamic route configuration
- `nextjs-static-generation-timeout`: Static generation taking too long
- `nextjs-image-optimization`: Issues with image optimization

### React Issues

#### Issue Types
- `react-chunking-error`: Code splitting and chunking issues
- `react-build-optimization-error`: Problems during build optimization
- `react-static-path-error`: Static path reference issues
- `react-ci-memory-error`: Memory issues specific to React builds

## Other Common Issues

### Build Timeout

Builds that exceed the maximum allowed runtime (typically 15 minutes on Netlify).

#### Issue Type: `build-timeout`

### Syntax Errors

Code syntax errors that prevent successful compilation.

#### Issue Type: `syntax-error`

### Missing Dependencies

Missing or incorrectly specified dependencies.

#### Issue Type: `dependency-issues`

### Performance Bottlenecks

Issues that cause builds to be unnecessarily slow.

#### Issue Type: `performance`

## Extending with Custom Issue Types

Plugins can define custom issue types using the naming convention:

```
[plugin-namespace]-[issue-name]
```

For example, a Gatsby plugin might define:
- `gatsby-image-processing-error`
- `gatsby-graphql-schema-error`

## Issue Structure

Each issue detected by Netlify Build Fixer follows this structure:

```javascript
{
  type: 'issue-type',          // Type identifier
  title: 'Human-readable title', // Display title
  confidence: 85,              // Confidence score (0-100)
  description: 'Detailed description of the issue',
  logExcerpt: 'Relevant portion of log showing the issue',
  suggestions: [              // Array of suggestion strings
    'First suggestion',
    'Second suggestion'
  ]
}
```

This structure is used consistently across all issue types and can be extended by plugins.
