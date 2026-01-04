import { fetchPage } from "./crawler/fetchpage.js";
import { parseHtml } from "./analyser/parseHtml.js";

async function test() {
  const page = await fetchPage("https://example.com");

  const seoData = parseHtml(page.html);

  console.log("SEO DATA 👇");
  console.log(seoData);
}

test();
