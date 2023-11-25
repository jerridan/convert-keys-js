import isPlainObject from "lodash.isplainobject";
import { Overrides, PlainObject, PlainArray } from "./types";
import { convertKey } from "./convertKey";

export function toSnakeCase(
  structure: PlainObject | PlainArray,
  overrides?: Overrides,
): PlainObject | PlainArray {
  if (isPlainObject(structure)) {
    const obj = structure as PlainObject;

    return Object.keys(obj).reduce((acc, key) => {
      const nestedValue = toSnakeCase(
        obj[key] as PlainObject | PlainArray,
        overrides,
      );
      const snakeCasedKey = convertKey(key, overrides);

      return { ...acc, [snakeCasedKey]: nestedValue };
    }, {});
  }

  if (Array.isArray(structure)) {
    return structure.map((item) =>
      toSnakeCase(item as PlainObject | PlainArray, overrides),
    );
  }

  return structure;
}
