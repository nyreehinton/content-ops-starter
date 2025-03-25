#!/usr/bin/env node

/**
 * Netlify Build Agent
 *
 * This script diagnoses and fixes common Netlify build issues.
 * It can be used to validate configuration before deploying to Netlify.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
    requiredFiles: ['netlify.toml', 'next.config.js', '.eslintrc.json', 'package.json'],
    buildCommand: 'next build',
    deployCommand: 'netlify deploy --build',
    fixCommands: {
        eslint: 'npm i -D eslint eslint-config-next',
        typescript: 'npm i -D typescript @types/react @types/node',
        nextjs: 'npm i next@latest react@latest react-dom@latest'
    }
};

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

// Helper functions
function logInfo(message) {
    console.log(`${colors.blue}[INFO]${colors.reset} ${message}`);
}

function logSuccess(message) {
    console.log(`${colors.green}[SUCCESS]${colors.reset} ${message}`);
}

function logWarning(message) {
    console.log(`${colors.yellow}[WARNING]${colors.reset} ${message}`);
}

function logError(message) {
    console.log(`${colors.red}[ERROR]${colors.reset} ${message}`);
}

function fileExists(filePath) {
    try {
        return fs.existsSync(filePath);
    } catch (err) {
        return false;
    }
}

function executeCommand(command) {
    try {
        const output = execSync(command, { encoding: 'utf8' });
        return { success: true, output };
    } catch (error) {
        return {
            success: false,
            output: error.stdout || '',
            error: error.stderr || error.message
        };
    }
}

// Check for required files
function checkRequiredFiles() {
    logInfo('Checking for required files...');

    const missingFiles = [];

    for (const file of CONFIG.requiredFiles) {
        if (fileExists(file)) {
            logSuccess(`Found ${file}`);
        } else {
            logError(`Missing ${file}`);
            missingFiles.push(file);
        }
    }

    return missingFiles.length === 0;
}

// Check Netlify configuration
function checkNetlifyConfig() {
    logInfo('Checking Netlify configuration...');

    if (!fileExists('netlify.toml')) {
        logError('netlify.toml not found');
        return false;
    }

    const netlifyToml = fs.readFileSync('netlify.toml', 'utf8');

    // Check build command
    const buildCommandMatch = netlifyToml.match(/command\s*=\s*"([^"]+)"/);
    if (buildCommandMatch) {
        const buildCommand = buildCommandMatch[1];
        logInfo(`Current build command: ${buildCommand}`);

        // Check if linting and type checking are included
        if (!buildCommand.includes('lint') && !buildCommand.includes('type-check')) {
            logWarning('Build command does not include linting or type checking');
        }
    } else {
        logError('Could not find build command in netlify.toml');
    }

    return true;
}

// Check package.json scripts
function checkPackageScripts() {
    logInfo('Checking package.json scripts...');

    if (!fileExists('package.json')) {
        logError('package.json not found');
        return false;
    }

    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const scripts = packageJson.scripts || {};

    if (!scripts.build) {
        logError('No build script found in package.json');
        return false;
    }

    logInfo(`Current build script: ${scripts.build}`);

    // Check for related scripts
    if (scripts.lint) {
        logSuccess(`Found lint script: ${scripts.lint}`);
    } else {
        logWarning('No lint script found in package.json');
    }

    if (scripts['type-check']) {
        logSuccess(`Found type-check script: ${scripts['type-check']}`);
    } else {
        logWarning('No type-check script found in package.json');
    }

    return true;
}

// Run a test build
function runTestBuild() {
    logInfo('Running a test build...');

    const result = executeCommand('npm run build');

    if (result.success) {
        logSuccess('Build completed successfully!');
        console.log(result.output);
        return true;
    } else {
        logError('Build failed!');
        console.log(result.output);
        console.error(result.error);
        return false;
    }
}

// Main function
function main() {
    console.log(`${colors.cyan}=== Netlify Build Agent ===${colors.reset}`);
    console.log(`${colors.cyan}Diagnosing build configuration...${colors.reset}`);
    console.log('');

    const filesOk = checkRequiredFiles();
    if (!filesOk) {
        logError('Missing required files. Please fix before continuing.');
        process.exit(1);
    }

    const netlifyConfigOk = checkNetlifyConfig();
    const packageScriptsOk = checkPackageScripts();

    console.log('');
    logInfo('Running test build to verify configuration...');
    const buildOk = runTestBuild();

    console.log('');
    if (buildOk) {
        logSuccess('All checks passed! Your project should build successfully on Netlify.');
    } else {
        logError('Build failed. Please review the errors and fix your configuration.');
    }
}

// Run the script
main();
