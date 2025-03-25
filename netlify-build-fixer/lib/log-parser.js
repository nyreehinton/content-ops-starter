// lib/log-parser.js
const fs = require('fs').promises;
const chalk = require('chalk');
const stripAnsi = require('strip-ansi');

/**
 * Parse a Netlify build log file
 * 
 * @param {string} filePath - Path to the log file
 * @returns {Promise<Object>} Parsed log information
 */
async function parseNetlifyLog(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return parseLogContent(content);
  } catch (error) {
    throw new Error(`Failed to parse log file: ${error.message}`);
  }
}

/**
 * Parse raw log content from a Netlify build
 * 
 * @param {string} content - Raw log content
 * @returns {Object} Structured log information
 */
function parseLogContent(content) {
  // Remove ANSI color codes
  const cleanContent = stripAnsi(content);
  const lines = cleanContent.split('\n');
  
  // Extract build metadata
  const buildInfo = {
    startTime: extractTimestamp(lines.find(line => line.includes('Build ready to start'))),
    endTime: extractTimestamp(lines.find(line => line.includes('Site is live') || line.includes('Build failed'))),
    nodeVersion: extractValue(lines, 'Node.js version:'),
    npmVersion: extractValue(lines, 'npm version:'),
    buildCommand: extractBuildCommand(lines),
    publishDirectory: extractValue(lines, 'Publish directory:'),
    deployUrl: extractValue(lines, 'Deploy URL:'),
    succeeded: content.includes('Site is live'),
    errorMessage: extractErrorMessage(lines),
    frameworkDetected: detectFramework(lines, cleanContent)
  };
  
  // Extract build duration if available
  if (buildInfo.startTime && buildInfo.endTime) {
    try {
      const start = new Date(`1970-01-01 ${buildInfo.startTime}`);
      const end = new Date(`1970-01-01 ${buildInfo.endTime}`);
      buildInfo.duration = Math.floor((end - start) / 1000); // Duration in seconds
    } catch (e) {
      buildInfo.duration = null;
    }
  }
  
  // Extract build phases
  const phases = {
    initialization: extractPhase(lines, 'Build ready to start', 'Installing dependencies'),
    dependencyInstallation: extractPhase(lines, 'Installing dependencies', 'Building site'),
    buildExecution: extractPhase(lines, 'Building site', 'Post processing'),
    postProcessing: extractPhase(lines, 'Post processing', 'Site is live') || 
                    extractPhase(lines, 'Post processing', 'Build failed')
  };
  
  // Calculate phase durations
  Object.keys(phases).forEach(phase => {
    if (phases[phase]) {
      const phaseLines = phases[phase].split('\n');
      const startTime = extractTimestamp(phaseLines[0]);
      const endTime = extractTimestamp(phaseLines[phaseLines.length - 1]);
      
      if (startTime && endTime) {
        try {
          const start = new Date(`1970-01-01 ${startTime}`);
          const end = new Date(`1970-01-01 ${endTime}`);
          phases[`${phase}Duration`] = Math.floor((end - start) / 1000); // Duration in seconds
        } catch (e) {
          phases[`${phase}Duration`] = null;
        }
      }
    }
  });
  
  // Extract errors
  const errors = {
    nonZeroExit: extractPattern(cleanContent, /Build script returned non-zero exit code: (\d+)/g),
    memoryIssues: extractPattern(cleanContent, /(JavaScript heap out of memory|FATAL ERROR: Ineffective mark-compacts|allocation failure|CALL_AND_RETRY_LAST Allocation failed|fatal:? out of memory)/gi),
    missingModules: extractPattern(cleanContent, /Cannot find module ['"]([^'"]+)['"]/g),
    permissionErrors: extractPattern(cleanContent, /(EACCES: permission denied|EPERM: operation not permitted)/g),
    timeoutErrors: extractPattern(cleanContent, /(Build exceeded maximum allowed runtime|Timeout waiting for)/g),
    lingeringProcesses: extractLingeringProcesses(cleanContent),
    syntaxErrors: extractPattern(cleanContent, /(SyntaxError|ParseError|Unexpected token)/g),
    environmentErrors: extractEnvironmentErrors(cleanContent)
  };
  
  // Extract warnings
  const warnings = {
    deprecationWarnings: extractPattern(cleanContent, /DeprecationWarning: ([^\n]+)/g),
    npmWarnings: extractPattern(cleanContent, /npm WARN ([^\n]+)/g),
    buildWarnings: extractPattern(cleanContent, /Warning: ([^\n]+)/g),
    largeFiles: extractPattern(cleanContent, /Large files .+ may cause longer build times/g)
  };
  
  // Extract performance information
  const performance = {
    buildDuration: buildInfo.duration,
    slowestPhase: findSlowestPhase(phases),
    largeOperations: extractLargeOperations(cleanContent),
    bottlenecks: identifyBottlenecks(cleanContent, buildInfo)
  };
  
  return {
    raw: cleanContent,
    buildInfo,
    phases,
    errors,
    warnings,
    performance
  };
}

