export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://mergesociety.com/sitemap.xml`,
  };
}
