import snakeCase from "lodash.snakecase";
import isPlainObject from "lodash.isplainobject";

export function toSnakeCase(obj: object): object {
  return Object.keys(obj).reduce((acc, key: keyof object) => {
    if (isPlainObject(obj[key])) {
      return { ...acc, [snakeCase(key)]: toSnakeCase(obj[key]) };
    }

    if (Array.isArray(obj[key])) {
      return {
        ...acc,
        [snakeCase(key)]: (obj[key] as Array<unknown>).map(toSnakeCase),
      };
    }

    return { ...acc, [snakeCase(key)]: obj[key] };
  }, {});
}
