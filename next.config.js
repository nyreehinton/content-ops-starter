/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

// Simple config without bundle analyzer
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.ctfassets.net', 'nyreehinton.com', 'nyreehinton.netlify.app']
    },
    // No environment variables that could affect routing
    // No asset prefix to avoid CDN issues
    assetPrefix: '',
    // Make sure static assets load correctly
    staticPageGenerationTimeout: 180,
    // Production optimizations
    compiler: {
        removeConsole:
            process.env.NODE_ENV === 'production'
                ? {
                      exclude: ['error', 'warn']
                  }
                : false
    }
};

module.exports = nextConfig;
