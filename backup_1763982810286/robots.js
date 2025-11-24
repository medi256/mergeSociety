export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://www.mergesociety.com/sitemap.xml`,
  };
}
