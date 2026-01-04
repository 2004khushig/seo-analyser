import { getStatus } from "../utils/statusHelper.js";

export function metaRules(data) {
  return [
    {
      id: "META_EXISTS",
      status: getStatus(data.metaDescription.length > 0, "error"),
      weight: 8,
      title: "Meta description",
      message: "Meta description exists",
      suggestion: "Add a meta description to improve CTR"
    },
    {
      id: "META_LENGTH",
      status: getStatus(
        data.metaDescription.length === 0 ||
        (data.metaDescription.length >= 120 &&
         data.metaDescription.length <= 160),
        "warning"
      ),
      weight: 5,
      title: "Meta description length",
      message: "Meta description should be 120–160 characters",
      suggestion: "Adjust meta description length to 120–160 characters"
    }
  ];
}
