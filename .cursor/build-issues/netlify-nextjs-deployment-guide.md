# Netlify Next.js Deployment Guide

## Overview

This guide documents common deployment issues with Next.js applications on Netlify and provides solutions to resolve them. The guide is specifically tailored for the Content Operations Starter project but can be applied to similar Next.js deployments.

## Table of Contents

1. [Common Deployment Issues](#common-deployment-issues)
2. [Deployment Scripts](#deployment-scripts)
3. [Configuration Files](#configuration-files)
4. [Troubleshooting](#troubleshooting)
5. [Advanced Topics](#advanced-topics)

## Common Deployment Issues

### Next.js Static Generation Issues

When deploying a Next.js application with static generation to Netlify, the following issues are common:

1. **Missing Homepage Content**: The homepage may appear blank or missing content even though other pages render correctly.
2. **Static Props Issues**: `getStaticProps` may fail to execute properly in the Netlify environment.
3. **Asset Loading Problems**: Static assets (CSS, JS, images) may fail to load correctly.
4. **Build Process Errors**: TypeScript errors or other build-time issues may prevent successful deployment.

### Root Causes

These issues typically stem from:

- **Environment Configuration**: Different environment variables between local development and Netlify.
- **Build Process Differences**: Local builds may succeed where Netlify builds fail due to stricter error handling.
- **Cache Issues**: Netlify's cache can sometimes lead to stale builds or incomplete deployments.
- **Content Loading**: The content fetching mechanism may not work correctly in the Netlify environment.

## Deployment Scripts

The project includes several scripts to help deploy and debug Netlify deployments:

### 1. fix-deployment.sh

This script performs a comprehensive fix for deployment issues:

```bash
npm run fix-deployment
```

**What it does:**

- Verifies Netlify CLI is installed and properly authenticated
- Updates the `netlify.toml` configuration to the fixed version
- Builds the project with optimized settings
- Deploys to Netlify with production settings

### 2. verify-deployment.sh

This script checks if your deployment is working correctly:

```bash
npm run verify-deployment [site-id]
```

**What it does:**

- Checks both custom domain and Netlify domain accessibility
- Verifies static assets are loading correctly
- Checks Netlify deployment status via API
- Provides a comprehensive health report of your site

### 3. test-deploy-checker.sh

This script provides a simple check of site accessibility:

```bash
npm run test-deploy-checker [site-id]
```

**What it does:**

- Checks if the site is accessible
- Downloads and checks homepage content
- Attempts to verify recent deployment status

## Configuration Files

### netlify.toml

The `netlify.toml` file is critical for correct Netlify deployments. Our optimized configuration is:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18.x"
  NEXT_TELEMETRY_DISABLED = "1"
  NEXT_DISABLE_SOURCEMAPS = "1"
  NEXT_SHARP_PATH = "/tmp/node_modules/sharp"
  NODE_OPTIONS = "--max_old_space_size=4096"
  ESLINT_NO_DEV_ERRORS = "true"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/_next/image"
  to = "/.netlify/images"
  status = 200
  query = { url = ":url", w = ":width", q = ":quality" }

[[redirects]]
  from = "/_ipx/*"
  to = "/.netlify/images"
  status = 200
  query = { url = ":url", w = ":width", q = ":quality" }
```

This configuration:

1. Uses the correct build command and publish directory
2. Sets essential environment variables
3. Includes the Next.js plugin
4. Adds caching headers for static assets
5. Sets up image optimization redirects

### Important Components

#### CustomHTMLLayout Component

The `CustomHTMLLayout` component required optimizations to handle content loading correctly:

1. Added robust error handling for null content
2. Implemented conditional loading for client-side content
3. Added debug logging for content loading issues

## Troubleshooting

### Common Error Messages

1. **"Home page content not found"**

   - Check the `index.md` file in the content directory
   - Ensure the `markdown_content` field is populated
   - Verify the file has a correct frontmatter with title, slug, and date

2. **"Cannot read properties of null (reading 'XXXX')"**

   - Usually indicates a null object being accessed
   - Check the data loading process in getStaticProps
   - Add null checks for all data being accessed

3. **"Failed to load resource: the server responded with a status of 404"**
   - Check path configurations in `next.config.js`
   - Verify asset paths in `netlify.toml`
   - Look for incorrect path references in components

### Verification Steps

To verify your deployment is working correctly:

1. Run the verification script:

   ```bash
   npm run verify-deployment [site-id]
   ```

2. Check the following manually:

   - Homepage loads with correct content
   - Static assets (CSS, JS) load properly
   - Images render correctly
   - Navigation between pages works

3. Review Netlify deployment logs for any errors

## Advanced Topics

### Environment Variables

Critical environment variables for Netlify:

- `NETLIFY_AUTH_TOKEN`: For API access (required for deployment scripts)
- `NODE_VERSION`: Set to match your local development version
- `NODE_OPTIONS`: Memory limits for build process
- `NEXT_TELEMETRY_DISABLED`: Disables telemetry for cleaner logs

### Continuous Integration

For CI/CD pipelines, consider:

1. Running `npm run verify-deployment` as a post-deployment check
2. Setting up webhook notifications for failed deployments
3. Implementing branch preview deployments for testing

### Content Management

When using content from Markdown files:

1. Always include fallbacks for missing content
2. Pre-process content during build time when possible
3. Use incremental static regeneration for dynamic content

---

## Quick Reference

| Issue              | Script to Run                 | Solution                                     |
| ------------------ | ----------------------------- | -------------------------------------------- |
| Failed deployment  | `npm run fix-deployment`      | Rebuilds and deploys with optimized settings |
| Verify deployment  | `npm run verify-deployment`   | Comprehensive health check of deployment     |
| Quick status check | `npm run test-deploy-checker` | Basic accessibility verification             |

---

This guide is maintained as part of the Content Operations Starter toolkit. For updates or contributions, please submit a pull request to the repository.
