import snakeCase from "lodash.snakecase";
import { Overrides } from "./types";

export function convertKey(key: string, overrides?: Overrides): string {
  if (overrides && overrides[key]) {
    return overrides[key];
  }

  return snakeCase(key);
}
