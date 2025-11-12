import path from "path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

export default nextConfig;
