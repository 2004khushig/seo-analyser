// src/crawler/fetchPage.js
import axios from "axios";

export async function fetchPage(url) {
  const res = await axios.get(url, {
    timeout: 10000,
    headers: { "User-Agent": "SEO-Bot/1.0" }
  });

  return {
    finalUrl: res.request?.res?.responseUrl || url,
    status: res.status,
    headers: res.headers,
    html: res.data
  };
}
