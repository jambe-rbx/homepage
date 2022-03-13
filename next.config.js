const withYaml = require("next-plugin-yaml")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "roblox.com", "www.roblox.com"],
  },
}

module.exports = withYaml(nextConfig)
