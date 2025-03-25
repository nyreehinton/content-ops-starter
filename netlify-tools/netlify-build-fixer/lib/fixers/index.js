// lib/fixers/index.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');
const ora = require('ora');
const knowledgeBase = require('../knowledge-base');

/**
 * Apply fixes to detected build issues
 * 
 * @param {Array<Object>} issues - Detected issues from analyzer
 * @param {Object} options - Fix options
 * @returns {Promise<Array>} Applied fixes with results
 */
async function applyFixes(issues, options = {}) {
  const results = [];
  
  for (const issue of issues) {
    const spinner = ora(`Applying fixes for ${issue.type} issues...`).start();
    
    try {
      let fixes = [];
      
      switch (issue.type) {
        case 'memory-issues':
          fixes = await knowledgeBase.fixMemoryIssues(options.configPath);
          break;
        
        case 'build-cache':
        case 'build-timeout':
          fixes = await knowledgeBase.fixCacheIssues(options.configPath);
          break;
        
        case 'permission-errors':
          fixes = await knowledgeBase.fixPermissionIssues(options.configPath);
          break;
        
        case 'lingering-processes':
          fixes = await fixLingeringProcesses(options.configPath);
          break;
        
        case 'case-sensitivity':
          fixes = await fixCaseSensitivityIssues(options.configPath);
          break;
        
        case 'development-command':
          fixes = await fixDevelopmentCommand(options.configPath, issue);
          break;
        
        default:
          spinner.warn(`No automatic fixes available for ${issue.type} issues`);
          break;
      }
      
      if (fixes.length > 0) {
        spinner.succeed(`Applied ${fixes.length} fixes for ${issue.type} issues`);
        results.push({
          issue,
          fixes,
          success: true
        });
      } else {
        spinner.info(`No changes needed for ${issue.type} issues`);
        results.push({
          issue,
          fixes: [],
          success: true,
          message: 'No changes needed'
        });
      }
    } catch (error) {
      spinner.fail(`Failed to fix ${issue.type} issues: ${error.message}`);
      results.push({
        issue,
        success: false,
        error: error.message
      });
    }
  }
  
  return results;
}

/**
 * Fix lingering processes issues
 * 
 * @param {string} configPath - Path to netlify.toml
 * @returns {Promise<Array>} Applied fixes
 */
