import express from "express";
import cors from "cors";

import { crawlSite } from "./crawler/crawlSite.js";
import { analyzeSite } from "./analyser/analyzeSite.js";
import { aggregateIssues } from "./analyser/aggregateIssues.js";
import { siteAggregates } from "./analyser/siteAggregates.js";
import { generateRecommendations } from "./analyser/recommendation.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze/site", async (req, res) => {
  try {
    const { url } = req.body;
    console.log("📥 Incoming analyze request for:", url);

    const crawledPages = await crawlSite(url);
    const analyzedPages = analyzeSite(crawledPages);

    const issues = aggregateIssues(analyzedPages);
    const summary = siteAggregates(analyzedPages);
    const recommendations = generateRecommendations(issues);

    const response = {
      summary,
      pages: analyzedPages.map(p => ({
        url: p.url,
        score: p.score
      })),
      issues,
      recommendations
    };

    console.log("🧮 Final response ready");
    console.log("🚨 Issues:", {
      High: issues.High.length,
      Medium: issues.Medium.length,
      Low: issues.Low.length
    });
    console.log("💡 Recommendations:", recommendations.length);

    res.json(response);
  } catch (err) {
    console.error("❌ Analysis failed:", err);
    res.status(500).json({ error: "Analysis failed" });
  }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 SEO Analyzer server running on port ${PORT}`);
});
