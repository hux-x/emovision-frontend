import { output } from "framer-motion/client"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api-emv.devbuns.com/:path*',
      },
    ]
  },
  output: 'export',
}
module.exports = nextConfig