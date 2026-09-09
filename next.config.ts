import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only serves qualities on this allowlist. Photos and UI
    // screenshots go soft at the default 75, so Media asks for 90.
    qualities: [75, 90],
  },
  turbopack: {
    // A stray package-lock.json in the parent directory makes Turbopack
    // guess the wrong workspace root; pin it to this project.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
