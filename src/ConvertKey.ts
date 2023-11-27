import lodashCamelCase from "lodash.camelcase";
import lodashSnakeCase from "lodash.snakecase";
import { Overrides } from "./types";

function camelCase(key: string, overrides?: Overrides): string {
  if (overrides && overrides[key]) {
    return overrides[key];
  }

  return lodashCamelCase(key);
}

function snakeCase(key: string, overrides?: Overrides): string {
  if (overrides && overrides[key]) {
    return overrides[key];
  }

  return lodashSnakeCase(key);
}

export default { camelCase, snakeCase };
