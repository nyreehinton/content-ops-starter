#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const logSymbols = require('log-symbols');
const { analyzeLog, suggestFixes } = require('../lib/analyzers');
const { applyFixes } = require('../lib/fixers');
const { parseNetlifyLog } = require('../lib/log-parser');
const { getNetlifySiteInfo, getNetlifyBuildLog } = require('../lib/netlify-api');
const knowledgeBase = require('../lib/knowledge-base');
const { version } = require('../package.json');
const axios = require('axios');

// Configure CLI
program.name('netlify-fixer').description('AI-powered tool for diagnosing and fixing Netlify build issues').version(version);

// Analyze command
program
    .command('analyze')
    .description('Analyze Netlify build logs for issues')
    .option('-l, --log-file <path>', 'Path to local Netlify build log file')
    .option('-s, --site-id <id>', 'Netlify site ID')
    .option('-d, --deploy-id <id>', 'Netlify deploy ID')
    .action(async (options) => {
        const spinner = ora('Analyzing Netlify build logs').start();

        try {
            let logContent;

            // Get log content either from file or Netlify API
            if (options.logFile) {
                logContent = await parseNetlifyLog(options.logFile);
            } else if (options.siteId && options.deployId) {
                logContent = await getNetlifyBuildLog(options.siteId, options.deployId);
            } else {
                // Interactive mode - prompt for required information
                spinner.stop();
                const answers = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'logSource',
                        message: 'Where would you like to get the build logs from?',
                        choices: [
                            { name: 'Local log file', value: 'file' },
                            { name: 'Netlify API (requires authentication)', value: 'api' }
                        ]
                    },
                    {
                        type: 'input',
                        name: 'logFile',
                        message: 'Enter the path to your Netlify build log file:',
                        when: (answers) => answers.logSource === 'file',
                        validate: (input) => input.length > 0 || 'Please enter a valid file path'
                    },
                    {
                        type: 'input',
                        name: 'siteId',
                        message: 'Enter your Netlify site ID:',
                        when: (answers) => answers.logSource === 'api',
                        validate: (input) => input.length > 0 || 'Please enter a valid site ID'
                    },
                    {
                        type: 'input',
                        name: 'deployId',
                        message: 'Enter the deploy ID to analyze:',
                        when: (answers) => answers.logSource === 'api',
                        validate: (input) => input.length > 0 || 'Please enter a valid deploy ID'
                    }
                ]);

                spinner.start();

                if (answers.logSource === 'file') {
                    logContent = await parseNetlifyLog(answers.logFile);
                } else {
                    logContent = await getNetlifyBuildLog(answers.siteId, answers.deployId);
                }
            }

            // Analyze the log content
            const issues = await analyzeLog(logContent);

            spinner.succeed('Analysis complete!');

            // Display results
            if (issues.length === 0) {
                console.log(chalk.green('\nNo common issues detected in the build logs.'));
                console.log("If you're still experiencing problems, try running with the --verbose flag for more detailed analysis.");
            } else {
                console.log(chalk.yellow(`\n${issues.length} potential issues detected:`));

                issues.forEach((issue, index) => {
                    console.log(`\n${chalk.bold(`Issue #${index + 1}: ${issue.title}`)}`);
                    console.log(`${chalk.gray('Type:')} ${issue.type}`);
                    console.log(`${chalk.gray('Confidence:')} ${issue.confidence}%`);
                    console.log(`${chalk.gray('Description:')} ${issue.description}`);

                    if (issue.logExcerpt) {
                        console.log(`\n${chalk.gray('Relevant log excerpt:')}`);
                        console.log(chalk.cyan(`\n${issue.logExcerpt}\n`));
                    }

                    console.log(chalk.gray('Suggested fixes:'));
                    issue.suggestions.forEach((suggestion, i) => {
                        console.log(`  ${logSymbols.info} ${suggestion}`);
                    });
                });

                // Offer to fix issues
                const { shouldFix } = await inquirer.prompt({
                    type: 'confirm',
                    name: 'shouldFix',
                    message: 'Would you like to apply fixes for these issues?',
                    default: false
                });

                if (shouldFix) {
                    console.log('\nApplying fixes...');
                    await applyFixes(issues);
                }
            }
        } catch (error) {
            spinner.fail('Analysis failed');
            console.error(chalk.red(`\nError: ${error.message}`));
            process.exit(1);
        }
    });

