/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "www.freecodecamp.org"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line
  },
};

export default nextConfig;
