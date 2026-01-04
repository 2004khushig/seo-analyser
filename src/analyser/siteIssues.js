export function aggregateIssues(analyzedPages) {
  const issuesMap = {};

  analyzedPages.forEach(page => {
    page.recommendations.forEach(rec => {
      const key = rec.id; // ✅ ONLY rule id

      if (!issuesMap[key]) {
        issuesMap[key] = {
          id: rec.id,
          title: rec.title,
          impact: rec.impact,
          issue: rec.issue,
          fix: rec.fix,
          pages: new Set()
        };
      }

      // add page once
      issuesMap[key].pages.add(page.url);
    });
  });

  // convert Set → Array and add count
  const allIssues = Object.values(issuesMap).map(issue => ({
    ...issue,
    pages: Array.from(issue.pages),
    count: issue.pages.size
  }));

  return {
    High: allIssues.filter(i => i.impact === "High"),
    Medium: allIssues.filter(i => i.impact === "Medium")
  };
}
