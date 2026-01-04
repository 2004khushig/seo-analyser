export function siteAggregates(pages) {
  if (!pages.length) {
    return {
      avgScore: 0,
      totalPages: 0,
      passed: 0,
      improve: 0,
      errors: 0
    };
  }

  let totalScore = 0;
  let passed = 0;
  let improve = 0;
  let errors = 0;

  pages.forEach(page => {
    totalScore += page.score;

    page.rules.forEach(rule => {
      if (rule.status === "pass") passed++;
      else if (rule.status === "improve") improve++;
      else if (rule.status === "error") errors++;
    });
  });

  return {
    avgScore: Math.round(totalScore / pages.length),
    totalPages: pages.length,
    passed,
    improve,
    errors
  };
}
