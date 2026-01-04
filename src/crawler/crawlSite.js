export async function crawlSite(startUrl, limit = 5) {
  const visited = new Set();
  const pages = [];

  async function crawl(url) {
    if (visited.has(url) || pages.length >= limit) return;
    visited.add(url);

    try {
      const res = await fetch(url);
      const html = await res.text();

      pages.push({
        url,          // ✅ REQUIRED
        html          // ✅ REQUIRED
      });

      // optional: extract internal links here
    } catch (err) {
      console.error("❌ Crawl failed:", url);
    }
  }

  await crawl(startUrl);
  return pages;
}
