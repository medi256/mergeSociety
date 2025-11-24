export default function cloudflareLoader({ src, width, quality }) {
  const q = quality || 75;

  // Development mode: do NOT use Cloudflare (it breaks on localhost)
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return src; // Just return the original path
  }

  // Handle Next.js internal files normally
  if (src.startsWith("/_next/")) {
    return `/cdn-cgi/image/width=${width},quality=${q},format=auto${src}`;
  }

  // Supabase images through proxy
  const path = src.startsWith("/") ? src : `/${src}`;

  return `/cdn-cgi/image/width=${width},quality=${q},format=auto/proxy${path}`;
}