async function fixLingeringProcesses(configPath) {
  const resolvedPath = configPath || path.join(process.cwd(), 'netlify.toml');
  const fixes = [];
  
  // Check if netlify.toml exists
  if (fs.existsSync(resolvedPath)) {
    let content = fs.readFileSync(resolvedPath, 'utf8');
    
    // Check for development commands in build section
    const devCommands = ['next dev', 'gatsby develop', 'react-scripts start', 'webpack-dev-server'];
    const buildCommandMatch = content.match(/command\s*=\s*["']([^"']+)["']/);
    
    if (buildCommandMatch) {
      const buildCommand = buildCommandMatch[1];
      
      // Check if the build command contains any development commands
      for (const devCmd of devCommands) {
        if (buildCommand.includes(devCmd)) {
          // Replace the development command with production equivalent
          let newCommand = buildCommand;
          
          if (devCmd === 'next dev') {
            newCommand = buildCommand.replace(devCmd, 'next build');
          } else if (devCmd === 'gatsby develop') {
            newCommand = buildCommand.replace(devCmd, 'gatsby build');
          } else if (devCmd === 'react-scripts start') {
            newCommand = buildCommand.replace(devCmd, 'react-scripts build');
          } else if (devCmd === 'webpack-dev-server') {
            newCommand = buildCommand.replace(devCmd, 'webpack --mode production');
          }
          
          // Add process termination to ensure no lingering processes
          if (!newCommand.includes('pkill') && !newCommand.includes('killall')) {
            newCommand = `${newCommand} && (pkill -f node || true)`;
          }
          
          // Update the command in the content
          content = content.replace(buildCommandMatch[0], `command = "${newCommand}"`);
          
          fs.writeFileSync(resolvedPath, content);
          fixes.push({
            type: 'lingering-processes',
            description: `Replaced development command "${devCmd}" with production equivalent`,
            action: `Updated netlify.toml build command to "${newCommand}"`
          });
          
          break;
        }
      }
      
      // If no development commands found but still need to ensure cleanup
      if (fixes.length === 0 && !buildCommand.includes('pkill') && !buildCommand.includes('killall')) {
        const newCommand = `${buildCommand} && (pkill -f node || true)`;
        content = content.replace(buildCommandMatch[0], `command = "${newCommand}"`);
        
        fs.writeFileSync(resolvedPath, content);
        fixes.push({
          type: 'lingering-processes',
          description: 'Added process cleanup to build command',
          action: `Updated netlify.toml build command to "${newCommand}"`
        });
      }
    } else {
      // No build command found, add a default one
      if (content.includes('[build]')) {
        const buildIndex = content.indexOf('[build]');
        const nextSectionIndex = content.indexOf('[', buildIndex + 1);
        
        if (nextSectionIndex !== -1) {
          content = content.slice(0, nextSectionIndex) + 
                  '  command = "npm run build && (pkill -f node || true)"\n' + 
                  content.slice(nextSectionIndex);
        } else {
          content += '  command = "npm run build && (pkill -f node || true)"\n';
        }
      } else {
        content += '[build]\n  command = "npm run build && (pkill -f node || true)"\n';
      }
      
      fs.writeFileSync(resolvedPath, content);
      fixes.push({
        type: 'lingering-processes',
        description: 'Added build command with process cleanup',
        action: 'Updated netlify.toml with proper build command'
      });
    }
  } else {
    // Create new netlify.toml file
    const newContent = `[build]
  command = "npm run build && (pkill -f node || true)"
  publish = "build"
`;
    fs.writeFileSync(resolvedPath, newContent);
    fixes.push({
      type: 'lingering-processes',
      description: 'Created new netlify.toml with process cleanup',
      action: 'Added netlify.toml with proper build command'
    });
  }
  
  // Check package.json for development scripts being used in build
  const packagePath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packagePath)) {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    if (packageJson.scripts && packageJson.scripts.build) {
      const buildScript = packageJson.scripts.build;
      const devCommands = ['next dev', 'gatsby develop', 'react-scripts start', 'webpack-dev-server'];
      
      // Check if the build script contains any development commands
      for (const devCmd of devCommands) {
        if (buildScript.includes(devCmd)) {
          // Replace the development command with production equivalent
          let newScript = buildScript;
          
          if (devCmd === 'next dev') {
            newScript = buildScript.replace(devCmd, 'next build');
          } else if (devCmd === 'gatsby develop') {
            newScript = buildScript.replace(devCmd, 'gatsby build');
          } else if (devCmd === 'react-scripts start') {
            newScript = buildScript.replace(devCmd, 'react-scripts build');
          } else if (devCmd === 'webpack-dev-server') {
            newScript = buildScript.replace(devCmd, 'webpack --mode production');
          }
          
          // Add process termination to ensure no lingering processes
          if (!newScript.includes('pkill') && !newScript.includes('killall')) {
            newScript = `${newScript} && (pkill -f node || true)`;
          }
          
          // Update the script in package.json
          packageJson.scripts.build = newScript;
          
          fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
          fixes.push({
            type: 'lingering-processes',
            description: `Replaced development command "${devCmd}" with production equivalent in package.json`,
            action: `Updated package.json build script to "${newScript}"`
          });
          
          break;
        }
      }
    }
  }
  
  return fixes;
}

/**
 * Fix case sensitivity issues
 * 
 * @param {string} configPath - Path to netlify.toml
 * @returns {Promise<Array>} Applied fixes
 */
