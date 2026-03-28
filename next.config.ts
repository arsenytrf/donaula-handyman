import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/donaula-handyman",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
