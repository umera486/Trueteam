import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // This allows any path from the Unsplash domain
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;