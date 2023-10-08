import isPlainObject from "lodash.isplainobject";
import { Overrides, PlainObject, PlainArray } from "./types";
import { convertKey } from "./convertKey";

export function toSnakeCase(
  structure: PlainObject | PlainArray,
  overrides?: Overrides,
): PlainObject | PlainArray {
  if (isPlainObject(structure)) {
    return snakeCaseObject(structure as PlainObject, overrides);
  }

  if (Array.isArray(structure)) {
    return snakeCaseArray(structure as PlainArray, overrides);
  }
}

function snakeCaseObject(
  obj: PlainObject,
  overrides?: Overrides,
): PlainObject {
  return Object.keys(obj).reduce((acc, key) => {
    let value = obj[key];

    if (isPlainObject(value)) {
      value = snakeCaseObject(value as PlainObject, overrides);
    }

    if (Array.isArray(value)) {
      value = snakeCaseArray(value as PlainArray, overrides);
    }

    return { ...acc, [convertKey(key, overrides)]: value };
  }, {});
}

function snakeCaseArray(
  arr: PlainArray,
  overrides?: Overrides,
): PlainArray {
  return arr.map((value) => {
    if (isPlainObject(value)) {
      return snakeCaseObject(value as PlainObject, overrides);
    }

    if (Array.isArray(value)) {
      return snakeCaseArray(value as PlainArray, overrides);
    }

    return value;
  });
}
