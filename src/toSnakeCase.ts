import snakeCase from "lodash.snakecase";

export function toSnakeCase(obj: any): any {
  return Object.keys(obj).reduce((acc, value) => {
    if (typeof obj[value] === "object") {
      return { ...acc, [snakeCase(value)]: toSnakeCase(obj[value]) };
    }

    return { ...acc, [snakeCase(value)]: obj[value] };
  }, {});
}
