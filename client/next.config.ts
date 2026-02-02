import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["s3.amazonaws.com"], 
  },
  async rewrites() {
    return [
      {
        source: "/signin",
        destination: "/",
      },
      {
        source: "/signup",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;