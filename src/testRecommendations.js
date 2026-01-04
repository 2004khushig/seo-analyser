import { fetchPage } from "./crawler/fetchPage.js";
import { parseHtml } from "./analyser/parseHtml.js";
import { runRules } from "./analyser/runRules.js";
import { generateRecommendations } from "./analyser/recommendation.js";

async function test() {
  const page = await fetchPage("https://example.com");
  const data = parseHtml(page.html);
  const rules = runRules(data);

  const recommendations = generateRecommendations(rules);

  console.log("RECOMMENDATIONS 👇");
  console.table(recommendations);
}

test();
