# Plugin Development Guide

Netlify Build Fixer supports a plugin architecture that allows developers to extend its functionality. This guide explains how to create custom plugins for the tool.

## Plugin System Overview

The plugin system uses a hooks-based architecture, where plugins can register functions to be called at specific points in the debugging and fixing process.

### Available Hooks

- `pre-analyze`: Called before log analysis begins
- `post-analyze`: Called after issues are detected but before presenting to the user
- `pre-fix`: Called before applying fixes
- `post-fix`: Called after fixes are applied
- `log-parser`: Called during log parsing to enhance detection
- `config-analyzer`: Called when analyzing configuration files
- `suggestion-provider`: Called when generating fix suggestions

## Creating a Plugin

A plugin is a Node.js module that exports an object with specific properties.

### Basic Plugin Structure

```javascript
module.exports = {
  name: 'Plugin Name',           // Required: unique name for the plugin
  version: '1.0.0',              // Required: plugin version
  description: 'Plugin description', // Recommended: what the plugin does
  
  hooks: {
    // Define hook functions here
    'post-analyze': function(issues, options) {
      // Modify or add to issues
      return issues;
    }
  },
  
  // Registration function called when plugin is loaded
  register: function() {
    console.log('Plugin registered');
  }
};
```

### Hook Function Parameters

Different hooks receive different parameters:

- `pre-analyze` and `post-analyze`: `(issues, options)`
- `pre-fix` and `post-fix`: `(issues, options)`
- `log-parser`: `(logContent, parsedLog, options)`
- `config-analyzer`: `(config, options)`
- `suggestion-provider`: `(issue, options)`

The `options` object typically contains:
- `logContent`: Original log content
- `configPath`: Path to configuration file
- `framework`: Detected framework if available
- Other context-specific data

### Example: Framework-Specific Plugin

Here's an example of a plugin that adds specialized analysis for a hypothetical framework:

```javascript
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'MyFramework Analyzer',
  version: '1.0.0',
  description: 'Specialized analysis for MyFramework projects',
  
  hooks: {
    // Add custom issues during analysis
    'post-analyze': function(issues, options) {
      // Check if this is a MyFramework project
      if (!this._isMyFrameworkProject()) {
        return issues;
      }
      
      const logContent = options.logContent || '';
      
      // Look for a specific error pattern
      if (/MyFramework error: invalid config/i.test(logContent)) {
        issues.push({
          type: 'myframework-config',
          title: 'MyFramework configuration error',
          confidence: 85,
          description: 'Your build is failing due to a MyFramework configuration issue.',
          suggestions: [
            'Verify your myframework.config.js file',
            'Make sure all required fields are set',
            'Check for syntax errors in your configuration'
          ]
        });
      }
      
      return issues;
    },
    
    // Add custom config analysis
    'config-analyzer': function(config) {
      if (!this._isMyFrameworkProject()) {
        return config;
      }
      
      // Check for MyFramework specific configuration
      const myFrameworkConfigPath = path.join(process.cwd(), 'myframework.config.js');
      if (!fs.existsSync(myFrameworkConfigPath)) {
        if (!config.analysis) {
          config.analysis = [];
        }
        
        config.analysis.push({
          type: 'warning',
          message: 'Missing MyFramework configuration file',
          recommendation: 'Create a myframework.config.js file'
        });
      }
      
      return config;
    }
  },
  
  // Helper methods
  _isMyFrameworkProject() {
    const packagePath = path.join(process.cwd(), 'package.json');
    
    if (fs.existsSync(packagePath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        return packageJson.dependencies && packageJson.dependencies.myframework;
      } catch (error) {
        return false;
      }
    }
    
    return false;
  },
  
  // Registration function
  register: function() {
    console.log('MyFramework Analyzer plugin registered');
  }
};
```

## Installing and Using Plugins

### Local Development Installation

1. Create a directory in the `plugins` folder with your plugin name
2. Create an `index.js` file with your plugin code
3. The plugin will be loaded automatically when Netlify Build Fixer runs

### Package Installation

For shareable plugins:

1. Publish your plugin as an npm package with the naming convention `netlify-build-fixer-plugin-[name]`
2. Users can install it via npm:
   ```bash
   npm install --save-dev netlify-build-fixer-plugin-[name]
   ```
3. Users add the plugin to their `package.json`:
   ```json
   {
     "netlifybuildFixerPlugins": [
       "netlify-build-fixer-plugin-[name]"
     ]
   }
   ```

## Plugin Development Best Practices

### 1. Error Handling

Always implement proper error handling in your plugins. If a plugin throws an unhandled exception, it could crash the entire application.

```javascript
hooks: {
  'post-analyze': function(issues, options) {
    try {
      // Your logic here
      return issues;
    } catch (error) {
      console.error(`Error in plugin: ${error.message}`);
      return issues; // Return unchanged
    }
  }
}
```

### 2. Performance Considerations

Plugins run as part of the analysis and fixing process, so they should be efficient.

- Avoid unnecessary file I/O operations
- Cache results when performing expensive operations
- Use async/await for I/O operations to prevent blocking

### 3. Testing Your Plugin

Create test fixtures and cases to ensure your plugin works correctly:

```javascript
// test/my-plugin.test.js
const { expect } = require('jest');
const myPlugin = require('../plugins/my-plugin');

describe('MyPlugin', () => {
  test('detects specific issues', () => {
    const issues = [];
    const options = {
      logContent: 'MyFramework error: invalid config'
    };
    
    const result = myPlugin.hooks['post-analyze'](issues, options);
    expect(result.length).toBe(1);
    expect(result[0].type).toBe('myframework-config');
  });
});
```

### 4. Documentation

Document your plugin thoroughly:

- Create a README.md in your plugin directory
- Explain what issues it detects and fixes
- Document any configuration options
- Provide examples of the types of builds it helps with

## Available Utilities

The plugin system provides access to several utility functions from the core application:

- `parseLogContent`: Parse a log string into a structured object
- `analyzeConfig`: Analyze a Netlify configuration file
- `getFixesForIssue`: Get fix suggestions for a specific issue type

These can be imported in your plugin:

```javascript
const { parseLogContent } = require('../../lib/log-parser');

// Use in your plugin
const parsedLog = parseLogContent(logContent);
```

## Publishing Plugins

When your plugin is ready for others to use:

1. Choose a clear, descriptive name prefixed with `netlify-build-fixer-plugin-`
2. Ensure your package.json has the correct metadata
3. Publish to npm:
   ```bash
   npm publish
   ```
4. Consider adding your plugin to the list of known plugins by submitting a PR to the main repository

## Conclusion

Plugins provide a powerful way to extend Netlify Build Fixer's capabilities for specific frameworks, build systems, or error patterns. By following this guide, you can create plugins that help developers quickly resolve build issues in their specific technology stack.
