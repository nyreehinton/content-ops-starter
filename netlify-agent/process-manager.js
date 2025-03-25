#!/usr/bin/env node

/**
 * Netlify Process Manager
 *
 * This script helps manage processes during Netlify builds:
 * - Identifies and cleans up lingering processes
 * - Ensures server processes are properly terminated
 * - Helps prevent memory usage issues by monitoring and killing problematic processes
 * - Provides a clean exit for all child processes
 *
 * This module is particularly important for preventing hung builds due to
 * orphaned processes (a common issue in Netlify deployments).
 */

const { spawn, exec } = require('child_process');
const ps = require('ps-node');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    // Process patterns to watch (regex patterns for process names)
    processPatterns: {
        // Dev servers and watch processes that should be terminated
        devServers: ['next dev', 'webpack-dev-server', 'vite', 'react-scripts start', 'serve', 'parcel', 'gatsby develop'],
        // Background processes that might cause issues
        backgroundProcesses: ['watch', 'tailwindcss --watch', 'tsc --watch', 'nodemon', 'livereload'],
        // Browser processes that should be terminated
        browsers: ['chrome', 'chromium', 'firefox', 'playwright', 'puppeteer']
    },

    // Memory threshold (in MB) to consider a process problematic
    memoryThresholds: {
        warning: 500, // 500 MB
        critical: 1000 // 1 GB
    },

    // Time thresholds (in seconds)
    timeThresholds: {
        // How long to allow a process to terminate gracefully before force kill
        gracefulShutdown: 5,
        // Maximum lifetime for development servers in build context
        maxDevServerLifetime: 60
    },

    // Output settings
    output: {
        logToFile: true,
        logDir: 'netlify-process-logs',
        consoleOutput: true
    }
};

// State
const STATE = {
    trackedProcesses: new Map(), // Map of PID => process info
    exitHandlerAttached: false
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

            const logFile = path.join(CONFIG.output.logDir, `process-${level}.log`);
            fs.appendFileSync(logFile, formattedMessage + '\n');
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
    }
}

/**
 * Initialize the process manager
 */
function initialize() {
    if (!STATE.exitHandlerAttached) {
        // Attach clean exit handlers
        process.on('exit', () => cleanupAllProcesses());
        process.on('SIGINT', () => {
            log('Received SIGINT signal, cleaning up processes...');
            cleanupAllProcesses();
            process.exit(0);
        });
        process.on('SIGTERM', () => {
            log('Received SIGTERM signal, cleaning up processes...');
            cleanupAllProcesses();
            process.exit(0);
        });

        STATE.exitHandlerAttached = true;
        log('Process manager initialized');
    }
}

/**
 * Get all running processes
 */
function getAllProcesses() {
    return new Promise((resolve, reject) => {
        ps.lookup({}, (error, processes) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(processes);
        });
    });
}

/**
 * Get process details by PID
 */
function getProcessByPid(pid) {
    return new Promise((resolve, reject) => {
        ps.lookup({ pid: pid }, (error, processes) => {
            if (error) {
                reject(error);
                return;
            }

            if (processes.length === 0) {
                resolve(null);
            } else {
                resolve(processes[0]);
            }
        });
    });
}

/**
 * Check if a process matches any of the problematic patterns
 */
function matchesProblematicPattern(command) {
    const patterns = [...CONFIG.processPatterns.devServers, ...CONFIG.processPatterns.backgroundProcesses, ...CONFIG.processPatterns.browsers];

    return patterns.some((pattern) => {
        if (typeof pattern === 'string') {
            return command.includes(pattern);
        } else if (pattern instanceof RegExp) {
            return pattern.test(command);
        }
        return false;
    });
}

/**
 * Get memory usage of a process
 */
