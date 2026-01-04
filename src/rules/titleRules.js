import { getStatus } from "../utils/statusHelper.js";

export function titleRules(data) {
  return [
    {
      id: "TITLE_EXISTS",
      status: getStatus(data.title.length > 0, "error"),
      weight: 10,
      title: "Title tag",
      message: "Page has a title tag",
      suggestion: "Add a descriptive <title> tag to the page"
    },
    {
      id: "TITLE_LENGTH",
      status: getStatus(
        data.title.length >= 50 && data.title.length <= 60,
        "warning"
      ),
      weight: 6,
      title: "Title length",
      message: "Title should be between 50–60 characters",
      suggestion: "Rewrite the title to be 50–60 characters long"
    }
  ];
}
