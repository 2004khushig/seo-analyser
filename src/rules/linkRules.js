import { getStatus } from "../utils/statusHelper.js";

export function linkRules(data) {
  return [
    {
      id: "LINKS_PRESENT",
      status: getStatus(data.links > 0, "warning"),
      weight: 3,
      title: "Links present",
      message: "Page contains links",
      suggestion: "Add internal links to improve crawlability"
    }
  ];
}
