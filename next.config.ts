import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ytimg.com"],
  },
};

export default nextConfig;
