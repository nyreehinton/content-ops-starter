# Netlify Content Ops Starter

![Content Ops Starter](https://assets.stackbit.com/docs/content-ops-starter-thumb.png)

Netlify starter that's made for customization with a flexible content model, component library, [visual editing](https://docs.netlify.com/visual-editor/overview/) and [Git Content Source](https://docs.netlify.com/create/content-sources/git/).

**⚡ View demo:** [https://content-ops-starter.netlify.app/](https://content-ops-starter.netlify.app/)

## Deploying to Netlify

If you click "Deploy to Netlify" button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/content-ops-starter)

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

## Project Structure

- `src/` - Main application source code
- `components/` - Reusable React components
- `public/` - Static assets
- `netlify-tools/` - Netlify deployment and debugging utilities
  - `agent/` - Netlify agent scripts
  - `build-fixer/` - Build issue diagnostic tools
  - `build-logs/` - Log storage
  - `config/` - Netlify configuration
  - `scripts/` - Utility scripts
- `agents/` - Agent-related code and examples
  - `agno/` - Agno agent implementation
  - `agno-examples/` - Example agents
- `config/` - Project configuration files
- `build-config/` - Build-specific configuration
- `docs/` - Project documentation
- `test/` - Test files and fixtures

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build the site
npm run build

# Run Netlify build
npm run netlify-build
```

## Deployment

The site is deployed to Netlify. The configuration is in `netlify.toml` (symlinked from `netlify-tools/config/netlify.toml`).
