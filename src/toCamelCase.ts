import isPlainObject from "lodash.isplainobject";
import { Overrides, PlainObject, PlainArray } from "./types";
import ConvertKey from "./ConvertKey";

export function toCamelCase(
  structure: PlainObject | PlainArray,
  overrides?: Overrides,
): PlainObject | PlainArray {
  if (isPlainObject(structure)) {
    const obj = structure as PlainObject;

    return Object.keys(obj).reduce((acc, key) => {
      const nestedValue = toCamelCase(
        obj[key] as PlainObject | PlainArray,
        overrides,
      );
      const snakeCasedKey = ConvertKey.camelCase(key, overrides);

      return { ...acc, [snakeCasedKey]: nestedValue };
    }, {});
  }

  if (Array.isArray(structure)) {
    return structure.map((item) =>
      toCamelCase(item as PlainObject | PlainArray, overrides),
    );
  }

  return structure;
}
