import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "culinaryodissey.uprock.pro",
      },
    ],
  },
};

export default nextConfig;
