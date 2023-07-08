import toSnakeCase from "lodash.snakecase";

export function snakeCase(obj: any) {
  return Object.keys(obj).reduce((acc, value) => {
    return { ...acc, [toSnakeCase(value)]: obj[value] };
  }, {});
}
