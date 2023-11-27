import isPlainObject from "lodash.isplainobject";
import { Overrides, PlainObject, PlainArray } from "./types";

export function convertStructure(
  structure: PlainObject | PlainArray,
  keyConverter: (key: string, overrides?: Overrides) => string,
  overrides?: Overrides,
): PlainObject | PlainArray {
  if (isPlainObject(structure)) {
    const obj = structure as PlainObject;

    return Object.keys(obj).reduce((acc, key) => {
      const nestedValue = convertStructure(
        obj[key] as PlainObject | PlainArray,
        keyConverter,
        overrides,
      );
      const convertedKey = keyConverter(key, overrides);

      return { ...acc, [convertedKey]: nestedValue };
    }, {});
  }

  if (Array.isArray(structure)) {
    return structure.map((item) =>
      convertStructure(
        item as PlainObject | PlainArray,
        keyConverter,
        overrides,
      ),
    );
  }

  return structure;
}
