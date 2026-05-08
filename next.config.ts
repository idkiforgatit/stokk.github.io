import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/stokk.html",
      },
    ];
  },
};

export default nextConfig;
