export function getImpact(status, weight) {
  if (status === "error") return "High";
  if (status === "improve") return "Medium";
  return "Low";
}
