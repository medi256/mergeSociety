export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/privacy/",
    },
    sitemap: `https://www.mergesociety.com/sitemap.xml`,
  };
}
