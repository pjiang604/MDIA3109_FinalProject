/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co'],
  },
  transpilePackages: ['@mui/x-charts']
};

module.exports = nextConfig
