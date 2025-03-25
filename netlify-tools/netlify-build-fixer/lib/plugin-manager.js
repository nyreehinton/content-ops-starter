// lib/plugin-manager.js
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class PluginManager {
  constructor() {
    this.plugins = [];
    this.hooks = {
      'pre-analyze': [],
      'post-analyze': [],
      'pre-fix': [],
      'post-fix': [],
      'log-parser': [],
      'config-analyzer': [],
      'suggestion-provider': []
    };
  }

  /**
   * Load all plugins from the plugins directory
   * 
   * @returns {Promise<void>}
   */
  async loadPlugins() {
    const pluginsDir = path.join(__dirname, '../plugins');
    
    if (!fs.existsSync(pluginsDir)) {
      return;
    }
    
    const entries = fs.readdirSync(pluginsDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const pluginDir = path.join(pluginsDir, entry.name);
        const pluginIndexPath = path.join(pluginDir, 'index.js');
        
        if (fs.existsSync(pluginIndexPath)) {
          try {
            const plugin = require(pluginIndexPath);
            
            if (typeof plugin.register === 'function') {
              this.register(plugin);
            }
          } catch (error) {
            console.error(chalk.red(`Failed to load plugin ${entry.name}: ${error.message}`));
          }
        }
      }
    }
    
    // Load user plugins from package.json
    try {
      const packagePath = path.join(process.cwd(), 'package.json');
      
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        if (packageJson.netlifybuildFixerPlugins) {
          const userPlugins = Array.isArray(packageJson.netlifybuildFixerPlugins) 
            ? packageJson.netlifybuildFixerPlugins 
            : [packageJson.netlifybuildFixerPlugins];
          
          for (const pluginName of userPlugins) {
            try {
              const plugin = require(pluginName);
              
              if (typeof plugin.register === 'function') {
                this.register(plugin);
              }
            } catch (error) {
              console.error(chalk.red(`Failed to load user plugin ${pluginName}: ${error.message}`));
            }
          }
        }
      }
    } catch (error) {
      console.error(chalk.red(`Error loading user plugins: ${error.message}`));
    }
  }

  /**
   * Register a plugin with the plugin manager
   * 
   * @param {Object} plugin - Plugin object
   */
  register(plugin) {
    if (!plugin.name) {
      console.warn(chalk.yellow('Plugin missing name, skipping'));
      return;
    }
    
    this.plugins.push(plugin);
    
    if (plugin.hooks) {
      Object.entries(plugin.hooks).forEach(([hookName, hookFn]) => {
        if (this.hooks[hookName]) {
          this.hooks[hookName].push({
            name: plugin.name,
            fn: hookFn
          });
        }
      });
    }
    
    console.log(chalk.green(`Plugin registered: ${plugin.name} v${plugin.version || '1.0.0'}`));
  }

  /**
   * Execute hook functions in order
   * 
   * @param {string} hookName - Name of the hook to execute
   * @param {...any} args - Arguments to pass to hook functions
   * @returns {Promise<any>} - Result of hook execution
   */
  async executeHook(hookName, ...args) {
    if (!this.hooks[hookName] || this.hooks[hookName].length === 0) {
      return args[0]; // Return the first argument unchanged if no hooks
    }
    
    let result = args[0];
    
    for (const hook of this.hooks[hookName]) {
      try {
        result = await hook.fn(result, ...args.slice(1));
      } catch (error) {
        console.error(chalk.red(`Error executing hook ${hookName} from plugin ${hook.name}: ${error.message}`));
      }
    }
    
    return result;
  }

  /**
   * Get a list of registered plugins
   * 
   * @returns {Array<Object>} List of plugins
   */
  getPlugins() {
    return this.plugins.map(plugin => ({
      name: plugin.name,
      version: plugin.version || '1.0.0',
      description: plugin.description || '',
      hooks: Object.keys(plugin.hooks || {})
    }));
  }

  /**
   * Create a new plugin instance
   * 
   * @param {string} name - Plugin name
   * @param {string} targetDir - Target directory
   * @returns {Promise<void>}
   */
  async createPlugin(name, targetDir) {
    const pluginName = name.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
    const pluginDir = path.join(targetDir || './plugins', pluginName);
    
    if (fs.existsSync(pluginDir)) {
      throw new Error(`Plugin directory already exists: ${pluginDir}`);
    }
    
    // Create plugin directory
    fs.mkdirSync(pluginDir, { recursive: true });
    
    // Create package.json
    const packageJson = {
      name: `netlify-build-fixer-plugin-${pluginName}`,
      version: '1.0.0',
      description: `${name} plugin for Netlify Build Fixer`,
      main: 'index.js',
      keywords: ['netlify', 'build', 'fixer', 'plugin', pluginName],
      author: process.env.USER || '',
      license: 'MIT'
    };
    
    fs.writeFileSync(
      path.join(pluginDir, 'package.json'),
      JSON.stringify(packageJson, null, 2)
    );
    
    // Create index.js
    const pluginTemplate = `/**
 * ${name} plugin for Netlify Build Fixer
 */

module.exports = {
  name: '${name}',
  version: '1.0.0',
  description: '${name} plugin for Netlify Build Fixer',
  
  // Define hooks for the plugin
  hooks: {
    // Example hook to modify analysis results
    'post-analyze': function(issues, options) {
      // Modify or add to the issues array
      console.log('${name} plugin processing', issues.length, 'issues');
      
      // Add a custom issue
      issues.push({
        type: 'custom-issue',
        title: 'Custom issue from ${name} plugin',
        confidence: 70,
        description: 'This is a custom issue added by the ${name} plugin',
        suggestions: [
          'This is a suggestion from the ${name} plugin'
        ]
      });
      
      return issues;
    },
    
    // Example hook to add custom fixes
    'pre-fix': function(issues, options) {
      console.log('${name} plugin pre-processing fixes');
      return issues;
    }
  },
  
  // Register the plugin
  register: function() {
    console.log('${name} plugin registered');
  }
};
`;
    
    fs.writeFileSync(path.join(pluginDir, 'index.js'), pluginTemplate);
    
    // Create README.md
    const readmeTemplate = `# ${name} Plugin for Netlify Build Fixer

A plugin for Netlify Build Fixer that provides custom analysis and fixes.

## Features

- Custom issue detection
- Custom fix suggestions

## Installation

\`\`\`bash
npm install netlify-build-fixer-plugin-${pluginName}
\`\`\`

Then add to your package.json:

\`\`\`json
{
  "netlifybuildFixerPlugins": [
    "netlify-build-fixer-plugin-${pluginName}"
  ]
}
\`\`\`

## Usage

Once installed, the plugin will automatically run when using Netlify Build Fixer.

## Configuration

No configuration is currently required.

## License

MIT
`;
    
    fs.writeFileSync(path.join(pluginDir, 'README.md'), readmeTemplate);
    
    console.log(chalk.green(`Plugin created: ${pluginDir}`));
  }
}

// Export a singleton instance
module.exports = new PluginManager();
