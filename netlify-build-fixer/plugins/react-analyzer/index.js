/**
 * React Analyzer Plugin for Netlify Build Fixer
 * 
 * This plugin provides specialized analysis and fixes for React projects
 * deployed to Netlify.
 */

const fs = require('fs');
const path = require('path');

// Common React-specific issues and solutions
const REACT_ISSUES = {
  'chunking-error': {
    pattern: /Unexpected token in JSON at position/i,
    title: 'React chunking error',
    description: 'React build is failing due to code splitting or chunking issues',
    suggestions: [
      'Check your webpack configuration for proper code splitting',
      'Verify that dynamic imports are properly configured',
      'Update react-scripts to the latest version',
      'Consider disabling code splitting temporarily to isolate the issue'
    ]
  },
  'build-optimization-error': {
    pattern: /Failed to compile.*optimization/i,
    title: 'Build optimization error',
    description: 'React build is failing during the optimization phase',
    suggestions: [
      'Temporarily disable build optimization with GENERATE_SOURCEMAP=false',
      'Check for circular dependencies in your code',
      'Try running with CI=false to see more detailed error information',
      'Consider adding source-map-explorer to debug bundle size issues'
    ]
  },
  'static-path-error': {
    pattern: /TypeError: Cannot read property 'filter' of undefined.*static\/*/i,
    title: 'Static assets path error',
    description: 'Issues with static asset paths in your React application',
    suggestions: [
      'Ensure all static assets use relative paths or PUBLIC_URL prefix',
      'Configure homepage field in package.json',
      'Use process.env.PUBLIC_URL for asset references',
      'Check for improperly referenced assets in your build'
    ]
  },
  'ci-memory-error': {
    pattern: /npm ERR! Out of memory/i,
    title: 'CI memory error in npm build',
    description: 'Build is failing due to memory constraints during npm install or build',
    suggestions: [
      'Add NODE_OPTIONS="--max-old-space-size=3072" to build environment',
      'Consider using yarn instead of npm for better memory handling',
      'Split large component files into smaller ones',
      'Optimize large dependencies or find smaller alternatives'
    ]
  }
};

module.exports = {
  name: 'React Analyzer',
  version: '1.0.0',
  description: 'Specialized analysis and fixes for React projects on Netlify',
  
  hooks: {
    /**
     * Add React-specific analysis to detected issues
     */
    'post-analyze': function(issues, options) {
      console.log('React Analyzer plugin processing issues...');
      
      // Get the raw log content from options
      const logContent = options.logContent || '';
      
      // Check if this is a React project
      if (!this._isReactProject()) {
        return issues;
      }
      
      // Look for React specific issues
      for (const [issueType, issue] of Object.entries(REACT_ISSUES)) {
        if (issue.pattern.test(logContent) && !issues.some(i => i.title === issue.title)) {
          issues.push({
            type: `react-${issueType}`,
            title: issue.title,
            confidence: 85,
            description: issue.description,
            suggestions: issue.suggestions
          });
        }
      }
      
      // Add React optimization recommendations
      if (this._shouldOptimizeBuild(logContent)) {
        issues.push({
          type: 'react-optimization',
          title: 'React build optimization opportunities',
          confidence: 70,
          description: 'Your React build could be optimized for faster and more efficient deployment.',
          suggestions: [
            'Configure proper code splitting in your webpack config',
            'Implement React.lazy and Suspense for component-level code splitting',
            'Use React.memo and useCallback to reduce unnecessary re-renders',
            'Set up proper bundle analysis to identify large dependencies'
          ]
        });
      }
      
      return issues;
    },
    
    /**
     * Add React-specific fixes
     */
    'pre-fix': function(issues, options) {
      console.log('React Analyzer plugin processing fixes...');
      
      // Only process React-specific issues
      const reactIssues = issues.filter(issue => issue.type.startsWith('react-'));
      
      if (reactIssues.length === 0) {
        return issues;
      }
      
      // Apply fixes based on issue types
      for (const issue of reactIssues) {
        switch (issue.type) {
          case 'react-ci-memory-error':
            this._fixMemoryError();
            break;
            
          case 'react-static-path-error':
            this._fixStaticPathError();
            break;
            
          // Add more issue type handlers as needed
        }
      }
      
      return issues;
    },
    
    /**
     * Enhance configuration analysis with React-specific checks
     */
    'config-analyzer': function(config) {
      console.log('React Analyzer plugin analyzing configuration...');
      
      if (!this._isReactProject()) {
        return config;
      }
      
      // Add specific React configuration recommendations
      if (!config.analysis) {
        config.analysis = [];
      }
      
      // Check for proper Netlify configuration for SPAs
      const netlifyConfigPath = path.join(process.cwd(), 'netlify.toml');
      if (fs.existsSync(netlifyConfigPath)) {
        try {
          const netlifyConfig = fs.readFileSync(netlifyConfigPath, 'utf8');
          
          // Check for SPA redirect rule
          if (!netlifyConfig.includes('/*') || !netlifyConfig.includes('status=200')) {
            config.analysis.push({
              type: 'warning',
              message: 'Missing SPA redirect rule in netlify.toml',
              recommendation: 'Add proper redirect for client-side routing'
            });
          }
        } catch (error) {
          console.error('Error analyzing netlify.toml:', error.message);
        }
      } else {
        // Suggest creating a netlify.toml for SPAs
        config.analysis.push({
          type: 'info',
          message: 'No netlify.toml found for React SPA',
          recommendation: 'Create a netlify.toml file with SPA redirect rules'
        });
      }
      
      return config;
    }
  },
  
  // Helper methods
  
  /**
   * Check if the current project is a React project
   * 
   * @returns {boolean} True if React project
   */
  _isReactProject() {
    const packagePath = path.join(process.cwd(), 'package.json');
    
    if (fs.existsSync(packagePath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        return (packageJson.dependencies && packageJson.dependencies.react) || 
               (packageJson.devDependencies && packageJson.devDependencies.react);
      } catch (error) {
        return false;
      }
    }
    
    return false;
  },
  
  /**
   * Check if the build should be optimized based on log content
   * 
   * @param {string} logContent - Build log content
   * @returns {boolean} True if optimization recommended
   */
  _shouldOptimizeBuild(logContent) {
    // Look for indications of slow build
    const buildTimeMatch = logContent.match(/Built in (\d+)\.(\d+)s/);
    if (buildTimeMatch) {
      const buildTime = parseFloat(`${buildTimeMatch[1]}.${buildTimeMatch[2]}`);
      return buildTime > 60; // Recommend optimization for builds over 60 seconds
    }
    
    // Look for large bundle sizes
    const bundleSizeMatch = logContent.match(/File sizes after gzip:\s*([\s\S]*?)(\n\n|\n$)/);
    if (bundleSizeMatch) {
      const bundleSizeInfo = bundleSizeMatch[1];
      // Check for any bundle chunk over 300KB
      return /\d+\.\d+ [KM]B/.test(bundleSizeInfo) && bundleSizeInfo.match(/(\d+)\.(\d+) KB/);
    }
    
    return false;
  },
  
  /**
   * Fix memory error issues
   */
  _fixMemoryError() {
    // Implementation of memory fixes for React projects
    console.log('Fixing React memory error issues...');
    
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Add memory optimization to build script
        if (packageJson.scripts && packageJson.scripts.build && 
            !packageJson.scripts.build.includes('NODE_OPTIONS')) {
          packageJson.scripts['build:optimized'] = 'cross-env NODE_OPTIONS="--max-old-space-size=3072" ' + 
                                                  packageJson.scripts.build;
          
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          console.log('Added memory-optimized build script to package.json');
        }
      } catch (error) {
        console.error('Error updating package.json:', error.message);
      }
    }
  },
  
  /**
   * Fix static path error issues
   */
  _fixStaticPathError() {
    // Implementation would go here
    console.log('Fixing static path error issues...');
    
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Add homepage field if it doesn't exist
        if (!packageJson.homepage) {
          packageJson.homepage = '.';
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          console.log('Added homepage field to package.json');
        }
      } catch (error) {
        console.error('Error updating package.json:', error.message);
      }
    }
    
    // Create or update .env file with PUBLIC_URL
    const envPath = path.join(process.cwd(), '.env');
    try {
      let envContent = '';
      if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
      }
      
      if (!envContent.includes('PUBLIC_URL')) {
        envContent += '\nPUBLIC_URL=.\n';
        fs.writeFileSync(envPath, envContent);
        console.log('Added PUBLIC_URL to .env file');
      }
    } catch (error) {
      console.error('Error updating .env file:', error.message);
    }
  },
  
  /**
   * Plugin registration
   */
  register: function() {
    console.log('React Analyzer plugin registered');
  }
};