/**
 * Extract timestamp from a log line
 */
function extractTimestamp(line) {
  if (!line) return null;
  const match = line.match(/(\d+:\d+:\d+\s*[AP]M)|(\d{2}:\d{2}:\d{2})/);
  return match ? match[0] : null;
}

/**
 * Extract a value following a label in the log
 */
function extractValue(lines, label) {
  const line = lines.find(l => l.includes(label));
  if (!line) return null;
  
  return line.split(label)[1]?.trim();
}

/**
 * Extract the build command from the log
 */
function extractBuildCommand(lines) {
  const commandLine = lines.find(l => l.includes('build command:'));
  if (!commandLine) return null;
  
  return commandLine.split('build command:')[1]?.trim();
}

/**
 * Detect the framework being used
 */
function detectFramework(lines, content) {
  const frameworks = {
    'next': /next\.js|nextjs|next build|next start/i,
    'gatsby': /gatsby|gatsby build|gatsby develop/i,
    'react': /react|react-scripts|create-react-app/i,
    'vue': /vue|vue-cli|nuxt/i,
    'angular': /angular|ng build|ng serve/i,
    'svelte': /svelte|sapper/i,
    'hugo': /hugo|hugo build/i,
    'jekyll': /jekyll|jekyll build/i,
    '11ty': /eleventy|11ty/i
  };
  
  const detectedFrameworks = [];
  
  Object.entries(frameworks).forEach(([framework, pattern]) => {
    if (pattern.test(content)) {
      detectedFrameworks.push(framework);
    }
  });
  
  return detectedFrameworks.length > 0 ? detectedFrameworks : null;
}

/**
 * Extract the main error message
 */
function extractErrorMessage(lines) {
  // Common error patterns, in order of priority
  const errorPatterns = [
    /Build script returned non-zero exit code: (\d+)/,
    /Error: ([^\n]+)/,
    /error: ([^\n]+)/,
    /Build failed due to ([^\n]+)/,
    /FATAL: ([^\n]+)/,
    /fatal: ([^\n]+)/
  ];
  
  for (const pattern of errorPatterns) {
    const errorLine = lines.find(l => pattern.test(l));
    if (errorLine) {
      const match = errorLine.match(pattern);
      return match ? match[0] : errorLine.trim();
    }
  }
  
  // If no specific pattern is found, look for any line with "error" that's not a debug message
  const generalErrorLine = lines.find(l => 
    /error/i.test(l) && 
    !/debug/i.test(l) && 
    !/info/i.test(l) && 
    !/warning/i.test(l)
  );
  
  return generalErrorLine?.trim() || null;
}

/**
 * Extract a phase of the build log
 */
function extractPhase(lines, startMarker, endMarker) {
  const startIndex = lines.findIndex(l => l.includes(startMarker));
  if (startIndex === -1) return null;
  
  const endIndex = lines.findIndex((l, i) => i > startIndex && l.includes(endMarker));
  if (endIndex === -1) return null;
  
  return lines.slice(startIndex, endIndex).join('\n');
}

/**
 * Extract pattern matches from content
 */
function extractPattern(content, pattern) {
  const matches = [];
  let match;
  
  // Reset regex to start from beginning
  if (pattern.global) {
    pattern.lastIndex = 0;
  }
  
  // Handle both string and regex patterns
  if (typeof pattern === 'string') {
    pattern = new RegExp(pattern, 'g');
  }
  
  // Extract all matches
  while ((match = pattern.exec(content)) !== null) {
    // If the pattern has a capturing group, use that, otherwise use the whole match
    matches.push(match[1] || match[0]);
  }
  
  return matches;
}

/**
 * Extract environment-related errors
 */
