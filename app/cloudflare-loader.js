// export default function cloudflareLoader({ src, width, quality }) {
//   const q = quality || 75;

//   // 1. Development mode (localhost) → return original image
//   if (
//     typeof window !== "undefined" &&
//     window.location.hostname === "localhost"
//   ) {
//     return src;
//   }

//   // 2. Allow Next.js internal assets (logo, icons)
//   if (src.startsWith("/_next/")) {
//     return `/cdn-cgi/image/width=${width},quality=${q},format=auto${src}`;
//   }

//   // 3. Use your Cloudflare Worker domain for Supabase images
//   const path = src.startsWith("/") ? src : `/${src}`;

//   return `/cdn-cgi/image/width=${width},quality=${q}/https://img.mergesociety.com${path}`;
// }

// export default function cloudflareLoader({ src, width, quality }) {
//   const q = quality || 75;

//   // Localhost = no transforms
//   if (
//     typeof window !== "undefined" &&
//     window.location.hostname === "localhost"
//   ) {
//     return src;
//   }

//   // Internal Next.js assets
//   if (src.startsWith("/_next/")) {
//     return src;
//   }

//   // EXTERNAL IMAGES → DO NOT USE CLOUDFLARE (they block it)
//   if (src.startsWith("http://") || src.startsWith("https://")) {
//     return src; // Return original URL — no transforms
//   }

//   // Supabase / your bucket images → use Cloudflare
//   return `/cdn-cgi/image/width=${width},quality=${q}/https://img.mergesociety.com${src}`;
// }

export default function cloudflareLoader({ src, width, quality }) {
  const q = quality || 75;

  // Localhost = no transforms
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return src;
  }

  // Internal Next.js assets
  if (src.startsWith("/_next/")) {
    return src;
  }

  // EXTERNAL IMAGES → DO NOT USE CLOUDFLARE (they block it)
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src; // Return original URL — no transforms
  }

  // Supabase / your bucket images → use Cloudflare
  // Remove leading slash from src if it exists
  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
  return `/cdn-cgi/image/width=${width},quality=${q}/https://img.mergesociety.com/${cleanSrc}`;
}
