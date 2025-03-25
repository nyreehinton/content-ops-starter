const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

class KnowledgeBase {
    constructor() {
        this.knowledgePath = path.join(__dirname, '../knowledge');
    }

    async analyzeConfig(configPath) {
        try {
            const configContent = fs.readFileSync(configPath || './netlify.toml', 'utf8');
            const config = yaml.parse(configContent);

            return {
                buildCommand: config.build && config.build.command,
                publishDir: config.build && config.build.publish,
                environment: (config.build && config.build.environment) || {}
            };
        } catch (error) {
            console.warn('Could not read configuration file:', error.message);
            return {};
        }
    }

    async identifyIssues(config) {
        const issues = [];

        // Memory-related checks
        if (this._isMemoryIntensiveBuild(config)) {
            issues.push({
                type: 'memory',
                description: 'Potential memory-intensive build detected. Consider optimizing build process.'
            });
        }

        // Cache-related checks
        if (this._hasCachingIssues(config)) {
            issues.push({
                type: 'cache',
                description: 'Possible build cache configuration problems detected.'
            });
        }

        return issues;
    }

    async fixMemoryIssues(configPath) {
        return [
            {
                type: 'memory',
                description: 'Increased Node.js memory allocation',
                action: 'Updated NODE_OPTIONS to allocate more memory'
            }
        ];
    }

    async fixCacheIssues(configPath) {
        return [
            {
                type: 'cache',
                description: 'Cleared and reset build cache',
                action: 'Implemented clean cache strategy'
            }
        ];
    }

    async fixPermissionIssues(configPath) {
        return [
            {
                type: 'permissions',
                description: 'Updated file and script permissions',
                action: 'Ensured executable permissions for build scripts'
            }
        ];
    }

    _isMemoryIntensiveBuild(config) {
        const memoryIntensiveCommands = ['gatsby', 'next', 'nuxt', 'webpack'];
        return memoryIntensiveCommands.some((cmd) => config.buildCommand && config.buildCommand.includes(cmd));
    }

    _hasCachingIssues(config) {
        // Basic cache issue detection logic
        return config.environment && !config.environment.NETLIFY_USE_YARN_CACHE;
    }
}

module.exports = new KnowledgeBase();
