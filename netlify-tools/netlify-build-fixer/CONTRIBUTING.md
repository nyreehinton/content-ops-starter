# Contributing to Netlify Build Fixer

Thank you for considering contributing to Netlify Build Fixer! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others.

## How Can I Contribute?

### Reporting Bugs

Bugs are tracked as GitHub issues. When you create an issue, please include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Screenshots if applicable
- Environment details (OS, Node.js version, etc.)

### Suggesting Enhancements

Enhancement suggestions are also tracked as GitHub issues. When creating a suggestion, please:

- Use a clear, descriptive title
- Provide a detailed description of the enhancement
- Explain why it would be useful
- Provide examples of how it would work if possible

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests to ensure they pass
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Process

### Setting Up Your Development Environment

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the CLI locally with `node bin/cli.js` or `npm start`

### Creating Plugins

Plugins provide a way to extend Netlify Build Fixer's capabilities:

1. Create a new directory in the `plugins/` folder
2. Implement the plugin interface (see example plugins)
3. Register your plugin with the appropriate hooks

Example plugin structure:

```javascript
module.exports = {
  name: 'My Plugin',
  version: '1.0.0',
  description: 'Description of what my plugin does',
  
  hooks: {
    // Define hooks
    'post-analyze': function(issues) {
      // Modify or add to issues
      return issues;
    }
  },
  
  register: function() {
    console.log('My plugin registered');
  }
};
```

### Testing

Run tests with:

```bash
npm test
```

When adding new features, please add corresponding tests.

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused on a single responsibility

## Documentation

When adding new features, please update the relevant documentation:

- README.md for general usage
- CONTRIBUTING.md (this file) for development instructions
- Code comments for API documentation

## Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Create a GitHub release
4. Publish to npm (by maintainers)

## Getting Help

If you need help with your contribution, feel free to:

- Open an issue with a question tag
- Reach out to the maintainers

Thank you for contributing to Netlify Build Fixer!
