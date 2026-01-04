// src/analyzer/parseHtml.js
import * as cheerio from "cheerio";

export function parseHtml(html) {
  const $ = cheerio.load(html);

  return {
    title: $("title").text(),
    metaDescription: $('meta[name="description"]').attr("content") || "",
    h1Count: $("h1").length,
    images: $("img").length,
    imagesWithoutAlt: $("img:not([alt])").length,
    links: $("a").length
  };
}
