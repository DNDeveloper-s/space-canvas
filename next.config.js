/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1kjns6e6wnqfd.cloudfront.net',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'play.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
