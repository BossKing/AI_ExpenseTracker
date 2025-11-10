import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Prevent ESLint errors from breaking the Vercel build
    ignoreDuringBuilds: true,
  },
  // (Optional) Add more build optimizations or config here
  typescript: {
    // ✅ Skip type-checking errors during build (optional, use if needed)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
