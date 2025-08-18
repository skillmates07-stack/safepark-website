/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/pricing',
        destination: '/sizes',
      },
    ];
  },
  // Remove any experimental optimizeCss option
}

module.exports = nextConfig;
