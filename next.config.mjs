import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "www.freecodecamp.org", "reactjs.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default pwaConfig(nextConfig);
