import { titleRules } from "../rules/titleRules.js";
import { metaRules } from "../rules/metaRules.js";
import { headingRules } from "../rules/headingRules.js";
import { imageRules } from "../rules/imageRules.js";
import { linkRules } from "../rules/linkRules.js";

export function runRules(data) {
  return [
    ...titleRules(data),
    ...metaRules(data),
    ...headingRules(data),
    ...imageRules(data),
    ...linkRules(data)
  ];
}
