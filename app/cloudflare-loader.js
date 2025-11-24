// app/cloudflare-loader.js
export default function cloudflareLoader({ src, width, quality }) {
  const q = quality || 75;

  // CRITICAL: In development (localhost), return original image
  if (process.env.NODE_ENV === "development") {
    // For Supabase images, return full URL
    if (!src.startsWith("http")) {
      return `https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public${src}`;
    }
    return src;
  }

  // PRODUCTION ONLY: Use Cloudflare optimization
  // If it's a Next.js internal file, don't use proxy
  if (src.startsWith("/_next/")) {
    return `/cdn-cgi/image/width=${width},quality=${q},format=auto${src}`;
  }

  // For Supabase images, use the proxy
  const path = src.startsWith("/") ? src : `/${src}`;
  return `/cdn-cgi/image/width=${width},quality=${q},format=auto/proxy${path}`;
}
