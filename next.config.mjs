const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./app/cloudflare-loader.js",
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "www.freecodecamp.org" },
      { protocol: "https", hostname: "reactjs.org" },
      { protocol: "https", hostname: "afeoolopdqmqjcvsgdxc.supabase.co" },
      { protocol: "https", hostname: "img.mergesociety.com" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    formats: ["image/avif", "image/webp"],
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
