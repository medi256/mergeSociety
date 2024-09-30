/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist", // Explicitly set output directory
  images: {
    domains: ["res.cloudinary.com", "www.freecodecamp.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
