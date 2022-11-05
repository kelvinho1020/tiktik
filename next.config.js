/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: ['pbs.twimg.com', 'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
