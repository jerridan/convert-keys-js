import snakeCase from "lodash.snakecase";

export function toSnakeCase(obj: object): object {
  return Object.keys(obj).reduce((acc, key: keyof object) => {
    if (typeof obj[key] === "object") {
      return { ...acc, [snakeCase(key)]: toSnakeCase(obj[key]) };
    }

    return { ...acc, [snakeCase(key)]: obj[key] };
  }, {});
}
