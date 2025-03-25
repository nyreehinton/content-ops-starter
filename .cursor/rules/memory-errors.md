# What to Do if Your Build Fails for Memory-Related Errors

## Understanding Memory Limitations

### Netlify Build Environment Memory Constraints
- Netlify build containers have a 3GB memory limit
- This applies to all plans and tiers
- Once a build process approaches this limit, it may be terminated
- Memory-related errors are common with large sites or complex builds

### Common Memory Error Symptoms
- "JavaScript heap out of memory" errors
- Process termination with exit code 137
- Sudden build termination without detailed error messages
- Build log cuts off unexpectedly
- Gatsby or Next.js image processing failures
- Large CSS/JS processing operations failing

## Identifying Memory Issues

### Build Log Indicators
- Look for phrases like:
  - "FATAL ERROR: Ineffective mark-compacts"
  - "JavaScript heap out of memory"
  - "killed"
  - "Exit code: 137" (Linux out-of-memory killer)
  - "The build failed because the process exited too early"
- Check if the log terminates abruptly without normal completion messages

### Memory-Intensive Operations
- Image processing (especially with Gatsby or Next.js)
- Large dependency installation (particularly node_modules)
- CSS/JS minification and bundling for large applications
- Static site generation with thousands of pages
- Large data processing operations
- Concurrent or parallel operations consuming combined memory

## Immediate Solutions

### Increasing Node.js Memory Limit
- Add this to your build command or environment variables:
```
NODE_OPTIONS="--max-old-space-size=3072"
```
- This allocates up to 3GB for Node.js processes (maximum available)
- Example in netlify.toml:
```toml
[build.environment]
  NODE_OPTIONS = "--max-old-space-size=3072"
```

### Optimizing Build Commands
- Break memory-intensive operations into smaller batches
- Add `--no-install` flags where possible to skip installations
- Use production flags: `NODE_ENV=production`
- Reduce parallelism with `--concurrency=X` flags on supporting tools
- Example for Gatsby:
```bash
GATSBY_CONCURRENT_DOWNLOAD=5 gatsby build
```

### Reducing Build Scope
- Temporarily build only a subset of pages
- Exclude large image processing during development builds
- Use conditional builds based on branch/context
```toml
[context.branch-deploy]
  command = "npm run build:minimal"
```

## Long-Term Solutions

### Code and Asset Optimization

#### JavaScript Optimization
- Implement code splitting
- Reduce bundle sizes
- Use dynamic imports for large libraries
- Implement tree shaking effectively
- Remove unused dependencies and code

#### Image Optimization
- Pre-optimize images before adding to repository
- Consider external image processing services
- Use responsive image techniques
- Implement lazy loading
- Serve appropriately sized images

#### CSS Optimization
- Split CSS files
- Remove unused CSS
- Optimize CSS processing
- Consider CSS-in-JS alternatives that are less memory-intensive

### Build Process Improvements

#### Incremental Builds
- Implement incremental build support
- Only rebuild what has changed
- Use frameworks that support incremental static regeneration
- Cache intermediary build artifacts

#### Build Splitting
- Split monolithic builds into multiple smaller builds
- Use microsite architecture
- Implement separate build processes for different sections
- Consider federated deployment approaches

#### External Processing
- Move memory-intensive operations outside of Netlify
- Pre-build assets in separate CI/CD pipelines
- Use GitHub Actions for preprocessing
- Consider headless CMS with asset processing

## Framework-Specific Solutions

### Gatsby
- Use Gatsby Cloud for builds (then deploy to Netlify)
- Implement Gatsby incremental builds
- Optimize image processing with gatsby-plugin-sharp settings
```javascript
// gatsby-config.js
{
  resolve: `gatsby-plugin-sharp`,
  options: {
    concurrency: 1,
    // Process fewer image variants
    defaults: {
      formats: ['auto', 'webp'],
      quality: 70,
    }
  }
}
```
- Consider the gatsby-plugin-netlify-cache plugin

### Next.js
- Use Next.js incremental static regeneration
- Optimize image component usage
- Consider external image processing
- Implement dynamic imports
- Use production builds with reduced debugging

### React Applications
- Implement code splitting
- Optimize bundler configurations
- Consider server-side rendering alternatives
- Use production builds with minimized debugging

### Vue/Nuxt
- Optimize SSG modes
- Implement proper code splitting
- Reduce initial payload size
- Consider alternative image handling

## Monitoring and Testing

### Local Testing
- Profile memory usage locally before deploying
- Use tools like `process-top` or `node --inspect`
- Monitor Node.js memory usage during builds
- Benchmark different build configurations

### Debugging Builds
- Add memory usage logging to build scripts
```bash
node -e 'console.log(`Memory: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`)'
```
- Run with `--verbose` flags when available
- Split build process into stages to identify problematic areas
- Add checkpoints to your build script

### Memory Profiling
- Implement memory profiling in build scripts
- Track memory usage throughout the build process
- Identify memory leaks or growth patterns
- Look for patterns of excessive memory allocation

## Advanced Techniques

### Custom Build Images
- Consider Netlify's build image customization (Enterprise)
- Create optimized build environments
- Install only necessary tools
- Configure for specific memory requirements

### CI/CD Integration
- Use external CI/CD for memory-intensive operations
- Push pre-built assets to your repository
- Implement hybrid build approaches
- Use Netlify Build Plugins for optimization

### Caching Strategies
- Implement effective caching for build artifacts
- Use Netlify's cache directories
- Persist processed assets between builds
- Use plugins like netlify-plugin-cache

## Getting Support

### Community Resources
- Check Netlify forums for similar issues
- Review framework-specific memory optimization guides
- Consult performance optimization resources

### Netlify Support
- Provide detailed build logs showing memory errors
- Share repository access when possible
- Describe memory-intensive operations
- Detail steps taken to reproduce and troubleshoot
- Include package.json, netlify.toml, and build configuration
