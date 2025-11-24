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
    ],
  },
};

export default nextConfig;
