#!/usr/bin/env node

/**
 * Netlify Test Executor
 *
 * This script manages and orchestrates different types of tests according to Netlify build guidelines:
 * - Unit tests: Fast tests for individual components
 * - Integration tests: Tests for interactions between components
 * - Acceptance/End-to-End tests: Tests against deployed previews
 *
 * It provides functions to run tests in the correct order, with proper exit code handling,
 * and integrates with the Netlify build process.
 */

const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

// Configuration
const CONFIG = {
    // Default test commands if not specified in package.json
    defaultCommands: {
        unit: 'npm run test',
        integration: 'npm run test:integration',
        e2e: 'npm run test:e2e',
        acceptance: 'npm run test:acceptance'
    },

    // Test timeouts (milliseconds)
    timeouts: {
        unit: 2 * 60 * 1000, // 2 minutes
        integration: 5 * 60 * 1000, // 5 minutes
        e2e: 10 * 60 * 1000, // 10 minutes
        acceptance: 10 * 60 * 1000 // 10 minutes
    },

    // Output settings
    output: {
        logToFile: true,
        logDir: 'netlify-test-logs',
        consoleOutput: true
    }
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

            const logFile = path.join(CONFIG.output.logDir, `test-${level}.log`);
            fs.appendFileSync(logFile, formattedMessage + '\n');
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
    }
}

/**
 * Read package.json to identify test commands
 */
function getTestCommands() {
    try {
        const packageJsonPath = path.resolve(process.cwd(), 'package.json');
        if (!fs.existsSync(packageJsonPath)) {
            log('package.json not found, using default test commands', 'warn');
            return CONFIG.defaultCommands;
        }

        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const scripts = packageJson.scripts || {};

        // Extract test commands
        const commands = {
            unit: scripts.test || CONFIG.defaultCommands.unit,
            integration: scripts['test:integration'] || CONFIG.defaultCommands.integration,
            e2e: scripts['test:e2e'] || CONFIG.defaultCommands.e2e,
            acceptance: scripts['test:acceptance'] || CONFIG.defaultCommands.acceptance
        };

        // Check for alternative naming patterns
        if (!scripts['test:integration'] && scripts['integration']) {
            commands.integration = `npm run integration`;
        }

        if (!scripts['test:e2e'] && scripts['e2e']) {
            commands.e2e = `npm run e2e`;
        }

        if (!scripts['test:acceptance'] && scripts['acceptance']) {
            commands.acceptance = `npm run acceptance`;
        }

        return commands;
    } catch (error) {
        log(`Error reading package.json: ${error.message}`, 'error');
        return CONFIG.defaultCommands;
    }
}

/**
 * Check if test commands are properly configured
 */
function verifyTestSetup() {
    const commands = getTestCommands();
    const missingTests = [];

    // Check if expected test scripts exist
    if (commands.unit === CONFIG.defaultCommands.unit) {
        const result = runCommand('npm run test --dry-run', true);
        if (result.code !== 0) {
            missingTests.push('unit');
        }
    }

    if (commands.integration === CONFIG.defaultCommands.integration) {
        const result = runCommand('npm run test:integration --dry-run', true);
        if (result.code !== 0) {
            missingTests.push('integration');
        }
    }

    if (commands.e2e === CONFIG.defaultCommands.e2e && commands.acceptance === CONFIG.defaultCommands.acceptance) {
        // Check if either e2e or acceptance tests are configured
        const e2eResult = runCommand('npm run test:e2e --dry-run', true);
        const acceptanceResult = runCommand('npm run test:acceptance --dry-run', true);

        if (e2eResult.code !== 0 && acceptanceResult.code !== 0) {
            missingTests.push('end-to-end/acceptance');
        }
    }

    return {
        allConfigured: missingTests.length === 0,
        missingTests,
        commands
    };
}

/**
 * Execute a command synchronously
 */
function runCommand(command, silent = false) {
    try {
        if (!silent) {
            log(`Executing command: ${command}`);
        }

        const result = require('child_process').execSync(command, {
            encoding: 'utf8',
            stdio: silent ? 'pipe' : 'inherit'
        });

        return { code: 0, output: result };
    } catch (error) {
        if (!silent) {
            log(`Command failed with exit code ${error.status}: ${command}`, 'error');
        }
        return { code: error.status || 1, output: error.message };
    }
}

/**
 * Execute a command asynchronously with timeout
 */
function runCommandAsync(command, timeoutMs) {
    return new Promise((resolve) => {
        log(`Starting: ${command}`);

        const startTime = Date.now();
        const childProcess = exec(command);

        let stdout = '';
        let stderr = '';

        childProcess.stdout.on('data', (data) => {
            stdout += data;
            if (CONFIG.output.consoleOutput) {
                process.stdout.write(data);
            }
        });

        childProcess.stderr.on('data', (data) => {
            stderr += data;
            if (CONFIG.output.consoleOutput) {
                process.stderr.write(data);
            }
        });

        // Set timeout
        const timeoutId = setTimeout(() => {
            log(`Command timed out after ${timeoutMs}ms: ${command}`, 'error');
            childProcess.kill('SIGTERM');

            // Give it a moment to clean up
            setTimeout(() => {
                childProcess.kill('SIGKILL');
            }, 5000);

            resolve({
                code: 124, // Timeout exit code
                stdout,
                stderr,
                timedOut: true,
                executionTime: Date.now() - startTime
            });
        }, timeoutMs);

        childProcess.on('close', (code) => {
            clearTimeout(timeoutId);
            const executionTime = Date.now() - startTime;

            log(`Finished: ${command} (exit code: ${code}, time: ${Math.round(executionTime / 1000)}s)`);

            resolve({
                code: code || 0,
                stdout,
                stderr,
                timedOut: false,
                executionTime
            });
        });
    });
}

