/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'res.cloudinary.com',
        port:''
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'www.elperuano.pe',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
