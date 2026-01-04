import { parseHtml } from "./parseHtml.js";
import { runRules } from "./runRules.js";
import { calculateScore } from "./score.js";

export function analyzeSite(pages) {
  return pages.map(page => {
    const data = parseHtml(page.html);
    const rules = runRules(data);
    const score = calculateScore(rules);

    return {
      url: page.finalUrl || page.url,
      score,
      rules
    };
  });
}