function getProcessMemoryUsage(pid) {
    return new Promise((resolve, reject) => {
        exec(`ps -p ${pid} -o rss=`, (error, stdout, stderr) => {
            if (error) {
                // Process might not exist anymore
                resolve(0);
                return;
            }

            const rss = parseInt(stdout.trim(), 10);
            // Convert from KB to MB
            const memoryMB = rss / 1024;
            resolve(memoryMB);
        });
    });
}

/**
 * Find all problematic processes
 */
async function findProblematicProcesses() {
    try {
        const allProcesses = await getAllProcesses();
        const problematicProcesses = [];

        for (const proc of allProcesses) {
            // Skip own process
            if (proc.pid === process.pid) {
                continue;
            }

            // Check if command matches problematic patterns
            if (proc.command && matchesProblematicPattern(proc.command)) {
                const memoryUsage = await getProcessMemoryUsage(proc.pid);

                problematicProcesses.push({
                    pid: proc.pid,
                    command: proc.command,
                    memoryMB: memoryUsage,
                    critical: memoryUsage > CONFIG.memoryThresholds.critical,
                    warning: memoryUsage > CONFIG.memoryThresholds.warning
                });
            }
        }

        return problematicProcesses;
    } catch (error) {
        log(`Error finding problematic processes: ${error.message}`, 'error');
        return [];
    }
}

/**
 * Kill a process by PID
 */
async function killProcess(pid, signal = 'SIGTERM') {
    try {
        log(`Attempting to kill process ${pid} with ${signal}`);

        return new Promise((resolve) => {
            ps.kill(pid, signal, (error) => {
                if (error) {
                    log(`Error killing process ${pid}: ${error.message}`, 'error');
                    resolve(false);
                } else {
                    log(`Successfully sent ${signal} to process ${pid}`);
                    resolve(true);
                }
            });
        });
    } catch (error) {
        log(`Error killing process ${pid}: ${error.message}`, 'error');
        return false;
    }
}

/**
 * Kill a process with grace period
 */
async function killProcessWithGrace(pid, gracePeriodSeconds = CONFIG.timeThresholds.gracefulShutdown) {
    try {
        // First try SIGTERM for graceful shutdown
        const termSuccess = await killProcess(pid, 'SIGTERM');

        if (termSuccess) {
            // Wait for the grace period
            log(`Waiting ${gracePeriodSeconds} seconds for process ${pid} to exit gracefully...`);
            await new Promise((resolve) => setTimeout(resolve, gracePeriodSeconds * 1000));

            // Check if the process is still running
            const process = await getProcessByPid(pid);

            if (process) {
                log(`Process ${pid} still running after grace period, sending SIGKILL`);
                await killProcess(pid, 'SIGKILL');
            } else {
                log(`Process ${pid} exited gracefully`);
                return true;
            }
        } else {
            // If SIGTERM failed, try SIGKILL
            log(`Failed to send SIGTERM to process ${pid}, trying SIGKILL`);
            await killProcess(pid, 'SIGKILL');
        }

        // Final check
        const finalCheck = await getProcessByPid(pid);
        return !finalCheck;
    } catch (error) {
        log(`Error killing process ${pid} with grace: ${error.message}`, 'error');
        return false;
    }
}

/**
 * Cleanup all problematic processes
 */
