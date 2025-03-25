/**
 * Next.js Analyzer Plugin for Netlify Build Fixer
 * 
 * This plugin provides specialized analysis and fixes for Next.js projects
 * deployed to Netlify.
 */

const fs = require('fs');
const path = require('path');

// Common Next.js-specific issues and solutions
const NEXTJS_ISSUES = {
  'export-error': {
    pattern: /Error: Found pages without a React Component/i,
    title: 'Next.js export error',
    description: 'Next.js static export is failing due to pages without a React component',
    suggestions: [
      'Ensure all pages export a React component as default',
      'Check for pages with only getServerSideProps without a component',
      'Use dynamic imports for components with SSR requirements'
    ]
  },
  'invalid-dynamic-routes': {
    pattern: /Error: Specified dynamic routes did not match any pages/i,
    title: 'Invalid dynamic routes configuration',
    description: 'Next.js export is failing due to misconfigured dynamic routes',
    suggestions: [
      'Ensure all dynamic routes are configured correctly in exportPathMap',
      'Check that dynamic route parameters match expected formats',
      'Verify that all dynamic routes are properly exported'
    ]
  },
  'next-babel-loader': {
    pattern: /Module parse failed.*Unexpected token/i,
    title: 'Babel configuration issues',
    description: 'Next.js build is failing due to Babel configuration issues',
    suggestions: [
      'Check your .babelrc or babel configuration in next.config.js',
      'Ensure dependencies that require transpilation are not excluded',
      'Verify compatibility between installed babel plugins and presets',
      'Update Next.js to the latest version if using outdated syntax'
    ]
  },
  'static-generation-timeout': {
    pattern: /Error: Generating static pages timed out/i,
    title: 'Static generation timeout',
    description: 'Next.js static page generation is timing out during build',
    suggestions: [
      'Optimize getStaticProps functions to reduce execution time',
      'Reduce the number of pages being statically generated',
      'Implement incremental static regeneration where possible',
      'Consider moving to server-side rendering for complex pages'
    ]
  },
  'image-optimization': {
    pattern: /Processing (\\d+) images/i,
    title: 'Image optimization bottleneck',
    description: 'Next.js image optimization is slowing down your build',
    suggestions: [
      'Pre-optimize images before pushing to repository',
      'Reduce the number of images processed during build',
      'Use next/image with external image providers',
      'Configure image cache in next.config.js'
    ]
  }
};

