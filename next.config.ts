import path from "path";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "datum-ingenieria";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,

  env: {
  NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/datum-ingenieria" : "",
},


  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

export default nextConfig;
