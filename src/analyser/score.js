export function calculateScore(rules) {
  let earned = 0;
  let total = 0;

  for (const rule of rules) {
    total += rule.weight;

    if (rule.status === "pass") {
      earned += rule.weight;
    } else if (rule.status === "improve") {
      earned += rule.weight * 0.5; // partial credit
    }
  }

  return total > 0 ? Math.round((earned / total) * 100) : 0;
}
