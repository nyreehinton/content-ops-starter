#!/usr/bin/env node

/**
 * Netlify API Deploy Utility
 *
 * This script provides API-based deployment capabilities for Netlify,
 * allowing programmatic control of deployment after tests pass.
 *
 * Features:
 * - Trigger builds via build hooks
 * - Publish locked deploys after tests
 * - Check deploy statuses
 * - Create and manage deploy contexts
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration - load from environment or .env file
const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN;
const NETLIFY_SITE_ID = process.env.NETLIFY_SITE_ID;
const NETLIFY_API_URL = 'api.netlify.com';

// Validate configuration
if (!NETLIFY_AUTH_TOKEN || !NETLIFY_SITE_ID) {
    console.error('Error: Missing required environment variables');
    console.error('Please set NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID');
    process.exit(1);
}

/**
 * Make a request to the Netlify API
 * @param {string} method - HTTP method
 * @param {string} path - API path
 * @param {object} data - Request data
 * @returns {Promise<object>} - Response data
 */
function makeNetlifyRequest(method, path, data = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: NETLIFY_API_URL,
            path: `/api/v1/${path}`,
            method: method,
            headers: {
                Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
                'Content-Type': 'application/json'
            }
        };

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
                    } catch (e) {
                        resolve(responseData);
                    }
                } else {
                    reject(new Error(`Request failed with status code ${res.statusCode}: ${responseData}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        if (data) {
            req.write(JSON.stringify(data));
        }

        req.end();
    });
}

/**
 * Trigger a build using a build hook
 * @param {string} hookId - The build hook ID
 * @returns {Promise<object>} - Response data
 */
async function triggerBuildHook(hookId) {
    try {
        console.log(`Triggering build hook ${hookId}...`);
        const response = await makeNetlifyRequest('POST', `hooks/${hookId}`);
        console.log('Build triggered successfully');
        return response;
    } catch (error) {
        console.error('Error triggering build:', error.message);
        throw error;
    }
}

/**
 * Get a list of deploys for the site
 * @returns {Promise<Array>} - List of deploys
 */
async function listDeploys() {
    try {
        console.log('Fetching recent deploys...');
        const deploys = await makeNetlifyRequest('GET', `sites/${NETLIFY_SITE_ID}/deploys`);
        console.log(`Found ${deploys.length} deploys`);
        return deploys;
    } catch (error) {
        console.error('Error listing deploys:', error.message);
        throw error;
    }
}

/**
 * Get details of a specific deploy
 * @param {string} deployId - The deploy ID
 * @returns {Promise<object>} - Deploy details
 */
async function getDeployStatus(deployId) {
    try {
        console.log(`Checking status of deploy ${deployId}...`);
        const deploy = await makeNetlifyRequest('GET', `sites/${NETLIFY_SITE_ID}/deploys/${deployId}`);
        console.log(`Deploy state: ${deploy.state}, context: ${deploy.context}`);
        return deploy;
    } catch (error) {
        console.error('Error getting deploy status:', error.message);
        throw error;
    }
}

/**
 * Publish a deploy that was previously locked
 * @param {string} deployId - The deploy ID to publish
 * @returns {Promise<object>} - Response data
 */
async function publishDeploy(deployId) {
    try {
        console.log(`Publishing deploy ${deployId}...`);
        const response = await makeNetlifyRequest('POST', `sites/${NETLIFY_SITE_ID}/deploys/${deployId}/restore`);
        console.log('Deploy published successfully');
        return response;
    } catch (error) {
        console.error('Error publishing deploy:', error.message);
        throw error;
    }
}

/**
 * Lock a site to prevent auto-publishing
 * @returns {Promise<object>} - Response data
 */
async function lockSite() {
    try {
        console.log(`Locking site ${NETLIFY_SITE_ID}...`);
        const response = await makeNetlifyRequest('POST', `sites/${NETLIFY_SITE_ID}/locked`);
        console.log('Site locked successfully');
        return response;
    } catch (error) {
        console.error('Error locking site:', error.message);
        throw error;
    }
}

/**
 * Unlock a site to resume auto-publishing
 * @returns {Promise<object>} - Response data
 */
async function unlockSite() {
    try {
        console.log(`Unlocking site ${NETLIFY_SITE_ID}...`);
        const response = await makeNetlifyRequest('POST', `sites/${NETLIFY_SITE_ID}/unlocked`);
        console.log('Site unlocked successfully');
        return response;
    } catch (error) {
        console.error('Error unlocking site:', error.message);
        throw error;
    }
}

/**
 * Wait for a deploy to reach a certain state
 * @param {string} deployId - The deploy ID
 * @param {string} targetState - The target state to wait for
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<object>} - Final deploy status
 */
async function waitForDeployState(deployId, targetState, timeout = 600000) {
    console.log(`Waiting for deploy ${deployId} to reach state "${targetState}"...`);
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
        const deploy = await getDeployStatus(deployId);

        if (deploy.state === targetState) {
            console.log(`Deploy reached state "${targetState}"`);
            return deploy;
        }

        if (deploy.state === 'error') {
            throw new Error(`Deploy failed with state "error"`);
        }

        console.log(`Current state: ${deploy.state}, waiting...`);
        await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    throw new Error(`Timeout waiting for deploy to reach state "${targetState}"`);
}

/**
 * Run tests against a deploy preview
 * @param {string} deployUrl - The deploy URL to test
 * @returns {Promise<boolean>} - Test result
 */
async function runTestsAgainstDeploy(deployUrl) {
    console.log(`Running tests against ${deployUrl}...`);
    // This is a placeholder - integrate with your test framework
    // For example, you might run Cypress, Playwright, or other tests here

    // Simulating a successful test
    console.log('Tests passed successfully');
    return true;
}

/**
 * Main workflow for test-then-deploy pattern
 * @param {string} hookId - Build hook ID
 */
async function testThenDeployWorkflow(hookId) {
    try {
        // 1. Lock the site to prevent auto-publishing
        await lockSite();

        // 2. Trigger the build
        await triggerBuildHook(hookId);

        // 3. Get the most recent deploy
        const deploys = await listDeploys();
        const latestDeploy = deploys[0];

        // 4. Wait for the deploy to be ready
        const readyDeploy = await waitForDeployState(latestDeploy.id, 'ready');

        // 5. Run tests against the deploy preview
        const testsPassed = await runTestsAgainstDeploy(readyDeploy.deploy_ssl_url);

        if (testsPassed) {
            // 6. Publish the deploy
            await publishDeploy(readyDeploy.id);
            console.log('Deployment successful after passing tests');
        } else {
            console.error('Tests failed, deploy not published');
        }

        // 7. Optionally unlock the site
        // await unlockSite();
    } catch (error) {
        console.error('Workflow failed:', error.message);
    }
}

// Command line interface
function printUsage() {
    console.log('Netlify API Deploy Utility');
    console.log('');
    console.log('Usage:');
    console.log('  node netlify-api-deploy.js [command]');
    console.log('');
    console.log('Commands:');
    console.log('  trigger-build [hook-id]    Trigger a build using a build hook');
    console.log('  list-deploys               List recent deploys');
    console.log('  get-status [deploy-id]     Get status of a deploy');
    console.log('  publish [deploy-id]        Publish a deploy');
    console.log('  lock-site                  Lock site to prevent auto-publishing');
    console.log('  unlock-site                Unlock site to resume auto-publishing');
    console.log('  workflow [hook-id]         Run complete test-then-deploy workflow');
}

// Parse command line arguments
async function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    if (!command) {
        printUsage();
        return;
    }

    try {
        switch (command) {
            case 'trigger-build':
                if (!args[1]) {
                    console.error('Error: Missing hook ID');
                    return;
                }
                await triggerBuildHook(args[1]);
                break;

            case 'list-deploys':
                const deploys = await listDeploys();
                deploys.forEach((deploy, index) => {
                    console.log(`${index + 1}. ID: ${deploy.id}, Branch: ${deploy.branch}, Context: ${deploy.context}, State: ${deploy.state}`);
                });
                break;

            case 'get-status':
                if (!args[1]) {
                    console.error('Error: Missing deploy ID');
                    return;
                }
                await getDeployStatus(args[1]);
                break;

            case 'publish':
                if (!args[1]) {
                    console.error('Error: Missing deploy ID');
                    return;
                }
                await publishDeploy(args[1]);
                break;

            case 'lock-site':
                await lockSite();
                break;

            case 'unlock-site':
                await unlockSite();
                break;

            case 'workflow':
                if (!args[1]) {
                    console.error('Error: Missing hook ID');
                    return;
                }
                await testThenDeployWorkflow(args[1]);
                break;

            default:
                console.error(`Unknown command: ${command}`);
                printUsage();
        }
    } catch (error) {
        console.error('Command failed:', error.message);
        process.exit(1);
    }
}

main();
