/**
 * Netlify Build Fixer
 * AI-powered tool for diagnosing and fixing Netlify build issues
 */

const { analyzeLog, suggestFixes } = require('./lib/analyzers');
const { applyFixes } = require('./lib/fixers');
const { parseNetlifyLog } = require('./lib/log-parser');
const { getNetlifySiteInfo, getNetlifyBuildLog } = require('./lib/netlify-api');
const knowledgeBase = require('./lib/knowledge-base');
const pluginManager = require('./lib/plugin-manager');

// Export public API
module.exports = {
    // Core functionality
    analyze: analyzeLog,
    fix: applyFixes,
    suggest: suggestFixes,

    // Utilities
    parseLog: parseNetlifyLog,

    // API utilities
    netlify: {
        getSiteInfo: getNetlifySiteInfo,
        getBuildLog: getNetlifyBuildLog
    },

    // Knowledge and plugins
    knowledge: knowledgeBase,
    plugins: pluginManager
};
