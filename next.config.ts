import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
