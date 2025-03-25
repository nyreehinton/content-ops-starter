/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    typescript: {
        // Type checking enabled for production builds
        ignoreBuildErrors: false
    },
    eslint: {
        // We need to ignore during netlify builds to prevent issues
        ignoreDuringBuilds: true,
        // Specify directories to lint
        dirs: ['pages', 'components', 'src', 'utils']
    },
    // Ensure proper trailing slash handling for compatibility
    trailingSlash: false,
    // Add asset prefix if needed for CDN
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.yourdomain.com' : ''
};

module.exports = nextConfig;
