const withYaml = require("next-plugin-yaml")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.roblox.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "roblox.com",
    //   },
    // ],
  },
}

module.exports = withYaml(nextConfig)