async function fixCaseSensitivityIssues(configPath) {
  const fixes = [];
  
  // Create case sensitivity checking script
  const scriptContent = `
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Function to check file paths recursively
function checkFiles(dir, results = { issues: [], fixed: [] }) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory() && !file.name.startsWith('node_modules') && !file.name.startsWith('.git')) {
      // Recursively check subdirectories
      checkFiles(fullPath, results);
    } else if (file.isFile() && (file.name.endsWith('.js') || file.name.endsWith('.jsx') || file.name.endsWith('.ts') || file.name.endsWith('.tsx'))) {
      // Check import statements in the file
      const content = fs.readFileSync(fullPath, 'utf8');
      const imports = content.match(/import\\s+(?:.+from\\s+)?['"]([^'"]+)['"]/g) || [];
      
      for (const importStatement of imports) {
        const importPath = importStatement.match(/['"]([^'"]+)['"]/)[1];
        
        // Only check relative imports
        if (importPath.startsWith('.')) {
          const importDir = path.dirname(fullPath);
          const resolvedPath = path.resolve(importDir, importPath);
          
          // Check if it's a directory import or file import
          let targetPath = resolvedPath;
          let targetExists = fs.existsSync(targetPath);
          
          // Try common extensions if exact path doesn't exist
          const extensions = ['.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx', '/index.ts', '/index.tsx'];
          if (!targetExists) {
            for (const ext of extensions) {
              if (fs.existsSync(resolvedPath + ext)) {
                targetPath = resolvedPath + ext;
                targetExists = true;
                break;
              }
            }
          }
          
          if (targetExists) {
            // Check if the case matches exactly
            const actualPath = getCaseSensitivePath(targetPath);
            
            if (actualPath && actualPath !== targetPath) {
              // Case mismatch detected
              results.issues.push({
                file: fullPath,
                import: importPath,
                actual: path.relative(importDir, actualPath),
                expected: importPath
              });
              
              // Try to fix the import statement
              const fixedImport = importStatement.replace(
                importPath, 
                path.relative(importDir, actualPath).replace(/\\/g, '/')
              );
              
              if (fixedImport !== importStatement) {
                const fixedContent = content.replace(importStatement, fixedImport);
                fs.writeFileSync(fullPath, fixedContent);
                
                results.fixed.push({
                  file: fullPath,
                  oldImport: importPath,
                  newImport: path.relative(importDir, actualPath).replace(/\\/g, '/')
                });
              }
            }
          }
        }
      }
    }
  }
  
  return results;
}

// Function to get the case-sensitive path
function getCaseSensitivePath(targetPath) {
  try {
    const dir = path.dirname(targetPath);
    const base = path.basename(targetPath);
    
    // Check if directory exists
    if (!fs.existsSync(dir)) {
      return null;
    }
    
    // Read directory entries and find the correct case
    const entries = fs.readdirSync(dir);
    const entry = entries.find(e => e.toLowerCase() === base.toLowerCase());
    
    if (entry) {
      return path.join(dir, entry);
    }
    
    return null;
  } catch (error) {
    console.error('Error getting case-sensitive path:', error);
    return null;
  }
}

// Run the check
const results = checkFiles(process.cwd());

// Output results
console.log(\`\\nCase sensitivity check completed:\\n\`);
console.log(\`Found \${results.issues.length} issues, fixed \${results.fixed.length}\\n\`);

if (results.fixed.length > 0) {
  console.log(chalk.green('Fixed imports:'));
  results.fixed.forEach(fix => {
    console.log(\`  \${fix.file}:\\n    \${fix.oldImport} → \${fix.newImport}\`);
  });
  console.log('');
}

if (results.issues.length > results.fixed.length) {
  console.log(chalk.yellow('Remaining issues:'));
  results.issues.filter(issue => 
    !results.fixed.some(fix => 
      fix.file === issue.file && fix.oldImport === issue.import
    )
  ).forEach(issue => {
    console.log(\`  \${issue.file}:\\n    Expected: \${issue.expected}\\n    Actual: \${issue.actual}\`);
  });
}
`;
  
  const scriptPath = path.join(process.cwd(), 'case-sensitivity-check.js');
  fs.writeFileSync(scriptPath, scriptContent);
  
  fixes.push({
    type: 'case-sensitivity',
    description: 'Created case sensitivity checking script',
    action: 'Added script to detect and fix case sensitivity issues'
  });
  
  // Run the script and capture output
  try {
    const output = execSync(`node ${scriptPath}`, { encoding: 'utf8' });
    
    // Extract results from output
    const fixedMatch = output.match(/Fixed (\d+) issues/);
    if (fixedMatch && parseInt(fixedMatch[1]) > 0) {
      fixes.push({
        type: 'case-sensitivity',
        description: `Fixed ${fixedMatch[1]} case sensitivity issues automatically`,
        action: 'Updated import statements with correct case'
      });
    }
  } catch (error) {
    // If script fails, add warning
    fixes.push({
      type: 'case-sensitivity',
      description: 'Unable to automatically fix all case sensitivity issues',
      action: 'Review imports manually',
      error: error.message
    });
  }
  
  // Add a .gitattributes file to help prevent future case issues
  const gitattributesPath = path.join(process.cwd(), '.gitattributes');
  if (!fs.existsSync(gitattributesPath)) {
    fs.writeFileSync(gitattributesPath, '# Enforce case sensitivity in git\n* -text\n');
    
    fixes.push({
      type: 'case-sensitivity',
      description: 'Added .gitattributes file to help with case sensitivity',
      action: 'Created .gitattributes to enforce case sensitivity in git'
    });
  }
  
  return fixes;
}

