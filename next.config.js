const withYaml = require("next-plugin-yaml")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.roblox.com",
      },
      {
        protocol: "https",
        hostname: "**.rbxcdn.com",
      },
    ],
  },
}

module.exports = withYaml(nextConfig)
