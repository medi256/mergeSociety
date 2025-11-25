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

export default function cloudflareLoader({ src, width, quality }) {
  const q = quality || 75;

  // 1. Development mode: do not use Cloudflare
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return src;
  }

  // 2. Allow Next.js internal assets
  if (src.startsWith("/_next/")) {
    return `/cdn-cgi/image/width=${width},quality=${q}${src}`;
  }

  // 3. If image is EXTERNAL, DO NOT rewrite
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return `/cdn-cgi/image/width=${width},quality=${q}/${src}`;
  }

  // 4. For Supabase bucket images via img.mergesociety.com
  return `/cdn-cgi/image/width=${width},quality=${q}/https://img.mergesociety.com${src}`;
}
