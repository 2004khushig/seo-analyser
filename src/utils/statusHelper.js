export function getStatus(passed, severity = "error") {
  if (passed) return "pass";
  if (severity === "warning") return "improve";
  return "error";
}