// Fix command
program
    .command('fix')
    .description('Fix specific Netlify build issues')
    .option('--type <type>', 'Type of build issue to fix')
    .option('-c, --config-file <path>', 'Path to project configuration file (netlify.toml)')
    .action(async (options) => {
        const spinner = ora('Preparing fix...').start();

        try {
            const fixes = {
                memory: knowledgeBase.fixMemoryIssues,
                cache: knowledgeBase.fixCacheIssues,
                permissions: knowledgeBase.fixPermissionIssues
            };

            if (!options.type || !fixes[options.type]) {
                spinner.warn(chalk.yellow('No specific fix type provided. Use --help for guidance.'));
                return;
            }

            spinner.text = `Applying ${options.type} fixes...`;
            const fixResults = await fixes[options.type](options.configFile);

            spinner.succeed(chalk.green(`Successfully applied ${options.type} fixes`));

            console.log('\nApplied fixes:');
            fixResults.forEach((result) => {
                console.log(`${logSymbols.success} ${result.description}`);
            });
        } catch (error) {
            spinner.fail(chalk.red(`Fix failed: ${error.message}`));
        }
    });

// Guide command
program
    .command('guide')
    .description('Get guidance on specific Netlify build issues')
    .option('-i, --issue <type>', 'Type of issue to get guidance for')
    .action(async (options) => {
        try {
            if (!options.issue) {
                // Interactive mode
                const { issueType } = await inquirer.prompt({
                    type: 'list',
                    name: 'issueType',
                    message: 'What type of issue are you experiencing?',
                    choices: [
                        { name: 'Build fails with errors', value: 'build-error' },
                        { name: 'Build appears stuck or hung', value: 'lingering-processes' },
                        { name: 'Memory-related errors', value: 'memory-issues' },
                        { name: 'Case sensitivity issues', value: 'case-sensitivity' },
                        { name: 'Permission errors', value: 'permission-errors' },
                        { name: 'Build cache issues', value: 'build-cache' },
                        { name: 'Slow builds', value: 'performance' },
                        { name: 'Other/Not sure', value: 'general' }
                    ]
                });

                options.issue = issueType;
            }

            const spinner = ora('Loading guidance...').start();
            const guidance = await knowledgeBase.getGuidance(options.issue);
            spinner.succeed('Guidance loaded');

            knowledgeBase.displayGuidance(guidance);
        } catch (error) {
            console.error(chalk.red(`\nError: ${error.message}`));
            process.exit(1);
        }
    });

// Interactive mode (default)
program
    .command('interactive', { isDefault: true })
    .description('Start interactive troubleshooting session')
    .action(async () => {
        console.log(chalk.bold.green('\nNetlify Build Debugging and Fixing Tool\n'));
        console.log('This interactive tool will help you identify and fix common Netlify build issues.\n');

        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                { name: 'Analyze a build log for issues', value: 'analyze' },
                { name: 'Apply known fixes for common issues', value: 'fix' },
                { name: 'Get guidance on a specific issue', value: 'guide' },
                { name: 'Configure tool settings', value: 'config' }
            ]
        });

        if (action === 'analyze') {
            program.commands.find((cmd) => cmd.name() === 'analyze').action();
        } else if (action === 'fix') {
            program.commands.find((cmd) => cmd.name() === 'fix').action();
        } else if (action === 'guide') {
            program.commands.find((cmd) => cmd.name() === 'guide').action();
        } else if (action === 'config') {
            // Configuration logic
            console.log(chalk.yellow('Configuration features coming soon!'));
        }
    });

program.parse(process.argv);
