export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/privacy/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_MERGESOCIETY_URL}/sitemap.xml`,
  };
}
