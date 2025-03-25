// lib/analyzers/index.js
const { parseLogContent } = require('../log-parser');
const knowledgeBase = require('../knowledge-base');

/**
 * Analyze Netlify build log for common issues
 * 
 * @param {string} logContent - Raw log content or parsed log object
 * @param {Object} options - Analysis options
 * @returns {Array<Object>} Detected issues with suggestions
 */
async function analyzeLog(logContent, options = {}) {
  const parsedLog = typeof logContent === 'string' 
    ? parseLogContent(logContent) 
    : logContent;
  
  // Initialize issues array
  const issues = [];
  
  // Detect lingering processes
  if (parsedLog.errors.lingeringProcesses.length > 0) {
    issues.push({
      type: 'lingering-processes',
      title: 'Lingering processes preventing build completion',
      confidence: 95,
      description: 'Your build completed successfully, but there are background processes that continue to run, preventing the deployment from finalizing.',
      logExcerpt: extractLingeringProcessesExcerpt(parsedLog.raw),
      suggestions: [
        'Ensure you\'re using production build commands instead of development commands',
        'Replace development commands (next dev, gatsby develop) with production equivalents',
        'Add process termination to your build command: "npm run build && pkill -f node || true"',
        'Make sure all child processes are properly terminated in your build scripts'
      ]
    });
  }
  
  // Detect non-zero exit codes
  if (parsedLog.errors.nonZeroExit.length > 0) {
    issues.push({
      type: 'build-error',
      title: 'Build failed with non-zero exit code',
      confidence: 90,
      description: 'Your build process exited with an error code, indicating a failure during the build process.',
      logExcerpt: extractErrorExcerpt(parsedLog.raw, 'Build script returned non-zero exit code'),
      suggestions: [
        'Check for syntax errors in your code',
        'Verify that all dependencies are properly installed',
        'Check for configuration issues in your build process',
        'Review the full build log for specific error messages'
      ]
    });
  }
  
  // Detect memory issues
  if (parsedLog.errors.memoryIssues.length > 0) {
    issues.push({
      type: 'memory-issues',
      title: 'Memory-related build failure',
      confidence: 90,
      description: 'Your build is encountering memory limitations, possibly due to large operations or memory leaks.',
      logExcerpt: extractErrorExcerpt(parsedLog.raw, 'JavaScript heap out of memory'),
      suggestions: [
        'Add NODE_OPTIONS="--max-old-space-size=3072" to your build environment',
        'Optimize memory-intensive operations like image processing',
        'Break large builds into smaller chunks',
        'Implement incremental builds where possible'
      ]
    });
  }
  
  // Detect missing modules
  if (parsedLog.errors.missingModules.length > 0) {
    // Check for case sensitivity issues
    const isCaseSensitivity = parsedLog.errors.missingModules.some(module => 
      module.includes('/') && 
      module.toLowerCase() !== module && 
      module.toUpperCase() !== module
    );
    
    if (isCaseSensitivity) {
      issues.push({
        type: 'case-sensitivity',
        title: 'Case sensitivity issues in import paths',
        confidence: 85,
        description: 'Your build is failing due to case differences in file paths. This commonly occurs when developing on macOS or Windows (case-insensitive) and deploying to Netlify (case-sensitive).',
        logExcerpt: extractErrorExcerpt(parsedLog.raw, 'Cannot find module'),
        suggestions: [
          'Ensure all import paths match the exact case of the actual files',
          'Use consistent naming conventions across your project',
          'Check and fix import statements in your code',
          'Consider using a case-sensitive filesystem for local development'
        ]
      });
    } else {
      issues.push({
        type: 'dependency-issues',
        title: 'Missing dependencies or modules',
        confidence: 85,
        description: 'Your build is failing because it cannot find required modules or dependencies.',
        logExcerpt: extractErrorExcerpt(parsedLog.raw, 'Cannot find module'),
        suggestions: [
          'Verify that all dependencies are listed in package.json',
          'Check for typos in import statements',
          'Run npm ci or yarn install locally to test dependencies',
          'Make sure you\'re using the correct dependency versions'
        ]
      });
    }
  }
  
  // Detect permission errors
  if (parsedLog.errors.permissionErrors.length > 0) {
    issues.push({
      type: 'permission-errors',
      title: 'Permission denied errors during build',
      confidence: 85,
      description: 'Your build is encountering permission issues when trying to access or modify files.',
      logExcerpt: extractErrorExcerpt(parsedLog.raw, 'permission denied'),
      suggestions: [
        'Ensure scripts have proper executable permissions (chmod +x)',
        'Avoid writing to restricted directories outside your repository',
        'Use relative paths within your project directory',
        'Add chmod commands to your build script if necessary'
      ]
    });
  }
  
  // Detect environment errors
  if (parsedLog.errors.environmentErrors.length > 0) {
    issues.push({
      type: 'environment-issues',
      title: 'Missing or invalid environment variables',
      confidence: 85,
      description: 'Your build is encountering issues with environment variables.',
      logExcerpt: extractErrorExcerpt(parsedLog.raw, 'process.env'),
      suggestions: [
        'Check that all required environment variables are defined in Netlify site settings',
        'Verify that API keys and secrets are correctly configured',
        'Use dotenv for local development to match Netlify environment',
        'Check for typos in environment variable names'
      ]
    });
  }
  
  // Detect timeout errors
  if (parsedLog.errors.timeoutErrors.length > 0) {
    issues.push({
      type: 'build-timeout',
      title: 'Build process exceeded time limit',
      confidence: 95,
      description: 'Your build exceeded the maximum allowed runtime (usually 15 minutes for Netlify builds).',
      logExcerpt: extractErrorExcerpt(parsedLog.raw, 'Build exceeded maximum allowed runtime'),
      suggestions: [
        'Optimize your build process to complete faster',
        'Implement caching strategies to speed up builds',
        'Break large builds into smaller steps',
        'Consider pre-building large assets locally'
      ]
    });
  }
  
  // Detect syntax errors
  if (parsedLog.errors.syntaxErrors.length > 0) {
    issues.push({
      type: 'syntax-error',
      title: 'Syntax errors in your code',
      confidence: 90,
      description: 'Your build is failing due to syntax errors in your code.',
      logExcerpt: extractErrorExcerpt(parsedLog.raw, 'SyntaxError'),
      suggestions: [
        'Check for missing brackets, semicolons, or quotes',
        'Validate your code with a linter before deploying',
        'Look for incorrect JavaScript syntax or invalid JSX',
        'Review recent code changes for potential syntax issues'
      ]
    });
  }
  
  // Check for performance bottlenecks
  if (parsedLog.performance.bottlenecks.length > 0) {
    issues.push({
      type: 'performance',
      title: 'Build performance bottlenecks detected',
      confidence: 75,
      description: `Your build has performance bottlenecks: ${parsedLog.performance.bottlenecks.join(', ')}`,
      logExcerpt: '',
      suggestions: [
        'Implement build caching strategies',
        'Optimize image processing operations',
        'Use incremental builds where supported',
        'Break large operations into smaller chunks'
      ]
    });
  }
  
  // Detect development commands
  if (parsedLog.buildInfo.buildCommand) {
    const devCommands = ['next dev', 'gatsby develop', '--watch', 'webpack-dev-server', 'react-scripts start'];
    
    for (const cmd of devCommands) {
      if (parsedLog.buildInfo.buildCommand.includes(cmd)) {
        issues.push({
          type: 'development-command',
          title: 'Using development command instead of build command',
          confidence: 80,
          description: `Your build command includes '${cmd}', which is a development command that may not exit properly in a build environment.`,
          logExcerpt: `Build command: ${parsedLog.buildInfo.buildCommand}`,
          suggestions: [
            `Replace '${cmd}' with the appropriate production build command`,
            'Check your netlify.toml or site settings build command',
            'Ensure your package.json has the correct build script defined'
          ]
        });
        break;
      }
    }
  }
  
  // Sort issues by confidence
  issues.sort((a, b) => b.confidence - a.confidence);
  
  return issues;
}

