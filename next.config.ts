import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence the lockfile warning
  turbopack: {
    root: process.cwd(),
  },
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
