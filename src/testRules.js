import { fetchPage } from "./crawler/fetchpage.js";
import { parseHtml } from "./analyser/parseHtml.js";
import { runRules } from "./analyser/runRules.js";
import { calculateScore } from "./analyser/score.js";

async function test() {
  const page = await fetchPage("https://drinkbakesale.com/?srsltid=AfmBOopr8KJ8gDTKxEOzPaxO-feUDKoMqRqZIvTpWpSJGid3mhDgy3ba");
  const seoData = parseHtml(page.html);

  console.log("SEO DATA 👇");
  console.log(seoData);

  const rules = runRules(seoData);

  console.log("\nRULE RESULTS 👇");
  console.table(rules);

  const score = calculateScore(rules);

  console.log(`\nSEO SCORE ✅ ${score}/100`);
}

test();
