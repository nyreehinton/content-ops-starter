#!/usr/bin/env node

/**
 * Netlify Deployment Agent
 *
 * This script automates the build and deployment process for Netlify sites.
 * It provides a simple way to:
 * - Build the site locally
 * - Deploy to Netlify via API
 * - Handle deployments with proper build contexts
 * - Provide comprehensive logs and feedback
 *
 * Usage:
 *   node netlify-deployment-agent.js [command]
 *
 * Commands:
 *   build          - Build the site locally
 *   deploy         - Deploy the built site to Netlify
 *   build-deploy   - Build locally then deploy to Netlify
 *   status         - Get deployment status
 *
 * Environment variables needed:
 *   NETLIFY_AUTH_TOKEN - Your Netlify personal access token
 *   NETLIFY_SITE_ID    - The API ID of your Netlify site
 */

const { execSync, exec } = require('child_process');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
    buildCommand: process.env.BUILD_COMMAND || 'npm run build',
    deployDir: process.env.DEPLOY_DIR || '.next',
    testCommand: process.env.TEST_COMMAND || 'npm test',
    netlifyAuthToken: process.env.NETLIFY_AUTH_TOKEN,
    netlifySiteId: process.env.NETLIFY_SITE_ID,
    logDir: 'netlify-tools/netlify-deploy-logs',
    apiBase: 'api.netlify.com',
    apiVersion: 'v1'
};

// Create log directory if it doesn't exist
if (!fs.existsSync(config.logDir)) {
    fs.mkdirSync(config.logDir, { recursive: true });
}

// Logging function
function log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    // Console output with color
    const colors = {
        info: '\x1b[36m%s\x1b[0m', // Cyan
        success: '\x1b[32m%s\x1b[0m', // Green
        warn: '\x1b[33m%s\x1b[0m', // Yellow
        error: '\x1b[31m%s\x1b[0m' // Red
    };

    console.log(colors[level] || colors.info, formattedMessage);

    // Write to log file
    const logFile = path.join(config.logDir, `deploy-${level}.log`);
    fs.appendFileSync(logFile, formattedMessage + '\n');
}

/**
 * Make a request to the Netlify API
 */
