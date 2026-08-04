export default function cloudflareLoader({ src, width, quality }) {
  const q = quality || 75;

  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return src;
  }

  if (src.startsWith("/_next/")) {
    return src;
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // Use img subdomain with Cloudflare transform
  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
  return `https://img.mergesociety.com/cdn-cgi/image/width=${width},quality=${q},format=auto/${cleanSrc}`;
}
