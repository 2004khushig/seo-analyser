export function aggregateIssues(pages) {
  const grouped = {
    High: {},
    Medium: {},
    Low: {}
  };

  pages.forEach(page => {
    page.rules.forEach(rule => {
      if (rule.status === "pass") return;

      const severity =
        rule.status === "error" ? "High" : "Medium";

      if (!grouped[severity][rule.id]) {
        grouped[severity][rule.id] = {
          id: rule.id,
          title: rule.message,
          fix: rule.fix,
          pages: []
        };
      }

      grouped[severity][rule.id].pages.push(page.url);
    });
  });

  return {
    High: Object.values(grouped.High),
    Medium: Object.values(grouped.Medium),
    Low: Object.values(grouped.Low)
  };
}
