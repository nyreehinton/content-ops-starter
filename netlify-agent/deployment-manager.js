#!/usr/bin/env node

/**
 * Netlify Deployment Manager
 *
 * This script manages Netlify deployment processes following best practices:
 * - Creates locked deploys for testing before production
 * - Manages deploy contexts for consistent environments
 * - Implements API-based deploy controls for CI/CD pipelines
 * - Manages rollbacks for failed deployments
 *
 * It helps enforce the deployment patterns recommended in Netlify build guidelines.
 */

const https = require('https');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    netlify: {
        apiBase: 'api.netlify.com',
        apiVersion: 'v1'
    },

    // Output settings
    output: {
        logToFile: true,
        logDir: 'netlify-deploy-logs',
        consoleOutput: true
    }
};

// State
const STATE = {
    authToken: process.env.NETLIFY_AUTH_TOKEN || null,
    siteId: process.env.NETLIFY_SITE_ID || null,
    deploySha: null,
    deployId: null,
    siteName: null
};

// Helper Functions
function log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    // Console output
    if (CONFIG.output.consoleOutput) {
        switch (level) {
            case 'error':
                console.error(formattedMessage);
                break;
            case 'warn':
                console.warn(formattedMessage);
                break;
            default:
                console.log(formattedMessage);
        }
    }

    // File output
    if (CONFIG.output.logToFile) {
        try {
            if (!fs.existsSync(CONFIG.output.logDir)) {
                fs.mkdirSync(CONFIG.output.logDir, { recursive: true });
            }

            const logFile = path.join(CONFIG.output.logDir, `deploy-${level}.log`);
            fs.appendFileSync(logFile, formattedMessage + '\n');
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
    }
}

/**
 * Make a request to the Netlify API
 */
