#!/usr/bin/env node

/**
 * Netlify Build Resource Monitor
 *
 * This script monitors resource usage during Netlify builds to detect potential issues:
 * - Memory usage that might approach Netlify's limits
 * - CPU utilization
 * - Long-running or orphaned processes
 * - Build time approaching limits
 *
 * It can be integrated into the build process to provide real-time monitoring
 * and help optimize build performance according to Netlify build guidelines.
 */

const { spawn, exec } = require('child_process');
const os = require('os');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    // Netlify build limits (based on their docs)
    limits: {
        // Netlify Free/Pro plans: 8GB memory, 3 vCPUs
        memoryLimit: 8 * 1024 * 1024 * 1024, // 8GB in bytes
        cpuLimit: 3,
        buildTimeLimit: 15 * 60 * 1000 // 15 minutes in milliseconds
    },

    // Monitoring settings
    settings: {
        intervalMs: 5000, // Check every 5 seconds
        warnThresholdMemory: 0.8, // Warn at 80% of memory limit
        warnThresholdCpu: 0.8, // Warn at 80% of CPU limit
        warnThresholdTime: 0.8 // Warn at 80% of time limit
    },

    // Output settings
    output: {
        logToFile: true,
        logFilePath: 'netlify-resource-monitor.log',
        consoleOutput: true
    }
};

// State
const STATE = {
    startTime: Date.now(),
    maxMemoryUsage: 0,
    maxCpuUsage: 0,
    warningsIssued: {
        memory: false,
        cpu: false,
        time: false
    },
    logStream: null
};

// Helper functions
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
}

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
    if (CONFIG.output.logToFile && STATE.logStream && !STATE.logStream.closed) {
        try {
            STATE.logStream.write(formattedMessage + '\n');
        } catch (err) {
            console.error(`Error writing to log stream: ${err.message}`);
        }
    }
}

// Setup log file if enabled
function setupLogging() {
    if (CONFIG.output.logToFile) {
        try {
            STATE.logStream = fs.createWriteStream(CONFIG.output.logFilePath, { flags: 'a' });
            log('Resource monitoring started');
        } catch (error) {
            console.error('Failed to open log file:', error.message);
            CONFIG.output.logToFile = false;
        }
    }
}

// Monitor memory usage
async function getMemoryUsage() {
    return new Promise((resolve, reject) => {
        // Get system memory
        const totalMemory = os.totalmem();
        const freeMemory = os.freemem();
        const usedMemory = totalMemory - freeMemory;

        // Get process memory
        const processMemory = process.memoryUsage();

        resolve({
            system: {
                total: totalMemory,
                free: freeMemory,
                used: usedMemory,
                percentUsed: (usedMemory / totalMemory) * 100
            },
            process: {
                rss: processMemory.rss, // Resident Set Size
                heapTotal: processMemory.heapTotal,
                heapUsed: processMemory.heapUsed,
                external: processMemory.external
            }
        });
    });
}

// Monitor CPU usage
async function getCpuUsage() {
    return new Promise((resolve, reject) => {
        exec("ps -A -o %cpu | awk '{s+=$1} END {print s}'", (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }

            const totalCpuUsage = parseFloat(stdout.trim());
            const availableCpus = os.cpus().length;

            resolve({
                totalUsage: totalCpuUsage,
                availableCpus,
                percentUsed: (totalCpuUsage / (100 * availableCpus)) * 100 // Normalize to percentage
            });
        });
    });
}

// Find long-running processes that might cause problems
async function findLongRunningProcesses() {
    return new Promise((resolve, reject) => {
        exec('ps -eo pid,ppid,cmd,%cpu,%mem,etime --sort=-%cpu | head -n 10', (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(stdout.trim());
        });
    });
}

// Check for processes that might be problematic during Netlify builds
async function checkForProblematicProcesses() {
    return new Promise((resolve, reject) => {
        // Check for server processes (common culprits for hung builds)
        exec('ps aux | grep -i "server\\|watch\\|daemon" | grep -v grep', (error, stdout, stderr) => {
            if (error) {
                // No matches found is not an error for us
                resolve([]);
                return;
            }

            const processes = stdout
                .trim()
                .split('\n')
                .filter((line) => line.trim().length > 0)
                .map((line) => {
                    const parts = line.trim().split(/\s+/);
                    return {
                        user: parts[0],
                        pid: parts[1],
                        cpu: parseFloat(parts[2]),
                        mem: parseFloat(parts[3]),
                        command: parts.slice(10).join(' ')
                    };
                });

            resolve(processes);
        });
    });
}

// Check for time limits
function checkTimeLimit() {
    const elapsedTime = Date.now() - STATE.startTime;
    const percentUsed = (elapsedTime / CONFIG.limits.buildTimeLimit) * 100;

    return {
        elapsedTime,
        percentUsed,
        remaining: CONFIG.limits.buildTimeLimit - elapsedTime
    };
}

