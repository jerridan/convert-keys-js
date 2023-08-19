import snakeCase from "lodash.snakecase";
import isPlainObject from "lodash.isplainobject";

type ObjToConvert = {
  [key: string]: unknown;
};

type Overrides = {
  [key: string]: string;
};

export function toSnakeCase(obj: ObjToConvert, overrides?: Overrides): object {
  return Object.keys(obj).reduce((acc, key: keyof object) => {
    const value = obj[key];
    if (isPlainObject(value)) {
      return {
        ...acc,
        [convertKey(key, overrides)]: toSnakeCase(
          value as ObjToConvert,
          overrides,
        ),
      };
    }

    if (Array.isArray(value)) {
      const convertedArray = value.map((arrayItem) => {
        if (isPlainObject(arrayItem)) {
          return toSnakeCase(arrayItem, overrides);
        }
        return arrayItem;
      });

      return {
        ...acc,
        [snakeCase(key)]: convertedArray,
      };
    }

    return { ...acc, [convertKey(key, overrides)]: obj[key] };
  }, {});
}

function convertKey(key: string, overrides?: Overrides): string {
  if (overrides && overrides[key]) {
    return overrides[key];
  }

  return snakeCase(key);
}
