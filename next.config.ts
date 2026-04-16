import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const repo = 'your-repo-name'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
}

export default nextConfig;
