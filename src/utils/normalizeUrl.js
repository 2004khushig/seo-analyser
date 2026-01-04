export function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.hash = "";
    u.search = "";
    let normalized = u.origin + u.pathname;
    return normalized.endsWith("/")
      ? normalized.slice(0, -1)
      : normalized;
  } catch {
    return null;
  }
}