function makeNetlifyRequest(method, path, data = null) {
    return new Promise((resolve, reject) => {
        if (!config.netlifyAuthToken) {
            reject(new Error('Netlify API token not set. Set the NETLIFY_AUTH_TOKEN environment variable.'));
            return;
        }

        const options = {
            hostname: config.apiBase,
            path: `/${config.apiVersion}/${path}`,
            method: method,
            headers: {
                Authorization: `Bearer ${config.netlifyAuthToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Netlify-Deployment-Agent/1.0'
            }
        };

        log(`API Request: ${method} ${options.path}`, 'info');

        const req = https.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        const parsedData = JSON.parse(responseData);
                        resolve(parsedData);
                    } catch (error) {
                        log(`Error parsing API response: ${error.message}`, 'error');
                        resolve(responseData);
                    }
                } else {
                    log(`API request failed with status code ${res.statusCode}: ${responseData}`, 'error');
                    reject(new Error(`API request failed with status code ${res.statusCode}: ${responseData}`));
                }
            });
        });

        req.on('error', (error) => {
            log(`Error making API request: ${error.message}`, 'error');
            reject(error);
        });

        if (data) {
            req.write(JSON.stringify(data));
        }

        req.end();
    });
}

/**
 * Build the site locally
 */
async function buildSite() {
    log('Starting site build process...', 'info');

    try {
        // Validate that we're in the correct directory
        if (!fs.existsSync('package.json')) {
            throw new Error('package.json not found. Are you in the project root directory?');
        }

        log(`Executing build command: ${config.buildCommand}`, 'info');

        // Execute build command
        const output = execSync(config.buildCommand, {
            stdio: 'pipe',
            encoding: 'utf-8'
        });

        // Log the build output to a file
        fs.writeFileSync(path.join(config.logDir, 'build-output.log'), output);

        log('Build completed successfully', 'success');

        // Validate build output
        if (!fs.existsSync(config.deployDir)) {
            throw new Error(`Build directory "${config.deployDir}" not found. Build may have failed.`);
        }

        return true;
    } catch (error) {
        log(`Build failed: ${error.message}`, 'error');
        if (error.stdout) {
            fs.writeFileSync(path.join(config.logDir, 'build-error.log'), error.stdout);
        }
        return false;
    }
}

/**
 * Deploy the site: build, test, and commit changes
 */
async function deploySite() {
    log('Starting build, test, and commit process...', 'info');

    // Build the site
    const buildSuccess = await buildSite();
    if (!buildSuccess) {
        log('Build failed. Skipping test and commit.', 'error');
        return false;
    }

    // Run tests
    try {
        log(`Executing test command: ${config.testCommand}`, 'info');
        const testOutput = execSync(config.testCommand, {
            stdio: 'pipe',
            encoding: 'utf-8'
        });
        fs.writeFileSync(path.join(config.logDir, 'test-output.log'), testOutput);
        log('Tests completed successfully', 'success');
    } catch (error) {
        log(`Tests failed: ${error.message}`, 'error');
        if (error.stdout) {
            fs.writeFileSync(path.join(config.logDir, 'test-error.log'), error.stdout);
        }
        return false;
    }

    // Commit changes
    try {
        log('Committing changes...', 'info');
        execSync('git add .', { stdio: 'pipe', encoding: 'utf-8' });
        execSync('git commit -m "Automated commit from deployment agent"', { stdio: 'pipe', encoding: 'utf-8' });
        log('Changes committed successfully', 'success');
    } catch (error) {
        log(`Git commit failed: ${error.message}`, 'error');
        return false;
    }

    return true;
}

/**
 * Wait for a deploy to reach a certain state
 */
async function waitForDeployState(deployId, targetState = 'ready', timeout = 300000) {
    log(`Waiting for deploy ${deployId} to reach state "${targetState}"...`, 'info');

    const startTime = Date.now();
    const pollInterval = 5000; // 5 seconds

    while (Date.now() - startTime < timeout) {
        try {
            const deploy = await makeNetlifyRequest('GET', `sites/${config.netlifySiteId}/deploys/${deployId}`);

            log(`Current deploy state: ${deploy.state}`, 'info');

            if (deploy.state === targetState) {
                log(`Deploy reached target state "${targetState}"`, 'success');
                return deploy;
            }

            if (deploy.state === 'error') {
                throw new Error(`Deploy failed with state "error": ${deploy.error_message || 'Unknown error'}`);
            }

            // Wait before polling again
            await new Promise((resolve) => setTimeout(resolve, pollInterval));
        } catch (error) {
            log(`Error checking deploy status: ${error.message}`, 'error');
            throw error;
        }
    }

    throw new Error(`Timeout waiting for deploy to reach state "${targetState}"`);
}

/**
 * Get recent deploy statuses
 */
async function getDeployStatus() {
    if (!config.netlifySiteId) {
        log('Netlify Site ID not set. Set the NETLIFY_SITE_ID environment variable.', 'error');
        return false;
    }

    log(`Getting deploy status for site: ${config.netlifySiteId}`, 'info');

    try {
        const deploys = await makeNetlifyRequest('GET', `sites/${config.netlifySiteId}/deploys?per_page=5`);

        log(`Retrieved ${deploys.length} recent deploys`, 'success');

        deploys.forEach((deploy, index) => {
            const date = new Date(deploy.created_at).toLocaleString();
            log(`Deploy ${index + 1}: ${deploy.id} (${date}) - State: ${deploy.state}`, 'info');
        });

        return deploys;
    } catch (error) {
        log(`Failed to get deploy status: ${error.message}`, 'error');
        return false;
    }
}

/**
 * Main function to handle commands
 */
async function main() {
    const command = process.argv[2] || 'help';

    switch (command) {
        case 'build':
            await buildSite();
            break;

        case 'deploy':
            await deploySite();
            break;

        case 'build-deploy':
            const buildSuccess = await buildSite();
            if (buildSuccess) {
                await deploySite();
            } else {
                log('Skipping deploy due to build failure', 'warn');
            }
            break;

        case 'status':
            await getDeployStatus();
            break;

        case 'help':
        default:
            console.log(`
Netlify Deployment Agent
------------------------
Usage: node netlify-deployment-agent.js [command]

Commands:
  build          - Build the site locally
  deploy         - Build, test, and commit changes
  build-deploy   - Build locally then run the deploy process
  status         - Get deployment status

Environment variables:
  NETLIFY_AUTH_TOKEN - Your Netlify personal access token
  NETLIFY_SITE_ID    - The API ID of your Netlify site
  BUILD_COMMAND     - Custom build command (default: npm run build)
  DEPLOY_DIR        - Custom deploy directory (default: .next)
  TEST_COMMAND      - Custom test command (default: npm test)
    `);
            break;
    }
}

// Run the main function
if (require.main === module) {
    main().catch((error) => {
        log(`Unhandled error: ${error.message}`, 'error');
        process.exit(1);
    });
}

module.exports = {
    buildSite,
    deploySite,
    getDeployStatus
};
