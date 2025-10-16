const path = require('path');

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Temporarily disable custom loader for Netlify deployment
  // turbopack: {
  //   rules: {
  //     "*.{jsx,tsx}": {
  //       loaders: [LOADER]
  //     }
  //   }
  // },
  experimental: {
    // Disable optimizeCss to avoid lightningcss issues on Netlify
    optimizeCss: process.env.NODE_ENV === 'development',
  }
};

module.exports = nextConfig;
