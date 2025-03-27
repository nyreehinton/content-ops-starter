# Netlify Content Ops Starter

![Content Ops Starter](https://assets.stackbit.com/docs/content-ops-starter-thumb.png)

Netlify starter that's made for customization with a flexible content model, component library, [visual editing](https://docs.netlify.com/visual-editor/overview/) and [Git Content Source](https://docs.netlify.com/create/content-sources/git/).

**⚡ View demo:** [https://content-ops-starter.netlify.app/](https://content-ops-starter.netlify.app/)

## Deploying to Netlify

If you click "Deploy to Netlify" button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/content-ops-starter)

## Netlify Deployment Tools

This project includes advanced Netlify deployment tools to help you monitor, verify, and respond to deployment events:

- **Deploy Status Checker** - Verify successful deployments before running post-deploy tasks
- **Webhook Integration** - Set up notifications and automated responses to deploy events
- **AI-powered Analysis** - Get intelligent insights about failed builds
- **Automated Debugging** - Run comprehensive diagnostics with a single command

To get started with these tools:

```bash
# Set up dependencies
npm run setup-deploy-checker

# Check deployment status (replace with your site name)
npm run check-deploy -- your-site-name

# Start webhook integration server
npm run integrate-hooks

# Run automated comprehensive debugging
npm run netlify-debugger [your-site-name]
```

For more details, see the [Netlify Agents README](netifly-agents/README.md).

## Develop with Netlify Visual Editor Locally

The typical development process is to begin by working locally. Clone this repository, then run `npm install` in its root directory.

Run the Next.js development server:

```txt
cd content-ops-starter
npm run dev
```

Install the [Netlify Visual Editor CLI](https://www.npmjs.com/package/@stackbit/cli). Then open a new terminal window in the same project directory and run the Netlify visual editor dev server:

```txt
npm install -g @stackbit/cli
stackbit dev
```

This outputs your own Netlify visual editor URL. Open this, register, or sign in, and you will be directed to Netlify's visual editor for your new project.

![Next.js Dev + Visual Editor Dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)

## Building for production

To build a static site for production, run the following command

```shell
npm run build
```

## Next Steps

Here are a few suggestions on what to do next if you're new to Netlify visual editor:

- Learn [Netlify visual editor overview](https://docs.netlify.com/visual-editor/visual-editing/)
- Check [Netlify visual editor reference documentation](https://visual-editor-reference.netlify.com/)

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).

# Nyree Hinton - Portfolio Site

## Deployment Status

The site has been successfully deployed to Netlify and is accessible at [https://nyreehinton.com](https://nyreehinton.com).

## Recent Fixes

We've implemented several fixes to improve the deployment process:

1. Created a custom deploy-fix.sh script that:

   - Ensures the correct netlify.toml configuration
   - Builds the project with optimized settings
   - Deploys to Netlify with proper configurations

2. Updated the next.config.js to simplify the configuration and remove dependencies on external packages.

3. Improved the homepage content structure to work better with the CustomHTMLLayout component.

## Known Issues

- The CustomHTMLLayout component may still have issues rendering the markdown_content properly. This might require further debugging.
- CDN asset paths in the deployed site are pointing to https://cdn.yourdomain.com instead of the correct domain.

## Next Steps

1. Debug the CustomHTMLLayout component to ensure it properly renders the markdown_content.
2. Fix the CDN asset paths in the deployed site.
3. Update the site's styling and add proper CSS for the homepage content.
4. Consider moving from markdown_content to a more structured content approach for the homepage.

## Deployment Commands

To fix and deploy the site, run:

```bash
./netlify-tools/scripts/deploy-fix.sh
```

To test the deployment status, run:

```bash
npm run test-deploy-checker -- nyreehinton
```

# Netlify Deployment Fix Tools

This project includes several custom tools to help with Netlify deployment issues:

## Quick Fix Commands

- `npm run fix-deployment` - Comprehensive fix script that configures netlify.toml, builds the project with optimized settings, and deploys to Netlify
- `npm run direct-deploy` - Alternative deployment method that uses build-without-ts to skip ESLint checks
- `npm run fix-cdn` - Fixes CDN reference issues by deploying a clean static homepage
- `npm run test-deploy-checker -- nyreehinton` - Tests the deployment status and checks for common issues

## When to Use Each Tool

1. **Initial Setup**:

   ```
   npm run setup-netlify
   ```

   This configures the basic Netlify settings and prepares your site for deployment.

2. **If Your Build Fails**:

   ```
   npm run fix-deployment
   ```

   This handles common build issues by setting the correct configuration and using optimized build settings.

3. **If ESLint Causes Build Failures**:

   ```
   npm run direct-deploy
   ```

   This bypasses ESLint and TypeScript checking to get your site deployed.

4. **If CDN References Are Broken**:

   ```
   npm run fix-cdn
   ```

   This deploys a clean static homepage without CDN references.

5. **To Check Deployment Status**:
   ```
   npm run test-deploy-checker -- <your-site-name>
   ```
   Replace `<your-site-name>` with your Netlify site name (e.g., "nyreehinton").

## Debugging Netlify Builds

For comprehensive debugging:

```
npm run netlify-debugger <your-site-name>
```

This will:

1. Check your site's configuration
2. Verify the netlify.toml file
3. Test your build process
4. Examine recent deployments
5. Provide recommendations for fixes
