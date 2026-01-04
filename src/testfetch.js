import { fetchPage } from "./crawler/fetchpage.js";

async function test() {
  const page = await fetchPage("https://example.com");

  console.log("STATUS:", page.status);
  console.log("FINAL URL:", page.finalUrl);
  console.log("HTML length:", page.html.length);
}

test();
