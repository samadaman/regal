/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Ensure compatibility with Vercel's deployment for Next.js 15
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Force generation of routes manifest
  output: 'standalone',
  // Additional settings for Vercel
  trailingSlash: false,
  images: {
    unoptimized: false,
  },
};

export default nextConfig; </parameter,