/**
 * Run unit tests
 */
function runUnitTests() {
    log('Running unit tests...');

    // Change from direct jest command to using npx
    const result = runCommand('npx jest');

    if (result.code !== 0) {
        log(`Unit tests failed with exit code: ${result.code}`, 'ERROR');
        return false;
    }

    return true;
}

/**
 * Run integration tests
 */
async function runIntegrationTests() {
    const commands = getTestCommands();
    log('Running integration tests...');

    // Check if integration tests are configured
    const integrationDryRun = runCommand('npm run test:integration --dry-run', true);
    if (integrationDryRun.code !== 0) {
        log('Integration tests not configured, skipping', 'warn');
        return true;
    }

    const result = await runCommandAsync(commands.integration, CONFIG.timeouts.integration);

    if (result.code !== 0) {
        log('Integration tests failed', 'error');
        return false;
    }

    log('Integration tests passed');
    return true;
}

/**
 * Run end-to-end or acceptance tests
 */
async function runE2ETests(deployUrl = null) {
    const commands = getTestCommands();

    // If we have a deploy URL, set it as an environment variable
    if (deployUrl) {
        log(`Running acceptance tests against deploy preview: ${deployUrl}`);
        process.env.DEPLOY_URL = deployUrl;
        process.env.NETLIFY_DEPLOY_URL = deployUrl;

        // Use acceptance test command if available, otherwise e2e tests
        const command = commands.acceptance !== CONFIG.defaultCommands.acceptance ? commands.acceptance : commands.e2e;

        const result = await runCommandAsync(command, CONFIG.timeouts.acceptance);

        if (result.code !== 0) {
            log('Acceptance tests failed', 'error');
            return false;
        }

        log('Acceptance tests passed');
        return true;
    } else {
        // No deploy URL, so run regular e2e tests
        log('Running end-to-end tests...');

        // Check if e2e tests are configured
        const e2eDryRun = runCommand('npm run test:e2e --dry-run', true);
        if (e2eDryRun.code !== 0) {
            log('End-to-end tests not configured, skipping', 'warn');
            return true;
        }

        const result = await runCommandAsync(commands.e2e, CONFIG.timeouts.e2e);

        if (result.code !== 0) {
            log('End-to-end tests failed', 'error');
            return false;
        }

        log('End-to-end tests passed');
        return true;
    }
}

/**
 * Test if a URL is reachable
 */
async function testUrl(url) {
    return new Promise((resolve) => {
        log(`Testing URL: ${url}`);

        const client = url.startsWith('https') ? https : http;

        const req = client.get(url, (res) => {
            log(`Response status code: ${res.statusCode}`);
            resolve({
                success: res.statusCode >= 200 && res.statusCode < 400,
                statusCode: res.statusCode
            });

            // Consume response data to free up memory
            res.resume();
        });

        req.on('error', (error) => {
            log(`Error connecting to ${url}: ${error.message}`, 'error');
            resolve({
                success: false,
                error: error.message
            });
        });

        // Set timeout
        req.setTimeout(10000, () => {
            log(`Request to ${url} timed out`, 'error');
            req.abort();
            resolve({
                success: false,
                error: 'Request timed out'
            });
        });
    });
}

/**
 * Run all tests in correct order: unit -> integration -> e2e/acceptance
 */
async function runAllTests(deployUrl = null) {
    // Verify test setup
    const setupResult = verifyTestSetup();
    if (setupResult.missingTests.length > 0) {
        log(`The following test types are not properly configured: ${setupResult.missingTests.join(', ')}`, 'warn');
    }

    // Start with unit tests
    const unitTestsResult = await runUnitTests();
    if (!unitTestsResult) {
        return {
            success: false,
            stage: 'unit',
            message: 'Unit tests failed'
        };
    }

    // Then integration tests
    const integrationTestsResult = await runIntegrationTests();
    if (!integrationTestsResult) {
        return {
            success: false,
            stage: 'integration',
            message: 'Integration tests failed'
        };
    }

    // Finally, e2e or acceptance tests if applicable
    const e2eTestsResult = await runE2ETests(deployUrl);
    if (!e2eTestsResult) {
        return {
            success: false,
            stage: deployUrl ? 'acceptance' : 'e2e',
            message: deployUrl ? 'Acceptance tests failed' : 'E2E tests failed'
        };
    }

    return {
        success: true,
        message: 'All tests passed successfully'
    };
}

// If run directly, start test execution
if (require.main === module) {
    // Parse command-line arguments
    const args = process.argv.slice(2);
    const options = {
        deployUrl: null,
        skipTests: []
    };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--deploy-url' && i + 1 < args.length) {
            options.deployUrl = args[i + 1];
            i++;
        } else if (args[i] === '--skip' && i + 1 < args.length) {
            options.skipTests = args[i + 1].split(',');
            i++;
        }
    }

    log('Netlify Test Executor started');
    log(`Options: ${JSON.stringify(options, null, 2)}`);

    // Run tests
    runAllTests(options.deployUrl)
        .then((result) => {
            if (result.success) {
                log(result.message);
                process.exit(0);
            } else {
                log(result.message, 'error');
                process.exit(1);
            }
        })
        .catch((error) => {
            log(`Unexpected error: ${error.message}`, 'error');
            process.exit(1);
        });
} else {
    // Export functions for use in other modules
    module.exports = {
        runUnitTests,
        runIntegrationTests,
        runE2ETests,
        runAllTests,
        testUrl,
        verifyTestSetup,
        getTestCommands
    };
}
