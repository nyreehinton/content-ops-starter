/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This replaces `next export`
    trailingSlash: true, // Ensures proper static routing
    images: {
      unoptimized: true // Required for static export if using Next.js images
    }
  };
  
  module.exports = nextConfig;