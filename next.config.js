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
        // Linting enabled for production builds
        ignoreDuringBuilds: false,
        // Specify directories to lint
        dirs: ['pages', 'components', 'src', 'utils']
    }
};

module.exports = nextConfig;
