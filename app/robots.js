export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/privacy/",
    },
    sitemap: `${process.env.NEXT_PUBLIC__MERGESOCIETY_URL}/sitemap.xml`,
  };
}