function extractEnvironmentErrors(content) {
  const envErrors = [];
  
  // Check for missing environment variables
  const missingEnvMatches = content.match(/process.env.([A-Z_]+) is (undefined|null)/g);
  if (missingEnvMatches) {
    missingEnvMatches.forEach(match => {
      const envVar = match.match(/process.env.([A-Z_]+)/)[1];
      envErrors.push(`Missing environment variable: ${envVar}`);
    });
  }
  
  // Check for errors mentioning API keys
  const apiKeyMatches = content.match(/(api|token|key|secret).*error/gi);
  if (apiKeyMatches) {
    apiKeyMatches.forEach(match => {
      envErrors.push(`Possible API authentication issue: ${match}`);
    });
  }
  
  return envErrors;
}

/**
 * Extract lingering processes information
 */
function extractLingeringProcesses(content) {
  const marker = 'Build completed successfully, but the following processes were still running:';
  if (!content.includes(marker)) return [];
  
  const lines = content.split('\n');
  const markerIndex = lines.findIndex(l => l.includes(marker));
  if (markerIndex === -1) return [];
  
  const processes = [];
  let i = markerIndex + 1;
  
  while (i < lines.length && lines[i].match(/\d+\s+\S+/)) {
    processes.push(lines[i].trim());
    i++;
  }
  
  return processes;
}

/**
 * Extract information about large operations
 */
function extractLargeOperations(content) {
  const largeOperations = [];
  
  // Look for time-consuming operations
  const timeMatches = content.match(/(\d+)s|\d+ seconds/g);
  if (timeMatches) {
    const lines = content.split('\n');
    timeMatches.forEach(timeMatch => {
      const line = lines.find(l => l.includes(timeMatch));
      if (line) {
        largeOperations.push(line.trim());
      }
    });
  }
  
  // Look for large image operations
  const imageMatches = content.match(/processing (\d+) images/i);
  if (imageMatches) {
    largeOperations.push(`Image processing: ${imageMatches[0]}`);
  }
  
  // Look for large dependency installations
  const dependencyMatches = content.match(/added (\d+) packages/i);
  if (dependencyMatches) {
    largeOperations.push(`Package installation: ${dependencyMatches[0]}`);
  }
  
  return largeOperations;
}

/**
 * Find the slowest build phase
 */
function findSlowestPhase(phases) {
  const phaseDurations = [
    { name: 'initialization', duration: phases.initializationDuration },
    { name: 'dependencyInstallation', duration: phases.dependencyInstallationDuration },
    { name: 'buildExecution', duration: phases.buildExecutionDuration },
    { name: 'postProcessing', duration: phases.postProcessingDuration }
  ].filter(p => p.duration);
  
  if (phaseDurations.length === 0) return null;
  
  return phaseDurations.reduce((slowest, current) => 
    current.duration > slowest.duration ? current : slowest
  );
}

/**
 * Identify build bottlenecks
 */
function identifyBottlenecks(content, buildInfo) {
  const bottlenecks = [];
  
  // Check for slow installations
  if (content.includes('Installing dependencies') && 
      content.includes('Building site') &&
      content.indexOf('Installing dependencies') < content.indexOf('Building site')) {
    const installSection = content.substring(
      content.indexOf('Installing dependencies'),
      content.indexOf('Building site')
    );
    
    if (installSection.includes('added ') && 
        installSection.length > 5000) {
      bottlenecks.push('Large dependency installation');
    }
  }
  
  // Check for slow image processing
  if (/processing (\d+) images/i.test(content)) {
    const match = content.match(/processing (\d+) images/i);
    const imageCount = parseInt(match[1]);
    
    if (imageCount > 100) {
      bottlenecks.push(`Large image processing job (${imageCount} images)`);
    }
  }
  
  // Check for slow framework builds
  if (buildInfo.frameworkDetected) {
    if (buildInfo.frameworkDetected.includes('gatsby') && content.includes('it took')) {
      bottlenecks.push('Slow Gatsby build');
    } else if (buildInfo.frameworkDetected.includes('next') && 
               /Generating static pages \(\d+\/\d+\)/.test(content)) {
      bottlenecks.push('Slow Next.js static site generation');
    }
  }
  
  // Check for multiple builds within one process
  if ((content.match(/Building site/g) || []).length > 1) {
    bottlenecks.push('Multiple build processes');
  }
  
  return bottlenecks;
}

module.exports = {
  parseNetlifyLog,
  parseLogContent
};