function makeNetlifyRequest(method, path, data = null) {
    return new Promise((resolve, reject) => {
        if (!STATE.authToken) {
            reject(new Error('Netlify API token not set. Set the NETLIFY_AUTH_TOKEN environment variable.'));
            return;
        }

        const options = {
            hostname: CONFIG.netlify.apiBase,
            path: `/${CONFIG.netlify.apiVersion}/${path}`,
            method: method,
            headers: {
                Authorization: `Bearer ${STATE.authToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Netlify-Deployment-Manager/1.0'
            }
        };

        log(`API Request: ${method} ${options.path}`, 'debug');

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
 * Configure the Netlify API client
 */
function configure(options = {}) {
    if (options.authToken) {
        STATE.authToken = options.authToken;
    }

    if (options.siteId) {
        STATE.siteId = options.siteId;
    }

    // Validate configuration
    if (!STATE.authToken) {
        log('No Netlify authentication token provided', 'warn');
    }

    if (!STATE.siteId) {
        log('No Netlify site ID provided', 'warn');
    }

    return {
        authToken: STATE.authToken,
        siteId: STATE.siteId
    };
}

/**
 * Get site information
 */
async function getSiteInfo(siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        const siteData = await makeNetlifyRequest('GET', `sites/${id}`);
        log(`Retrieved site info for: ${siteData.name}`);
        STATE.siteName = siteData.name;
        return siteData;
    } catch (error) {
        log(`Failed to get site info: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * List recent deploys for the site
 */
async function listDeploys(siteId = null, limit = 10) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        const deploys = await makeNetlifyRequest('GET', `sites/${id}/deploys?per_page=${limit}`);
        log(`Retrieved ${deploys.length} recent deploys`);
        return deploys;
    } catch (error) {
        log(`Failed to list deploys: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Get a specific deploy by ID
 */
async function getDeploy(deployId, siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        const deploy = await makeNetlifyRequest('GET', `sites/${id}/deploys/${deployId}`);
        log(`Retrieved deploy: ${deploy.id} (${deploy.state})`);
        return deploy;
    } catch (error) {
        log(`Failed to get deploy: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Create a locked deploy (ready for testing)
 */
async function createLockedDeploy(title, siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        // Get the latest deploy to lock
        const deploys = await listDeploys(id, 1);

        if (deploys.length === 0) {
            throw new Error('No recent deploys found to lock');
        }

        const latestDeploy = deploys[0];

        // Create a locked deploy
        const lockedDeploy = await makeNetlifyRequest('POST', `sites/${id}/locked-deploys`, {
            deploy_id: latestDeploy.id,
            title: title || `Locked deploy - ${new Date().toISOString()}`
        });

        log(`Created locked deploy: ${lockedDeploy.id} (${lockedDeploy.title})`);
        return lockedDeploy;
    } catch (error) {
        log(`Failed to create locked deploy: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Delete a locked deploy
 */
async function deleteLockedDeploy(lockedDeployId, siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        await makeNetlifyRequest('DELETE', `sites/${id}/locked-deploys/${lockedDeployId}`);
        log(`Deleted locked deploy: ${lockedDeployId}`);
        return true;
    } catch (error) {
        log(`Failed to delete locked deploy: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * List all locked deploys
 */
async function listLockedDeploys(siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        const lockedDeploys = await makeNetlifyRequest('GET', `sites/${id}/locked-deploys`);
        log(`Retrieved ${lockedDeploys.length} locked deploys`);
        return lockedDeploys;
    } catch (error) {
        log(`Failed to list locked deploys: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Get build hooks for a site
 */
async function getBuildHooks(siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        const hooks = await makeNetlifyRequest('GET', `sites/${id}/build_hooks`);
        log(`Retrieved ${hooks.length} build hooks`);
        return hooks;
    } catch (error) {
        log(`Failed to get build hooks: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Create a new build hook
 */
async function createBuildHook(title, branch, siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        const hook = await makeNetlifyRequest('POST', `sites/${id}/build_hooks`, {
            title: title,
            branch: branch
        });

        log(`Created build hook: ${hook.id} (${hook.title} - ${hook.branch})`);
        return hook;
    } catch (error) {
        log(`Failed to create build hook: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Trigger a build hook
 */
async function triggerBuildHook(hookId, payload = {}) {
    try {
        const data = querystring.stringify(payload);

        const options = {
            hostname: 'api.netlify.com',
            path: `/build_hooks/${hookId}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let responseData = '';

                res.on('data', (chunk) => {
                    responseData += chunk;
                });

                res.on('end', () => {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        log(`Successfully triggered build hook: ${hookId}`);
                        resolve(true);
                    } else {
                        log(`Failed to trigger build hook: ${responseData}`, 'error');
                        reject(new Error(`Failed to trigger build hook: ${responseData}`));
                    }
                });
            });

            req.on('error', (error) => {
                log(`Error triggering build hook: ${error.message}`, 'error');
                reject(error);
            });

            req.write(data);
            req.end();
        });
    } catch (error) {
        log(`Failed to trigger build hook: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Get deploy contexts configuration
 */
async function getDeployContexts(siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        const site = await getSiteInfo(id);
        return site.build_settings.deploy_contexts || {};
    } catch (error) {
        log(`Failed to get deploy contexts: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Restore a previous deploy (rollback)
 */
async function restoreDeploy(deployId, siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        await makeNetlifyRequest('POST', `sites/${id}/deploys/${deployId}/restore`);
        log(`Restored deploy: ${deployId}`);
        return true;
    } catch (error) {
        log(`Failed to restore deploy: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Wait for a deploy to reach a specific state
 */
async function waitForDeployState(deployId, targetState = 'ready', maxWaitTime = 300000, pollInterval = 5000) {
    const startTime = Date.now();

    log(`Waiting for deploy ${deployId} to reach state: ${targetState}`);

    while (Date.now() - startTime < maxWaitTime) {
        try {
            const deploy = await getDeploy(deployId);

            if (deploy.state === targetState) {
                log(`Deploy ${deployId} reached state: ${targetState}`);
                return deploy;
            }

            if (deploy.state === 'error') {
                throw new Error(`Deploy ${deployId} failed with error: ${deploy.error_message || 'Unknown error'}`);
            }

            log(`Deploy ${deployId} is in state: ${deploy.state}, waiting...`);

            // Wait before polling again
            await new Promise((resolve) => setTimeout(resolve, pollInterval));
        } catch (error) {
            log(`Error checking deploy state: ${error.message}`, 'error');
            throw error;
        }
    }

    throw new Error(`Timeout waiting for deploy ${deployId} to reach state: ${targetState}`);
}

/**
 * Create a deploy key for automated deploys
 */
async function createDeployKey(siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        const deployKey = await makeNetlifyRequest('POST', `sites/${id}/deploy_keys`);
        log(`Created deploy key: ${deployKey.id}`);
        return deployKey;
    } catch (error) {
        log(`Failed to create deploy key: ${error.message}`, 'error');
        throw error;
    }
}

/**
 * Get deploy URL from deploy ID
 */
function getDeployUrl(deployId, siteName = null) {
    const name = siteName || STATE.siteName;

    if (!name) {
        throw new Error('Site name not available. Call getSiteInfo() first or provide the site name.');
    }

    return `https://${deployId}--${name}.netlify.app`;
}

/**
 * Generate deployment report
 */
async function generateDeploymentReport(siteId = null) {
    const id = siteId || STATE.siteId;

    if (!id) {
        throw new Error('Site ID not provided. Set the NETLIFY_SITE_ID environment variable or pass it as a parameter.');
    }

    try {
        // Get site information
        const site = await getSiteInfo(id);

        // Get recent deploys
        const recentDeploys = await listDeploys(id, 5);

        // Get locked deploys
        const lockedDeploys = await listLockedDeploys(id);

        // Generate report
        const report = {
            site: {
                name: site.name,
                url: site.url,
                admin_url: site.admin_url,
                build_settings: site.build_settings
            },
            recent_deploys: recentDeploys.map((deploy) => ({
                id: deploy.id,
                created_at: deploy.created_at,
                state: deploy.state,
                deploy_url: getDeployUrl(deploy.id, site.name),
                branch: deploy.branch,
                commit_ref: deploy.commit_ref
            })),
            locked_deploys: lockedDeploys.map((lockedDeploy) => ({
                id: lockedDeploy.id,
                title: lockedDeploy.title,
                deploy_id: lockedDeploy.deploy_id,
                deploy_url: getDeployUrl(lockedDeploy.deploy_id, site.name),
                created_at: lockedDeploy.created_at
            })),
            timestamp: new Date().toISOString()
        };

        // Save report to file
        const reportFilePath = path.join(CONFIG.output.logDir, 'deployment-report.json');
        fs.writeFileSync(reportFilePath, JSON.stringify(report, null, 2));

        log(`Generated deployment report: ${reportFilePath}`);
        return report;
    } catch (error) {
        log(`Failed to generate deployment report: ${error.message}`, 'error');
        throw error;
    }
}

// If run directly, execute CLI commands
if (require.main === module) {
    // Parse command-line arguments
    const args = process.argv.slice(2);
    const command = args[0];

    // Ensure output directory exists
    if (!fs.existsSync(CONFIG.output.logDir)) {
        fs.mkdirSync(CONFIG.output.logDir, { recursive: true });
    }

    // Check for auth token and site ID
    configure();

    if (!STATE.authToken || !STATE.siteId) {
        log('Missing required environment variables: NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID', 'error');
        process.exit(1);
    }

    // Execute the requested command
    switch (command) {
        case 'info':
            getSiteInfo()
                .then((siteInfo) => {
                    console.log(JSON.stringify(siteInfo, null, 2));
                })
                .catch((error) => {
                    log(`Command failed: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        case 'list-deploys':
            listDeploys()
                .then((deploys) => {
                    console.log(JSON.stringify(deploys, null, 2));
                })
                .catch((error) => {
                    log(`Command failed: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        case 'list-locked':
            listLockedDeploys()
                .then((lockedDeploys) => {
                    console.log(JSON.stringify(lockedDeploys, null, 2));
                })
                .catch((error) => {
                    log(`Command failed: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        case 'create-locked':
            createLockedDeploy(args[1] || `Locked deploy - ${new Date().toISOString()}`)
                .then((lockedDeploy) => {
                    console.log(JSON.stringify(lockedDeploy, null, 2));
                })
                .catch((error) => {
                    log(`Command failed: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        case 'delete-locked':
            if (!args[1]) {
                log('Missing locked deploy ID', 'error');
                process.exit(1);
            }

            deleteLockedDeploy(args[1])
                .then(() => {
                    log(`Successfully deleted locked deploy: ${args[1]}`);
                })
                .catch((error) => {
                    log(`Command failed: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        case 'report':
            generateDeploymentReport()
                .then((report) => {
                    log('Deployment report generated successfully');
                })
                .catch((error) => {
                    log(`Command failed: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        default:
            log(`Unknown command: ${command}`, 'error');
            log('Available commands: info, list-deploys, list-locked, create-locked, delete-locked, report', 'info');
            process.exit(1);
    }
} else {
    // Export for use as a module
    module.exports = {
        configure,
        getSiteInfo,
        listDeploys,
        getDeploy,
        createLockedDeploy,
        deleteLockedDeploy,
        listLockedDeploys,
        getBuildHooks,
        createBuildHook,
        triggerBuildHook,
        getDeployContexts,
        restoreDeploy,
        waitForDeployState,
        createDeployKey,
        getDeployUrl,
        generateDeploymentReport
    };
}
