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
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `https://img.mergesociety.com/cdn-cgi/image/width=${width},quality=${q}/${cleanSrc}`;
}
```

**Key change:** Put `/cdn-cgi/image/` on `img.mergesociety.com` itself, not nesting another full URL inside it.

So instead of:
```
www.mergesociety.com/cdn-cgi/image/.../https://img.mergesociety.com/file.jpg
```

Use:
```
img.mergesociety.com/cdn-cgi/image/.../file.jpg