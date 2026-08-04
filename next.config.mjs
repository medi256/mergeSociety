// const nextConfig = {
//   images: {
//     loader: "custom",
//     loaderFile: "./app/cloudflare-loader.js",

//     domains: [
//       "res.cloudinary.com",
//       "www.freecodecamp.org",
//       "reactjs.org",
//       "afeoolopdqmqjcvsgdxc.supabase.co",
//       "img.mergesociety.com",
//     ],
//     formats: ["image/webp", "image/avif"],
//   },
// };

// export default nextConfig;

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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
