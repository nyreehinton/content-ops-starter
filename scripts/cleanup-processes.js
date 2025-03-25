/**
 * Netlify Build Process Cleanup Script
 *
 * This script identifies and terminates processes that might cause issues during Netlify builds
 * such as lingering servers, watchers, or other background processes that could prevent builds
 * from completing successfully.
 */

const { execSync } = require('child_process');
const ps = require('ps-node');

// Configuration
const PROBLEMATIC_PROCESS_TERMS = [
    'webpack --watch',
    'next dev',
    'nodemon',
    'webpack-dev-server',
    'react-scripts start',
    'vite --watch',
    'gatsby develop',
    'serve',
    'live-server'
];

// Helper functions
function log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = level === 'error' ? '❌' : level === 'warn' ? '⚠️' : level === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
}

// Identify potentially problematic processes
function findProblematicProcesses() {
    return new Promise((resolve) => {
        log('Searching for potentially problematic processes...');

        try {
            ps.lookup({}, (err, processes) => {
                if (err) {
                    log(`Error looking up processes: ${err.message}`, 'error');
                    resolve([]);
                    return;
                }

                const problematicProcesses = processes.filter((process) => {
                    const command = process.command + ' ' + (process.arguments || []).join(' ');
                    return PROBLEMATIC_PROCESS_TERMS.some((term) => command.includes(term));
                });

                log(`Found ${problematicProcesses.length} potentially problematic processes`);
                resolve(problematicProcesses);
            });
        } catch (error) {
            log(`Unexpected error finding processes: ${error.message}`, 'error');
            resolve([]);
        }
    });
}

// Kill problematic processes
async function killProblematicProcesses(processes) {
    log(`Attempting to terminate ${processes.length} processes...`);

    let killedCount = 0;

    for (const process of processes) {
        try {
            log(`Terminating process ${process.pid}: ${process.command}`);

            await new Promise((resolve) => {
                ps.kill(process.pid, (err) => {
                    if (err) {
                        log(`Failed to kill process ${process.pid}: ${err.message}`, 'warn');
                    } else {
                        killedCount++;
                        log(`Successfully terminated process ${process.pid}`, 'success');
                    }
                    resolve();
                });
            });
        } catch (error) {
            log(`Error killing process ${process.pid}: ${error.message}`, 'error');
        }
    }

    log(`Terminated ${killedCount} of ${processes.length} problematic processes`, killedCount > 0 ? 'success' : 'info');
    return killedCount;
}

// Alternative method for platforms where ps-node might not work
function killProcessesWithExec() {
    log('Falling back to exec-based process cleanup...');

    try {
        // Different approach depending on platform
        if (process.platform === 'win32') {
            // Windows
            for (const term of PROBLEMATIC_PROCESS_TERMS) {
                try {
                    execSync(`taskkill /F /FI "WINDOWTITLE eq ${term}" /FI "IMAGENAME eq node.exe" /T`, { stdio: 'pipe' });
                } catch (e) {
                    // Ignore errors if process not found
                }
            }
        } else {
            // Unix-like (Linux, macOS)
            for (const term of PROBLEMATIC_PROCESS_TERMS) {
                try {
                    execSync(`pkill -f "${term}"`, { stdio: 'pipe' });
                } catch (e) {
                    // Ignore errors if process not found
                }
            }
        }

        log('Exec-based cleanup completed', 'success');
        return true;
    } catch (error) {
        log(`Error in exec-based cleanup: ${error.message}`, 'error');
        return false;
    }
}

// Main execution
async function main() {
    log('Starting Netlify build process cleanup');

    try {
        // Try ps-node approach first
        const problematicProcesses = await findProblematicProcesses();

        if (problematicProcesses.length > 0) {
            await killProblematicProcesses(problematicProcesses);
        } else {
            log('No problematic processes found using ps-node');
        }

        // Also try exec-based approach as a fallback/complement
        killProcessesWithExec();

        log('Process cleanup completed successfully', 'success');
    } catch (error) {
        log(`Error during process cleanup: ${error.message}`, 'error');
        // Don't exit with error to avoid failing the build
    }
}

// Execute the main function
main().catch((error) => {
    log(`Unhandled error: ${error.message}`, 'error');
    // Still exit with success to avoid failing the build
});
