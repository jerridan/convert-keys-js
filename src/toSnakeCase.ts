import snakeCase from "lodash.snakecase";

export function toSnakeCase(obj: any): any {
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] === "object") {
      return { ...acc, [snakeCase(key)]: toSnakeCase(obj[key]) };
    }

    return { ...acc, [snakeCase(key)]: obj[key] };
  }, {});
}
