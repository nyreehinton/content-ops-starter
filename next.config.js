/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Keep strict mode enabled
    images: {
      unoptimized: true // Prevents image optimization issues
    }
  };
  
  module.exports = nextConfig;