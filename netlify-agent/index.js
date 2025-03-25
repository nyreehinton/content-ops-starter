#!/usr/bin/env node

/**
 * Netlify Agents
 *
 * This is the main entry point for the Netlify agent utilities, designed
 * to provide comprehensive tools for managing Netlify builds and deployments
 * according to best practices documented in the Netlify build guidelines.
 *
 * Includes:
 * - Resource monitoring (memory, CPU)
 * - Process management (cleanup lingering processes)
 * - Test execution (unit, integration, e2e)
 * - Deployment management (locked deploys, rollbacks)
 * - Build debugging and validation
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Import all agent modules
let processManager;
let resourceMonitor;
let testExecutor;
let deploymentManager;

// Try to require the modules, ignore errors if they don't exist
try {
    processManager = require('./process-manager');
} catch (error) {
    console.warn('Process manager module could not be loaded:', error.message);
}

try {
    resourceMonitor = require('./resource-monitor');
} catch (error) {
    console.warn('Resource monitor module could not be loaded:', error.message);
}

try {
    testExecutor = require('./test-executor');
} catch (error) {
    console.warn('Test executor module could not be loaded:', error.message);
}

try {
    deploymentManager = require('./deployment-manager');
} catch (error) {
    console.warn('Deployment manager module could not be loaded:', error.message);
}

// Print banner
function printBanner() {
    console.log('');
    console.log('┌───────────────────────────────────────────────┐');
    console.log('│            NETLIFY BUILD AGENTS               │');
    console.log('│                                               │');
    console.log('│  Complete toolkit for Netlify build pipelines │');
    console.log('└───────────────────────────────────────────────┘');
    console.log('');
}

// Help message
function printHelp() {
    console.log('Available commands:');
    console.log('');
    console.log('  debug                Run the debug agent to check site configuration');
    console.log('  enhanced-debug       Run the enhanced debug agent with additional checks');
    console.log('  monitor              Monitor resource usage during build');
    console.log('  process <command>    Manage processes (scan, cleanup, cleanup-all)');
    console.log('  test <type>          Run tests (unit, integration, e2e, all)');
    console.log('  deploy <command>     Manage deployments (info, list-deploys, create-locked)');
    console.log('  report               Generate a comprehensive site report');
    console.log('');
    console.log('For more details on each command, run:');
    console.log('  netlify-agents <command> --help');
    console.log('');
}

// Check if a script exists
function scriptExists(scriptName) {
    const scriptPath = path.join(__dirname, scriptName);
    return fs.existsSync(scriptPath);
}

// Execute a shell script
function executeScript(scriptName, args = []) {
    const scriptPath = path.join(__dirname, scriptName);

    if (!fs.existsSync(scriptPath)) {
        console.error(`Script not found: ${scriptPath}`);
        return;
    }

    // Make script executable if it's not already
    try {
        fs.chmodSync(scriptPath, '755');
    } catch (error) {
        console.warn(`Couldn't make script executable: ${error.message}`);
    }

    // Execute the script
    const child = exec(`${scriptPath} ${args.join(' ')}`, {
        cwd: process.cwd()
    });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    child.on('exit', (code) => {
        process.exit(code);
    });
}

// Run a comprehensive report
async function generateReport() {
    console.log('Generating comprehensive Netlify site report...');
    console.log('');

    const report = {
        site: null,
        processes: null,
        resources: null,
        tests: null,
        timestamp: new Date().toISOString()
    };

    // Site info
    if (deploymentManager) {
        try {
            if (process.env.NETLIFY_AUTH_TOKEN && process.env.NETLIFY_SITE_ID) {
                report.site = await deploymentManager.getSiteInfo();
                console.log('✓ Site information retrieved');
            } else {
                console.log('✗ Site information skipped (missing NETLIFY_AUTH_TOKEN or NETLIFY_SITE_ID)');
            }
        } catch (error) {
            console.error('Error getting site info:', error.message);
        }
    }

    // Process scan
    if (processManager) {
        try {
            report.processes = await processManager.scanProcesses();
            console.log(`✓ Process scan complete (${report.processes.processes.length} problematic processes found)`);
        } catch (error) {
            console.error('Error scanning processes:', error.message);
        }
    }

    // Test verification
    if (testExecutor) {
        try {
            report.tests = testExecutor.verifyTestSetup();
            if (report.tests.allConfigured) {
                console.log('✓ All test types are properly configured');
            } else {
                console.log(`✗ Missing test configurations: ${report.tests.missingTests.join(', ')}`);
            }
        } catch (error) {
            console.error('Error verifying test setup:', error.message);
        }
    }

    // Generate JSON report
    const reportDir = path.join(process.cwd(), 'netlify-reports');
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
    }

    const reportPath = path.join(reportDir, `netlify-report-${new Date().toISOString().replace(/:/g, '-')}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log('');
    console.log(`Report generated: ${reportPath}`);
}

// Process command-line arguments
async function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    printBanner();

    // Initialize process manager if available
    if (processManager) {
        processManager.initialize();
    }

    // Execute requested command
    switch (command) {
        case 'debug':
            if (scriptExists('debug-agent.sh')) {
                executeScript('debug-agent.sh', args.slice(1));
            } else {
                console.error('Debug agent script not found');
            }
            break;

        case 'enhanced-debug':
            if (scriptExists('enhanced-netlify-debug-agent.sh')) {
                executeScript('enhanced-netlify-debug-agent.sh', args.slice(1));
            } else {
                console.error('Enhanced debug agent script not found');
            }
            break;

        case 'monitor':
            if (resourceMonitor) {
                // Start the resource monitor
                resourceMonitor.startMonitoring();
            } else {
                console.error('Resource monitor module not available');
            }
            break;

        case 'process':
            if (processManager) {
                const processCommand = args[1] || 'scan';

                switch (processCommand) {
                    case 'scan':
                        const result = await processManager.scanProcesses();
                        console.log(JSON.stringify(result, null, 2));
                        break;

                    case 'cleanup':
                        await processManager.cleanupProblematicProcesses();
                        break;

                    case 'cleanup-all':
                        await processManager.cleanupAllProcesses();
                        break;

                    default:
                        console.error(`Unknown process command: ${processCommand}`);
                        console.log('Available process commands: scan, cleanup, cleanup-all');
                }
            } else {
                console.error('Process manager module not available');
            }
            break;

        case 'test':
            if (testExecutor) {
                const testType = args[1] || 'all';
                const deployUrl = args.includes('--deploy-url') ? args[args.indexOf('--deploy-url') + 1] : null;

                switch (testType) {
                    case 'unit':
                        await testExecutor.runUnitTests();
                        break;

                    case 'integration':
                        await testExecutor.runIntegrationTests();
                        break;

                    case 'e2e':
                        await testExecutor.runE2ETests();
                        break;

                    case 'all':
                        await testExecutor.runAllTests(deployUrl);
                        break;

                    default:
                        console.error(`Unknown test type: ${testType}`);
                        console.log('Available test types: unit, integration, e2e, all');
                }
            } else {
                console.error('Test executor module not available');
            }
            break;

        case 'deploy':
            if (deploymentManager) {
                const deployCommand = args[1] || 'info';

                // Execute the deployment manager command
                if (scriptExists('deployment-manager.js')) {
                    executeScript('deployment-manager.js', [deployCommand, ...args.slice(2)]);
                } else {
                    console.error('Deployment manager script not found');
                }
            } else {
                console.error('Deployment manager module not available');
            }
            break;

        case 'report':
            await generateReport();
            break;

        case '--help':
        case '-h':
        case undefined:
            printHelp();
            break;

        default:
            console.error(`Unknown command: ${command}`);
            printHelp();
    }
}

// Run the main function
main().catch((error) => {
    console.error('Error:', error.message);
    process.exit(1);
});

// Export all modules
module.exports = {
    processManager,
    resourceMonitor,
    testExecutor,
    deploymentManager
};
