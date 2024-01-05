import { Overrides, PlainObject, PlainArray } from "./types";
import ConvertKey from "./utils/ConvertKey";
import { convertStructure } from "./convertStructure";

export function toKebabCase(
  structure: PlainObject | PlainArray,
  overrides?: Overrides,
): PlainObject | PlainArray {
  return convertStructure(structure, ConvertKey.kebabCase, overrides);
}
