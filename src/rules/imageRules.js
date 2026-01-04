import { getStatus } from "../utils/statusHelper.js";

export function imageRules(data) {
  return [
    {
      id: "IMAGES_PRESENT",
      status: getStatus(data.images > 0, "warning"),
      weight: 3,
      title: "Images present",
      message: "Page contains images",
      suggestion: "Add relevant images to improve visual engagement"
    },
    {
      id: "IMAGES_HAVE_ALT",
      status: getStatus(data.imagesWithoutAlt === 0, "warning"),
      weight: 3,
      title: "Image alt text",
      message: "All images have alt text",
      suggestion: "Add alt text to images for accessibility and SEO"
    }
  ];
}
