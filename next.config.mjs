/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./app/cloudflare-loader.js",

    domains: [
      "res.cloudinary.com",
      "www.freecodecamp.org",
      "reactjs.org",
      "afeoolopdqmqjcvsgdxc.supabase.co",
      "img.mergesociety.com",
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
