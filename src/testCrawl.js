// src/testCrawl.js
import { crawlSite } from "./crawler/crawlSite.js";

async function test() {
  const pages = await crawlSite("https://en.wikipedia.org/wiki/Main_Page", 5);

  console.log("CRAWLED PAGES:");
  pages.forEach(p => console.log(p.finalUrl || p.url));
}

test();
