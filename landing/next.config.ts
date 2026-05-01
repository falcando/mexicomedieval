import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "brill.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.bloomsbury.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
