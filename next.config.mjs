/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "dist",
  images: {
    domains: ["res.cloudinary.com", "www.freecodecamp.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
