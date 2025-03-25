// lib/netlify-api.js
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');
const { NetlifyAPI } = require('netlify');
const Conf = require('conf');

// Store Netlify authentication and site information
const config = new Conf({
  projectName: 'netlify-build-fixer',
  schema: {
    authToken: {
      type: 'string'
    },
    sites: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          url: { type: 'string' }
        }
      },
      default: []
    }
  }
});

/**
 * Get authenticated Netlify client
 * 
 * @param {string} token - Optional auth token
 * @returns {Promise<Object>} Netlify client
 */
async function getNetlifyClient(token) {
  // Use provided token, stored token, or prompt for token
  const authToken = token || config.get('authToken');
  
  if (!authToken) {
    throw new Error('Netlify authentication token required. Use "netlify-fixer auth" to login.');
  }
  
  try {
    const client = new NetlifyAPI(authToken);
    await client.getSites(); // Test the token
    return client;
  } catch (error) {
    throw new Error(`Authentication failed: ${error.message}. Please run "netlify-fixer auth" to login again.`);
  }
}

/**
 * Store Netlify auth token
 * 
 * @param {string} token - Netlify auth token
 */
function storeAuthToken(token) {
  config.set('authToken', token);
}

/**
 * Clear stored auth information
 */
function clearAuthToken() {
  config.delete('authToken');
  config.set('sites', []);
}

/**
 * Get Netlify site information
 * 
 * @param {string} siteId - Netlify site ID or name
 * @returns {Promise<Object>} Site information
 */
async function getNetlifySiteInfo(siteId) {
  const client = await getNetlifyClient();
  
  try {
    // Try to get site by ID first
    const site = await client.getSite({ siteId });
    return site;
  } catch (error) {
    // If not found by ID, try to find by name
    console.log(chalk.yellow(`\nSite not found by ID, trying to find by name: ${siteId}`));
    
    try {
      const sites = await client.listSites();
      const matchingSite = sites.find(site => 
        site.name.toLowerCase() === siteId.toLowerCase() || 
        site.url.includes(siteId.toLowerCase())
      );
      
      if (matchingSite) {
        return matchingSite;
      }
      
      throw new Error(`Site not found: ${siteId}`);
    } catch (innerError) {
      throw new Error(`Error getting site information: ${innerError.message}`);
    }
  }
}

/**
 * List Netlify sites for the authenticated user
 * 
 * @returns {Promise<Array>} List of sites
 */
async function listNetlifySites() {
  const client = await getNetlifyClient();
  
  try {
    const sites = await client.listSites();
    
    // Store sites in config for quick access
    config.set('sites', sites.map(site => ({
      id: site.id,
      name: site.name,
      url: site.url
    })));
    
    return sites;
  } catch (error) {
    throw new Error(`Error listing sites: ${error.message}`);
  }
}

/**
 * Get Netlify site deploys
 * 
 * @param {string} siteId - Netlify site ID
 * @returns {Promise<Array>} List of deploys
 */
async function getNetlifySiteDeploys(siteId) {
  const client = await getNetlifyClient();
  
  try {
    const deploys = await client.listSiteDeploys({ siteId });
    return deploys;
  } catch (error) {
    throw new Error(`Error getting site deploys: ${error.message}`);
  }
}

/**
 * Get Netlify build log
 * 
 * @param {string} siteId - Netlify site ID
 * @param {string} deployId - Netlify deploy ID
 * @returns {Promise<string>} Build log content
 */
async function getNetlifyBuildLog(siteId, deployId) {
  const client = await getNetlifyClient();
  
  try {
    // Get deploy info to check status
    const deploy = await client.getSiteDeploy({ siteId, deployId });
    
    if (!deploy) {
      throw new Error(`Deploy not found: ${deployId}`);
    }
    
    // Get the build log
    const logUrl = `https://api.netlify.com/api/v1/sites/${siteId}/deploys/${deployId}/log`;
    const response = await axios.get(logUrl, {
      headers: {
        Authorization: `Bearer ${client.accessToken}`
      }
    });
    
    if (response.data) {
      // Save log to file for reference
      const logDir = path.join(process.cwd(), '.netlify-logs');
      await fs.mkdir(logDir, { recursive: true });
      
      const logFile = path.join(logDir, `${deployId}.log`);
      await fs.writeFile(logFile, response.data);
      
      console.log(chalk.gray(`\nBuild log saved to ${logFile}`));
      
      return response.data;
    }
    
    throw new Error('Build log is empty or unavailable');
  } catch (error) {
    throw new Error(`Error getting build log: ${error.message}`);
  }
}

/**
 * Get the most recent failing build log
 * 
 * @param {string} siteId - Netlify site ID
 * @returns {Promise<Object>} Build log information and content
 */
async function getMostRecentFailingBuild(siteId) {
  try {
    const deploys = await getNetlifySiteDeploys(siteId);
    
    // Find the most recent failing deploy
    const failingDeploy = deploys.find(deploy => deploy.state === 'error' || deploy.state === 'failed');
    
    if (!failingDeploy) {
      return {
        found: false,
        message: 'No failing builds found'
      };
    }
    
    // Get the build log
    const logContent = await getNetlifyBuildLog(siteId, failingDeploy.id);
    
    return {
      found: true,
      deploy: failingDeploy,
      logContent
    };
  } catch (error) {
    throw new Error(`Error finding failing build: ${error.message}`);
  }
}

/**
 * Get all Netlify environment variables for a site
 * 
 * @param {string} siteId - Netlify site ID
 * @returns {Promise<Array>} Environment variables
 */
async function getNetlifySiteEnvVars(siteId) {
  const client = await getNetlifyClient();
  
  try {
    const vars = await client.listSiteEnvVars({ siteId });
    return vars;
  } catch (error) {
    throw new Error(`Error getting environment variables: ${error.message}`);
  }
}

/**
 * Set Netlify environment variable
 * 
 * @param {string} siteId - Netlify site ID
 * @param {string} key - Environment variable key
 * @param {string} value - Environment variable value
 * @returns {Promise<Object>} Result
 */
async function setNetlifySiteEnvVar(siteId, key, value) {
  const client = await getNetlifyClient();
  
  try {
    const result = await client.createSiteEnvVar({
      siteId,
      key,
      value
    });
    
    return result;
  } catch (error) {
    throw new Error(`Error setting environment variable: ${error.message}`);
  }
}

module.exports = {
  getNetlifyClient,
  storeAuthToken,
  clearAuthToken,
  getNetlifySiteInfo,
  listNetlifySites,
  getNetlifySiteDeploys,
  getNetlifyBuildLog,
  getMostRecentFailingBuild,
  getNetlifySiteEnvVars,
  setNetlifySiteEnvVar
};