async function cleanupProblematicProcesses() {
    const problematicProcesses = await findProblematicProcesses();

    if (problematicProcesses.length === 0) {
        log('No problematic processes found');
        return { success: true, killedCount: 0, processes: [] };
    }

    log(`Found ${problematicProcesses.length} problematic processes to clean up`);

    const results = {
        success: true,
        killedCount: 0,
        processes: []
    };

    // Kill processes in order of priority: critical first, then warnings
    const criticalProcesses = problematicProcesses.filter((p) => p.critical);
    const warningProcesses = problematicProcesses.filter((p) => p.warning && !p.critical);
    const otherProcesses = problematicProcesses.filter((p) => !p.warning && !p.critical);

    const processOrder = [...criticalProcesses, ...warningProcesses, ...otherProcesses];

    for (const proc of processOrder) {
        log(
            `Cleaning up process ${proc.pid} (${proc.command.slice(0, 50)}${proc.command.length > 50 ? '...' : ''})${proc.critical ? ' [CRITICAL]' : proc.warning ? ' [WARNING]' : ''}`
        );

        const killSuccess = await killProcessWithGrace(proc.pid);

        results.processes.push({
            pid: proc.pid,
            command: proc.command,
            memoryMB: proc.memoryMB,
            killed: killSuccess
        });

        if (killSuccess) {
            results.killedCount++;
        } else {
            results.success = false;
        }
    }

    log(`Cleaned up ${results.killedCount} of ${problematicProcesses.length} problematic processes`);
    return results;
}

/**
 * Track a child process spawned during build
 */
function trackProcess(childProcess, name, options = {}) {
    if (!childProcess || !childProcess.pid) {
        log('Invalid child process provided to track', 'error');
        return;
    }

    const pid = childProcess.pid;
    const autocleanup = options.autocleanup !== false;
    const maxLifetime = options.maxLifetime || null;

    // Store process info
    STATE.trackedProcesses.set(pid, {
        process: childProcess,
        name,
        startTime: Date.now(),
        autocleanup,
        maxLifetime
    });

    log(`Now tracking process ${pid} (${name})`);

    // Set up termination listener
    childProcess.on('exit', (code, signal) => {
        log(`Process ${pid} (${name}) exited with code ${code} and signal ${signal || 'none'}`);
        STATE.trackedProcesses.delete(pid);
    });

    // Set up maxLifetime timer if specified
    if (maxLifetime) {
        setTimeout(() => {
            if (STATE.trackedProcesses.has(pid)) {
                log(`Process ${pid} (${name}) exceeded maximum lifetime of ${maxLifetime}ms, terminating`);
                killProcessWithGrace(pid);
            }
        }, maxLifetime);
    }

    return {
        pid,
        stop: () => killProcessWithGrace(pid)
    };
}

/**
 * Start a process with automatic cleanup
 */
function startManagedProcess(command, args = [], options = {}) {
    const name = options.name || command;
    const autocleanup = options.autocleanup !== false;
    const maxLifetime = options.maxLifetime || null;
    const spawnOptions = options.spawnOptions || {};

    log(`Starting managed process: ${name}`);

    const childProcess = spawn(command, args, spawnOptions);

    // Set up stdout/stderr handling
    if (childProcess.stdout) {
        childProcess.stdout.on('data', (data) => {
            if (options.captureOutput) {
                log(`[${name}] ${data.toString().trim()}`);
            }
        });
    }

    if (childProcess.stderr) {
        childProcess.stderr.on('data', (data) => {
            if (options.captureOutput) {
                log(`[${name}] ERROR: ${data.toString().trim()}`, 'error');
            }
        });
    }

    // Track the process
    return trackProcess(childProcess, name, {
        autocleanup,
        maxLifetime
    });
}

/**
 * Clean up all tracked processes
 */
async function cleanupTrackedProcesses() {
    if (STATE.trackedProcesses.size === 0) {
        log('No tracked processes to clean up');
        return { success: true, killedCount: 0 };
    }

    log(`Cleaning up ${STATE.trackedProcesses.size} tracked processes`);

    const results = {
        success: true,
        killedCount: 0
    };

    const processes = Array.from(STATE.trackedProcesses.entries());

    for (const [pid, info] of processes) {
        if (info.autocleanup) {
            log(`Cleaning up tracked process ${pid} (${info.name})`);

            try {
                const killSuccess = await killProcessWithGrace(pid);

                if (killSuccess) {
                    results.killedCount++;
                    STATE.trackedProcesses.delete(pid);
                } else {
                    results.success = false;
                }
            } catch (error) {
                log(`Error cleaning up process ${pid}: ${error.message}`, 'error');
                results.success = false;
            }
        }
    }

    log(`Cleaned up ${results.killedCount} of ${processes.length} tracked processes`);
    return results;
}

