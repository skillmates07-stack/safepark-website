/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'images.unsplash.com']
  },
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
