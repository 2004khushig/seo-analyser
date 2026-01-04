import { getStatus } from "../utils/statusHelper.js";

export function headingRules(data) {
  return [
    {
      id: "H1_EXISTS",
      status: getStatus(data.h1Count === 1, "error"),
      weight: 8,
      title: "H1 tag",
      message: "Page has exactly one H1 tag",
      suggestion: "Ensure the page has exactly one H1 tag"
    },
    {
      id: "H2_PRESENT",
      status: getStatus(data.h2Count > 0, "warning"),
      weight: 4,
      title: "H2 tags",
      message: "Page uses H2 headings",
      suggestion: "Use H2 tags to structure content better"
    }
  ];
}
