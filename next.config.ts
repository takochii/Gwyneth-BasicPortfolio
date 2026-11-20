import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  devIndicators: {
    position: "bottom-right",
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      ".svg": {
        loaders: ["@svgr/webpack"],
        as: "*.svg",
      },
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
