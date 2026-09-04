/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
