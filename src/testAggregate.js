import { crawlSite } from "./crawler/crawlSite.js";
import { analyzeSite } from "./analyser/analyzeSite.js";
import { siteAggregates } from "./analyser/siteAggregates.js";

async function test() {
  const pages = await crawlSite(
    "https://en.wikipedia.org/wiki/Main_Page",
    5
  );

  const analyzedPages = analyzeSite(pages);
  const summary = siteAggregates(analyzedPages);

  console.log("SITE SUMMARY 👇");
  console.log(summary);
}

test();