// Run a single monitoring cycle
async function runMonitoringCycle() {
    try {
        // Memory check
        const memoryInfo = await getMemoryUsage();
        STATE.maxMemoryUsage = Math.max(STATE.maxMemoryUsage, memoryInfo.process.rss);
        const memoryPercentOfLimit = (memoryInfo.process.rss / CONFIG.limits.memoryLimit) * 100;

        // CPU check
        const cpuInfo = await getCpuUsage();
        STATE.maxCpuUsage = Math.max(STATE.maxCpuUsage, cpuInfo.totalUsage);
        const cpuPercentOfLimit = (cpuInfo.totalUsage / (100 * CONFIG.limits.cpuLimit)) * 100;

        // Time check
        const timeInfo = checkTimeLimit();

        // Log summary
        log(`Memory: ${formatBytes(memoryInfo.process.rss)} (${memoryPercentOfLimit.toFixed(1)}% of limit)`);
        log(`CPU: ${cpuInfo.totalUsage.toFixed(1)}% (${cpuPercentOfLimit.toFixed(1)}% of limit)`);
        log(`Time: ${formatTime(timeInfo.elapsedTime)} (${timeInfo.percentUsed.toFixed(1)}% of limit)`);

        // Warning checks
        if (memoryPercentOfLimit > CONFIG.settings.warnThresholdMemory * 100 && !STATE.warningsIssued.memory) {
            log(`WARNING: Memory usage is approaching Netlify's limit. Current: ${formatBytes(memoryInfo.process.rss)}`, 'warn');
            STATE.warningsIssued.memory = true;

            // If we're close to the limit, check for problematic processes
            const problematicProcesses = await checkForProblematicProcesses();
            if (problematicProcesses.length > 0) {
                log('Potentially problematic processes found:', 'warn');
                problematicProcesses.forEach((process, index) => {
                    log(`  ${index + 1}. PID ${process.pid}: ${process.command} (CPU: ${process.cpu}%, Mem: ${process.mem}%)`, 'warn');
                });
            }
        }

        if (cpuPercentOfLimit > CONFIG.settings.warnThresholdCpu * 100 && !STATE.warningsIssued.cpu) {
            log(`WARNING: CPU usage is approaching Netlify's limit. Current: ${cpuInfo.totalUsage.toFixed(1)}%`, 'warn');
            STATE.warningsIssued.cpu = true;

            // Show top processes by CPU
            const processInfo = await findLongRunningProcesses();
            log('Top processes by CPU usage:', 'warn');
            log(processInfo, 'warn');
        }

        if (timeInfo.percentUsed > CONFIG.settings.warnThresholdTime * 100 && !STATE.warningsIssued.time) {
            log(`WARNING: Build time is approaching Netlify's limit. Elapsed: ${formatTime(timeInfo.elapsedTime)}`, 'warn');
            STATE.warningsIssued.time = true;
        }
    } catch (error) {
        log(`Error during monitoring: ${error.message}`, 'error');
    }
}

// Start the monitoring
function startMonitoring() {
    setupLogging();
    log('Starting Netlify build resource monitoring');
    log(`Memory limit: ${formatBytes(CONFIG.limits.memoryLimit)}`);
    log(`CPU limit: ${CONFIG.limits.cpuLimit} vCPUs`);
    log(`Build time limit: ${formatTime(CONFIG.limits.buildTimeLimit)}`);

    // Initial monitoring cycle
    runMonitoringCycle();

    // Set up interval for regular monitoring
    const intervalId = setInterval(async () => {
        await runMonitoringCycle();

        // If we've reached the time limit, stop monitoring
        const timeInfo = checkTimeLimit();
        if (timeInfo.elapsedTime >= CONFIG.limits.buildTimeLimit) {
            clearInterval(intervalId);
            stopMonitoring();
        }
    }, CONFIG.settings.intervalMs);

    // Handle process termination
    process.on('SIGINT', () => {
        clearInterval(intervalId);
        stopMonitoring();
    });

    process.on('SIGTERM', () => {
        clearInterval(intervalId);
        stopMonitoring();
    });
}

// Stop monitoring and print summary
function stopMonitoring() {
    const elapsedTime = Date.now() - STATE.startTime;

    log('\nMonitoring Summary:');
    log(`Total build time: ${formatTime(elapsedTime)}`);
    log(`Peak memory usage: ${formatBytes(STATE.maxMemoryUsage)}`);
    log(`Peak CPU usage: ${STATE.maxCpuUsage.toFixed(1)}%`);

    if (STATE.logStream) {
        try {
            STATE.logStream.end();
            STATE.logStream = null; // Prevent further writes to closed stream
        } catch (err) {
            console.error('Error closing log stream:', err.message);
        }
    }

    log('Resource monitoring stopped');
}

// If run directly, start monitoring
if (require.main === module) {
    startMonitoring();
} else {
    // Export for use as a module
    module.exports = {
        startMonitoring,
        stopMonitoring,
        getMemoryUsage,
        getCpuUsage,
        findLongRunningProcesses,
        checkForProblematicProcesses
    };
}