/**
 * Extract relevant section from logs for lingering processes
 */
function extractLingeringProcessesExcerpt(logContent) {
  const lines = logContent.split('\n');
  const markerIndex = lines.findIndex(line => 
    line.includes('Build completed successfully, but the following processes were still running')
  );
  
  if (markerIndex === -1) return '';
  
  // Get the context (lines before and after)
  const startIndex = Math.max(0, markerIndex - 2);
  const endIndex = Math.min(lines.length, markerIndex + 10);
  
  return lines.slice(startIndex, endIndex).join('\n');
}

/**
 * Extract error context from logs
 */
function extractErrorExcerpt(logContent, errorPattern) {
  const lines = logContent.split('\n');
  const markerIndex = lines.findIndex(line => line.includes(errorPattern));
  
  if (markerIndex === -1) return '';
  
  // Get the context (lines before and after)
  const startIndex = Math.max(0, markerIndex - 5);
  const endIndex = Math.min(lines.length, markerIndex + 5);
  
  return lines.slice(startIndex, endIndex).join('\n');
}

/**
 * Analyze project configuration
 * 
 * @param {string} configPath - Path to netlify.toml
 * @returns {Promise<Object>} Analysis results
 */
async function analyzeConfig(configPath) {
  try {
    const config = await knowledgeBase.analyzeConfig(configPath);
    return config;
  } catch (error) {
    throw new Error(`Failed to analyze configuration: ${error.message}`);
  }
}

/**
 * Suggest fixes based on detected issues
 * 
 * @param {Array<Object>} issues - Detected issues
 * @param {Object} projectInfo - Project information
 * @returns {Promise<Array<Object>>} Suggested fixes
 */
async function suggestFixes(issues, projectInfo = {}) {
  const suggestions = [];
  
  for (const issue of issues) {
    const fixes = await knowledgeBase.getFixesForIssue(issue.type, projectInfo);
    
    suggestions.push({
      issue,
      fixes
    });
  }
  
  return suggestions;
}

/**
 * Analyze a complete Netlify site
 * 
 * @param {string} siteId - Netlify site ID
 * @param {Object} options - Analysis options
 * @returns {Promise<Object>} Analysis results
 */
async function analyzeSite(siteId, options = {}) {
  // This would integrate with the netlify-api module to:
  // 1. Get site information
  // 2. Get recent deploys
  // 3. Analyze build logs
  // 4. Check configuration
  // 5. Provide comprehensive analysis
  
  // This is a placeholder for future implementation
  throw new Error('Site analysis is not yet implemented');
}

module.exports = {
  analyzeLog,
  analyzeConfig,
  suggestFixes,
  analyzeSite
};
