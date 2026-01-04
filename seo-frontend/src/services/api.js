export async function analyzeSite(url) {
  const res = await fetch("http://localhost:5000/analyze/site", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });

  return res.json();
}
