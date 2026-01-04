export function generateRecommendations(issues) {
  const recommendations = [];

  ["High", "Medium"].forEach(severity => {
    issues[severity].forEach(issue => {
      recommendations.push({
        id: issue.id,
        severity,
        title: issue.title,
        fix: issue.fix,
        affectedPages: issue.pages.length
      });
    });
  });

  return recommendations;
}
