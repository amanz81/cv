import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Fully static site — served as plain files (no server runtime), avoids Netlify runtime 500s on .svg/.xml.
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;