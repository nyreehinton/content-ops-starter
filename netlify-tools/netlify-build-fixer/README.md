# Netlify Build Fixer

## Overview

Netlify Build Fixer is an advanced AI-powered CLI tool designed to diagnose and automatically resolve Netlify build issues. It analyzes build logs, identifies common problems, and offers targeted fixes to streamline your deployment process.

## Features

- **Intelligent Log Analysis**: Parses Netlify build logs to identify patterns indicating specific problems
- **Automated Issue Resolution**: Applies targeted fixes for common issues like memory problems, permission errors, and caching issues
- **Framework-Specific Solutions**: Provides specialized fixes for Next.js, React, and other popular frameworks
- **Interactive Troubleshooting**: Walks you through solving complex build issues with step-by-step guidance
- **Configuration Validation**: Verifies your Netlify configuration against best practices
- **Plugin System**: Extensible architecture supporting framework-specific analyzers and custom fixes

## Prerequisites

- Node.js (version 14.0.0 or higher)
- npm or yarn
- A Netlify account and deployed site (for certain features)

## Installation

### Local Installation

```bash
# Clone the repository
git clone https://github.com/your-org/netlify-build-fixer.git
cd netlify-build-fixer

# Install dependencies
npm install

# Link the CLI globally
npm link
```

### Global Installation (when published)

```bash
npm install -g netlify-build-fixer
```

## Usage

### Basic Commands

```bash
# Analyze a local build log
netlify-fixer analyze --log-file ./netlify-build.log

# Analyze a specific deploy from your Netlify site
netlify-fixer analyze --site-id your-site-id --deploy-id deploy-id

# Apply fixes for specific issue types
netlify-fixer fix --type memory
netlify-fixer fix --type cache
netlify-fixer fix --type permissions

# Get guided troubleshooting for specific issues
netlify-fixer guide --issue memory-issues

# Start interactive mode (recommended for most users)
netlify-fixer
```

### Interactive Mode

Interactive mode provides a guided experience through the CLI:

1. Run `netlify-fixer` without commands to start interactive mode
2. Choose from options like analyze, fix, or guide
3. Follow the prompts to diagnose and fix your specific issue

### Authentication

Some features require Netlify API access:

```bash
# Authenticate with Netlify
netlify-fixer auth login

# Clear authentication
netlify-fixer auth logout
```

## Supported Issue Types

The tool detects and fixes numerous common Netlify build issues:

| Issue Type | Description | Fix Capability |
|------------|-------------|----------------|
| Memory Errors | JavaScript heap out of memory, allocation failures | ✅ Automatic |
| Build Cache | Build cache corruption or optimization | ✅ Automatic |
| Permission Errors | File permission issues with scripts or directories | ✅ Automatic |
| Case Sensitivity | Path case mismatches between dev and production | ✅ Automatic |
| Lingering Processes | Background processes preventing build completion | ✅ Automatic |
| Environment Variables | Missing or incorrect environment variables | ⚠️ Semi-automatic |
| Build Timeouts | Builds exceeding maximum allowed runtime | ⚠️ Semi-automatic |
| Dependency Issues | Missing or incompatible dependencies | ⚠️ Semi-automatic |
| Framework-Specific | Issues unique to Next.js, React, etc. | ✅ Automatic with plugins |

## Plugin System

Netlify Build Fixer supports a plugin architecture to extend its capabilities:

### Using Plugins

Plugins are automatically loaded from the `plugins` directory. The tool comes with several built-in plugins:

- **Next.js Analyzer**: Specialized analysis and fixes for Next.js projects
- **React Analyzer**: Optimizations and common fixes for React applications

### Creating Custom Plugins

Create your own plugins to extend functionality:

```bash
# Generate a plugin scaffold
netlify-fixer create-plugin MyPlugin

# Install a custom plugin
npm install --save-dev netlify-build-fixer-plugin-custom
```

Add your plugin to `package.json`:

```json
{
  "netlifybuildFixerPlugins": [
    "netlify-build-fixer-plugin-custom"
  ]
}
```

## Advanced Configuration

Create a `.netlifyfixerrc` file in your project root to customize behavior:

```json
{
  "autoFix": true,
  "plugins": ["custom-plugin"],
  "ignoredIssues": ["build-cache"],
  "logLevel": "verbose"
}
```

## Contributing

We welcome contributions to improve Netlify Build Fixer:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## Troubleshooting

If you encounter issues with the tool itself:

- Run with verbose logging: `netlify-fixer --verbose`
- Check your Node.js version (must be 14.0.0+)
- Verify your Netlify authentication status
- Look for error messages in the console output

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Netlify for their excellent platform and documentation
- The Node.js and JavaScript communities for tools and libraries
- All contributors who have helped improve this tool