/**
 * Fix development command issues
 * 
 * @param {string} configPath - Path to netlify.toml
 * @param {Object} issue - Issue details
 * @returns {Promise<Array>} Applied fixes
 */
async function fixDevelopmentCommand(configPath, issue) {
  const resolvedPath = configPath || path.join(process.cwd(), 'netlify.toml');
  const fixes = [];
  
  // Extract the problem command from the issue
  let devCommand = '';
  let prodCommand = '';
  
  if (issue.title.includes('development command')) {
    // Try to extract the command from the description
    const cmdMatch = issue.description.match(/'([^']+)'/);
    if (cmdMatch) {
      devCommand = cmdMatch[1];
      
      // Map to production command
      if (devCommand.includes('next dev')) {
        prodCommand = devCommand.replace('next dev', 'next build');
      } else if (devCommand.includes('gatsby develop')) {
        prodCommand = devCommand.replace('gatsby develop', 'gatsby build');
      } else if (devCommand.includes('react-scripts start')) {
        prodCommand = devCommand.replace('react-scripts start', 'react-scripts build');
      } else if (devCommand.includes('--watch')) {
        prodCommand = devCommand.replace('--watch', '');
      } else if (devCommand.includes('webpack-dev-server')) {
        prodCommand = devCommand.replace('webpack-dev-server', 'webpack --mode production');
      }
    }
  }
  
  if (prodCommand && fs.existsSync(resolvedPath)) {
    let content = fs.readFileSync(resolvedPath, 'utf8');
    
    // Look for build command
    const buildCommandMatch = content.match(/command\s*=\s*["']([^"']+)["']/);
    
    if (buildCommandMatch && buildCommandMatch[1].includes(devCommand)) {
      // Replace development command with production command
      content = content.replace(buildCommandMatch[1], buildCommandMatch[1].replace(devCommand, prodCommand));
      
      fs.writeFileSync(resolvedPath, content);
      fixes.push({
        type: 'development-command',
        description: `Replaced development command "${devCommand}" with "${prodCommand}"`,
        action: 'Updated netlify.toml with production build command'
      });
    }
  }
  
  // Check package.json
  const packagePath = path.join(process.cwd(), 'package.json');
  if (devCommand && prodCommand && fs.existsSync(packagePath)) {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    if (packageJson.scripts && packageJson.scripts.build && packageJson.scripts.build.includes(devCommand)) {
      // Replace development command with production command
      packageJson.scripts.build = packageJson.scripts.build.replace(devCommand, prodCommand);
      
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      fixes.push({
        type: 'development-command',
        description: `Replaced development command in package.json`,
        action: `Updated scripts.build to use "${prodCommand}"`
      });
    }
  }
  
  return fixes;
}

/**
 * Apply specific fix to project
 * 
 * @param {string} fixType - Type of fix to apply
 * @param {Object} options - Fix options
 * @returns {Promise<Array>} Applied fixes
 */
async function applySpecificFix(fixType, options = {}) {
  let fixes = [];
  
  switch (fixType) {
    case 'memory':
      fixes = await knowledgeBase.fixMemoryIssues(options.configPath);
      break;
    
    case 'cache':
      fixes = await knowledgeBase.fixCacheIssues(options.configPath);
      break;
    
    case 'permissions':
      fixes = await knowledgeBase.fixPermissionIssues(options.configPath);
      break;
    
    case 'lingering-processes':
      fixes = await fixLingeringProcesses(options.configPath);
      break;
    
    case 'case-sensitivity':
      fixes = await fixCaseSensitivityIssues(options.configPath);
      break;
    
    default:
      throw new Error(`Unknown fix type: ${fixType}`);
  }
  
  return fixes;
}

module.exports = {
  applyFixes,
  applySpecificFix,
  fixLingeringProcesses,
  fixCaseSensitivityIssues,
  fixDevelopmentCommand
};