module.exports = {
  name: 'Next.js Analyzer',
  version: '1.0.0',
  description: 'Specialized analysis and fixes for Next.js projects on Netlify',
  
  hooks: {
    /**
     * Add Next.js-specific analysis to detected issues
     */
    'post-analyze': function(issues, options) {
      console.log('Next.js Analyzer plugin processing issues...');
      
      // Get the raw log content from options
      const logContent = options.logContent || '';
      
      // Check if this is a Next.js project
      if (!this._isNextJsProject()) {
        return issues;
      }
      
      // Look for Next.js specific issues
      for (const [issueType, issue] of Object.entries(NEXTJS_ISSUES)) {
        if (issue.pattern.test(logContent) && !issues.some(i => i.title === issue.title)) {
          issues.push({
            type: `nextjs-${issueType}`,
            title: issue.title,
            confidence: 85,
            description: issue.description,
            suggestions: issue.suggestions
          });
        }
      }
      
      // Add Next.js config analysis
      this._analyzeNextConfig(issues);
      
      return issues;
    },
    
    /**
     * Add Next.js-specific fixes
     */
    'pre-fix': function(issues, options) {
      console.log('Next.js Analyzer plugin processing fixes...');
      
      // Only process Next.js-specific issues
      const nextJsIssues = issues.filter(issue => issue.type.startsWith('nextjs-'));
      
      if (nextJsIssues.length === 0) {
        return issues;
      }
      
      // Apply fixes based on issue types
      for (const issue of nextJsIssues) {
        switch (issue.type) {
          case 'nextjs-image-optimization':
            this._fixImageOptimization();
            break;
            
          case 'nextjs-static-generation-timeout':
            this._fixStaticGenerationTimeout();
            break;
            
          // Add more issue type handlers as needed
        }
      }
      
      return issues;
    },
    
    /**
     * Check configuration for best practices
     */
    'config-analyzer': function(config) {
      console.log('Next.js Analyzer plugin analyzing configuration...');
      
      if (!this._isNextJsProject()) {
        return config;
      }
      
      // Add specific Next.js configuration recommendations
      if (!config.analysis) {
        config.analysis = [];
      }
      
      // Check next.config.js
      const nextConfigPath = path.join(process.cwd(), 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        try {
          const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
          
          // Check for common configuration issues
          if (!nextConfigContent.includes('target:')) {
            config.analysis.push({
              type: 'info',
              message: 'Consider specifying target in next.config.js',
              recommendation: 'Add target: "serverless" for optimal Netlify deployment'
            });
          }
          
          // Check for proper image optimization settings
          if (nextConfigContent.includes('images:') && !nextConfigContent.includes('domains:')) {
            config.analysis.push({
              type: 'warning',
              message: 'Image optimization config may be incomplete',
              recommendation: 'Configure domains in next.config.js images settings'
            });
          }
        } catch (error) {
          console.error('Error analyzing next.config.js:', error.message);
        }
      } else {
        config.analysis.push({
          type: 'info',
          message: 'No next.config.js found',
          recommendation: 'Create a next.config.js file with Netlify-specific settings'
        });
      }
      
      return config;
    }
  },
  
  // Helper methods
  
  /**
   * Check if the current project is a Next.js project
   * 
   * @returns {boolean} True if Next.js project
   */
  _isNextJsProject() {
    const packagePath = path.join(process.cwd(), 'package.json');
    
    if (fs.existsSync(packagePath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        return packageJson.dependencies && packageJson.dependencies.next;
      } catch (error) {
        return false;
      }
    }
    
    return false;
  },
  
  /**
   * Analyze Next.js configuration
   * 
   * @param {Array} issues - Issues array to add to
   */
  _analyzeNextConfig(issues) {
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    
    if (fs.existsSync(nextConfigPath)) {
      try {
        const content = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Check for common configuration issues
        if (!content.includes('target:') || !content.includes('target: "serverless"')) {
          issues.push({
            type: 'nextjs-config',
            title: 'Suboptimal Next.js configuration for Netlify',
            confidence: 75,
            description: 'Your Next.js configuration may not be optimized for Netlify deployment.',
            suggestions: [
              'Add target: "serverless" to your next.config.js',
              'Configure trailing slash handling explicitly',
              'Set up proper image optimization settings'
            ]
          });
        }
      } catch (error) {
        console.error('Error analyzing next.config.js:', error.message);
      }
    }
  },
  
  /**
   * Fix image optimization issues
   */
  _fixImageOptimization() {
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    
    if (fs.existsSync(nextConfigPath)) {
      try {
        let content = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Check if already has image optimization config
        if (!content.includes('images:')) {
          // Simple injection of image optimization config
          // This is a simplified approach; more sophisticated parsing would be better
          
          if (content.includes('module.exports')) {
            // Find the closing brace of the config object
            const match = content.match(/module\.exports\s*=\s*{\s*([^}]*)}/s);
            
            if (match) {
              const configContent = match[1];
              const indentation = configContent.match(/^\s*/m)?.[0] || '  ';
              
              // Insert image optimization config before the closing brace
              const newConfig = `module.exports = {${match[1]}${indentation}images: {
${indentation}  minimumCacheTTL: 60,
${indentation}  formats: ['image/webp'],
${indentation}  domains: [],
${indentation}},
}`;
              
              content = content.replace(/module\.exports\s*=\s*{\s*([^}]*)}/s, newConfig);
              fs.writeFileSync(nextConfigPath, content);
              
              console.log('Added image optimization config to next.config.js');
            }
          }
        }
      } catch (error) {
        console.error('Error fixing image optimization config:', error.message);
      }
    }
  },
  
  /**
   * Fix static generation timeout issues
   */
  _fixStaticGenerationTimeout() {
    // Implementation would go here
    console.log('Fixing static generation timeout issues...');
  },
  
  /**
   * Plugin registration
   */
  register: function() {
    console.log('Next.js Analyzer plugin registered');
  }
};
