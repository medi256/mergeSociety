export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/privacy/",
    },
    sitemap: `https://mergesociety.com/sitemap.xml`,
  };
}
