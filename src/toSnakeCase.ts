import snakeCase from "lodash.snakecase";

export function toSnakeCase(obj: any) {
  return Object.keys(obj).reduce((acc, value) => {
    return { ...acc, [snakeCase(value)]: obj[value] };
  }, {});
}
