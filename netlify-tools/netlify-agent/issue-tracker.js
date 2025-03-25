#!/usr/bin/env node

/**
 * Netlify Issue Tracker
 *
 * This script logs and analyzes site issues reported by users.
 * It creates a simple action plan for addressing common Netlify site problems.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Configuration
const CONFIG = {
    issueLogFile: 'netlify-issues.log',
    actionPlanFile: 'action-plan.md',
    priorityLevels: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']
};

// Parse issue description and determine priority
function parseIssue(description) {
    // Default values
    let priority = 'MEDIUM';
    let category = 'GENERAL';
    let estimatedTime = '1-2 hours';

    // Determine priority based on keywords
    const urgentKeywords = ['urgent', 'asap', 'emergency', 'critical', 'immediately'];
    const hasUrgentKeywords = urgentKeywords.some((keyword) => description.toLowerCase().includes(keyword));

    if (hasUrgentKeywords) {
        priority = 'HIGH';
    }

    // If explicitly mentions wrong or broken, mark as HIGH
    if (description.toLowerCase().includes('wrong') || description.toLowerCase().includes('broken')) {
        priority = 'HIGH';
    }

    // Categorize the issue
    if (description.toLowerCase().includes('landing') || description.toLowerCase().includes('home page')) {
        category = 'LANDING_PAGE';
        // Landing page issues are often high visibility
        if (priority !== 'CRITICAL') priority = 'HIGH';
    } else if (description.toLowerCase().includes('build') || description.toLowerCase().includes('deploy')) {
        category = 'BUILD_PROCESS';
    } else if (description.toLowerCase().includes('form') || description.toLowerCase().includes('submit') || description.toLowerCase().includes('contact')) {
        category = 'FORMS';
    } else if (description.toLowerCase().includes('image') || description.toLowerCase().includes('asset') || description.toLowerCase().includes('media')) {
        category = 'ASSETS';
    }

    // Estimate resolution time based on category and priority
    if (priority === 'CRITICAL') {
        estimatedTime = 'ASAP (< 1 hour)';
    } else if (priority === 'HIGH') {
        estimatedTime = '2-3 hours';
    } else if (category === 'BUILD_PROCESS') {
        estimatedTime = '3-4 hours';
    }

    return {
        description,
        priority,
        category,
        estimatedTime,
        timestamp: new Date().toISOString(),
        id: `ISSUE-${Date.now()}`
    };
}

// Generate an action plan for the issue
function generateActionPlan(issue) {
    let steps = [];

    // Common first step for all issues
    steps.push('1. Verify the problem by reproducing it in different browsers and devices');

    // Steps based on category
    switch (issue.category) {
        case 'LANDING_PAGE':
            steps.push('2. Check for recent deployments that might have affected the landing page');
            steps.push('3. Review landing page code and content changes in the latest commit');
            steps.push('4. Verify CSS and responsive design on different screen sizes');
            steps.push('5. Check for JavaScript errors in the console');
            steps.push('6. Create a rollback point or hotfix branch from the last known good state');
            break;

        case 'BUILD_PROCESS':
            steps.push('2. Check Netlify build logs for errors or warnings');
            steps.push('3. Verify build command in netlify.toml');
            steps.push('4. Check for dependency issues or version conflicts');
            steps.push('5. Test build process locally to isolate the issue');
            break;

        case 'FORMS':
            steps.push('2. Verify form submission settings in Netlify dashboard');
            steps.push('3. Check for JavaScript validation errors');
            steps.push('4. Verify reCAPTCHA configuration if applicable');
            steps.push('5. Test form submissions with test data');
            break;

        case 'ASSETS':
            steps.push('2. Check asset paths and references in code');
            steps.push('3. Verify CDN configuration and caching settings');
            steps.push('4. Check for asset optimization issues');
            steps.push('5. Test asset loading with browser dev tools');
            break;

        default: // GENERAL
            steps.push('2. Check recent deployments and changes');
            steps.push('3. Review Netlify build logs for errors');
            steps.push('4. Inspect the page in browser dev tools');
            steps.push('5. Test site functionality in different browsers');
    }

    // Additional steps for high priority issues
    if (issue.priority === 'HIGH' || issue.priority === 'CRITICAL') {
        steps.push('- Consider immediate rollback to last known good version');
        steps.push('- Notify stakeholders of the issue and estimated resolution time');
    }

    return steps;
}

// Log the issue to the issues log
function logIssue(issue) {
    const logEntry = `[${issue.timestamp}] [${issue.priority}] [${issue.category}] ${issue.id}: ${issue.description}\n`;

    fs.appendFileSync(CONFIG.issueLogFile, logEntry);

    // Create action plan file
    const actionPlan = generateActionPlan(issue);

    const actionPlanContent = `# Action Plan for Issue ${issue.id}

## Issue Details
- **Description:** ${issue.description}
- **Priority:** ${issue.priority}
- **Category:** ${issue.category}
- **Reported:** ${issue.timestamp}
- **Estimated Resolution Time:** ${issue.estimatedTime}

## Recommended Steps
${actionPlan.join('\n')}

## Resolution Status
- [ ] Issue verified
- [ ] Action plan implemented
- [ ] Issue resolved
- [ ] Verified by stakeholder

## Notes
_Add resolution notes here_

`;

    fs.writeFileSync(CONFIG.actionPlanFile, actionPlanContent);

    return {
        logEntry,
        actionPlanPath: CONFIG.actionPlanFile
    };
}

// Main function
function processIssue(description) {
    console.log(`\n=== Processing Issue ===\n`);
    console.log(`Issue reported: "${description}"`);

    // Parse and categorize the issue
    const issue = parseIssue(description);

    console.log(`\nIssue Analysis:`);
    console.log(`- Priority: ${issue.priority}`);
    console.log(`- Category: ${issue.category}`);
    console.log(`- Issue ID: ${issue.id}`);
    console.log(`- Estimated Resolution Time: ${issue.estimatedTime}`);

    // Log the issue
    const result = logIssue(issue);

    console.log(`\nIssue logged to: ${CONFIG.issueLogFile}`);
    console.log(`Action plan created: ${result.actionPlanPath}`);

    console.log(`\n=== Next Steps ===`);
    console.log(`1. Review the action plan in ${result.actionPlanPath}`);
    console.log(`2. Implement the suggested fixes`);
    console.log(`3. Update the action plan with resolution status`);

    return issue;
}

// If run directly from command line
if (require.main === module) {
    // Get issue description from command line arguments
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage: node issue-tracker.js "description of the issue"');
        process.exit(1);
    }

    const description = args.join(' ');
    processIssue(description);
} else {
    // Export for use as a module
    module.exports = {
        processIssue,
        parseIssue,
        generateActionPlan
    };
}