/**
 * Clean up all processes (tracked and problematic)
 */
async function cleanupAllProcesses() {
    log('Starting comprehensive cleanup of all processes');

    // First, clean up tracked processes
    const trackedResults = await cleanupTrackedProcesses();

    // Then, find and clean up any other problematic processes
    const problematicResults = await cleanupProblematicProcesses();

    const results = {
        success: trackedResults.success && problematicResults.success,
        trackedProcesses: {
            total: STATE.trackedProcesses.size + trackedResults.killedCount,
            killed: trackedResults.killedCount
        },
        problematicProcesses: {
            total: problematicResults.processes.length,
            killed: problematicResults.killedCount,
            details: problematicResults.processes
        }
    };

    log(`Comprehensive cleanup complete. Killed ${trackedResults.killedCount + problematicResults.killedCount} processes in total.`);
    return results;
}

/**
 * Scan for problematic processes and warn (doesn't kill anything)
 */
async function scanProcesses() {
    const problematicProcesses = await findProblematicProcesses();

    if (problematicProcesses.length === 0) {
        log('No problematic processes found during scan');
        return { problematicFound: false, processes: [] };
    }

    log(`Found ${problematicProcesses.length} potentially problematic processes`, 'warn');

    problematicProcesses.forEach((proc) => {
        log(
            `Potential issue: Process ${proc.pid} (${proc.command.slice(0, 50)}${proc.command.length > 50 ? '...' : ''}) using ${proc.memoryMB.toFixed(2)}MB of memory${proc.critical ? ' [CRITICAL]' : proc.warning ? ' [WARNING]' : ''}`,
            'warn'
        );
    });

    return {
        problematicFound: true,
        processes: problematicProcesses
    };
}

// Initialize if run directly
if (require.main === module) {
    // Parse command-line arguments
    const args = process.argv.slice(2);
    const command = args[0];

    // Ensure log directory exists
    if (!fs.existsSync(CONFIG.output.logDir)) {
        fs.mkdirSync(CONFIG.output.logDir, { recursive: true });
    }

    // Initialize process manager
    initialize();

    // Execute the requested command
    switch (command) {
        case 'scan':
            log('Scanning for problematic processes...');
            scanProcesses()
                .then((result) => {
                    if (result.problematicFound) {
                        console.log(JSON.stringify(result.processes, null, 2));
                    } else {
                        log('No problematic processes found');
                    }
                })
                .catch((error) => {
                    log(`Error scanning processes: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        case 'cleanup':
            log('Cleaning up problematic processes...');
            cleanupProblematicProcesses()
                .then((result) => {
                    log(`Cleaned up ${result.killedCount} problematic processes`);
                    process.exit(result.success ? 0 : 1);
                })
                .catch((error) => {
                    log(`Error cleaning up processes: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        case 'cleanup-all':
            log('Cleaning up all processes...');
            cleanupAllProcesses()
                .then((result) => {
                    log(`Cleaned up ${result.trackedProcesses.killed + result.problematicProcesses.killed} processes in total`);
                    process.exit(result.success ? 0 : 1);
                })
                .catch((error) => {
                    log(`Error cleaning up processes: ${error.message}`, 'error');
                    process.exit(1);
                });
            break;

        default:
            log('Usage: node process-manager.js [scan|cleanup|cleanup-all]');
            process.exit(1);
    }
} else {
    // Export for use as a module
    module.exports = {
        initialize,
        scanProcesses,
        cleanupProblematicProcesses,
        cleanupTrackedProcesses,
        cleanupAllProcesses,
        startManagedProcess,
        trackProcess,
        killProcess,
        killProcessWithGrace,
        findProblematicProcesses
    };
}
