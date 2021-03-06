import { cloneDeep } from "lodash";

export const camelToKebab = (str) => str.replace(/[A-Z]/g, "-$&").toLowerCase();

export function camelKeysToKebab(object) {
  const obj = cloneDeep(object);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const kebab = camelToKebab(key);
      if (kebab === key) continue;
      obj[kebab] = obj[key];
      delete obj[key];
    }
  }
  return obj;
}
