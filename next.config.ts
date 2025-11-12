// next.config.ts
import path from "path";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "datum-ingenieria"; // <-- nombre exacto del repo

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

export default nextConfig;
