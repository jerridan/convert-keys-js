# convert-keys-js

`convert-keys` is a package that provides functions to change the letter casing on object keys. It can handle objects and arrays, converting any deeply-nested keys. Whether an array or an object is passed in, it ensures that all keys in the structure are converted accordingly. The package includes three functions: `toSnakeCase`, `toCamelCase`, and `toKebabCase`, each of which accepts a structure to convert and an optional mapping of `overrides` for specific key conversions.

This project was written in TypeScript.

## Installation

Install `convert-keys` via npm or yarn:

```bash
npm install @jerridan/convert-keys
# or
yarn add @jerridan/convert-keys
```

## Usage

### toSnakeCase

- **Simple Use Case:**
  ```javascript
  toSnakeCase({ objectKey: "value" });
  // Output: { object_key: "value" }
  ```

- **Complex Use Case:**
  ```javascript
  toSnakeCase({
    objectKey: [
      [{ nestedKey: 1 }, { nestedKey: 2 }],
      [{ nestedKey: 3 }, { nestedKey: 4 }],
    ],
  });
  // Output:
  // {
  //   object_key: [
  //     [{ nested_key: 1 }, { nested_key: 2 }],
  //     [{ nested_key: 3 }, { nested_key: 4 }],
  //   ],
  // }
  ```

- **With Overrides:**
  ```javascript
  const overrides = { nestedKey: "overridden_key" };
  toSnakeCase({ objectKey: { nestedKey: "value" } }, overrides);
  // Output:
  // { object_key: { overridden_key: "value" } }
  ```

### toCamelCase

- **Simple Use Case:**
  ```javascript
  toCamelCase({ object_key: "value" });
  // Output: { objectKey: "value" }
  ```

- **Complex Use Case:**
  ```javascript
  toCamelCase({
    object_key: [
      [{ nested_key: 1 }, { nested_key: 2 }],
      [{ nested_key: 3 }, { nested_key: 4 }],
    ],
  });
  // Output:
  // {
  //   objectKey: [
  //     [{ nestedKey: 1 }, { nestedKey: 2 }],
  //     [{ nestedKey: 3 }, { nestedKey: 4 }],
  //   ],
  // }
  ```

- **With Overrides:**
  ```javascript
  const overrides = { nested_key: "overriddenKey" };
  toCamelCase({ object_key: { nested_key: "value" } }, overrides);
  // Output:
  // { objectKey: { overriddenKey: "value" } }
  ```

### toKebabCase

- **Simple Use Case:**
  ```javascript
  toKebabCase({ objectKey: "value" });
  // Output: { "object-key": "value" }
  ```

- **Complex Use Case:**
  ```javascript
  toKebabCase({
    objectKey: [
      [{ nestedKey: 1 }, { nestedKey: 2 }],
      [{ nestedKey: 3 }, { nestedKey: 4 }],
    ],
  });
  // Output:
  // {
  //   "object-key": [
  //     [{ "nested-key": 1 }, { "nested-key": 2 }],
  //     [{ "nested-key": 3 }, { "nested-key": 4 }],
  //   ],
  // }
  ```

- **With Overrides:**
  ```javascript
  const overrides = { nestedKey: "overridden-key" };
  toKebabCase({ objectKey: { nestedKey: "value" } }, overrides);
  // Output:
  // { "object-key": { "overridden-key": "value" } }
  ```

## Contributing

We welcome contributions to this project. Please follow these guidelines:

- **Reporting Bugs**: Submit an issue via GitHub with a clear title and description, steps to reproduce, expected behavior, and the actual behavior observed.
- **Pull Requests**: Contributions are welcome, especially those that are well-tested, readable, and maintain the integrity of the project. If your pull request is aimed at fixing a bug, link the relevant issue in your pull request description. Additionally, please update the CHANGELOG.md file with a summary of your changes.
- **Feature Requests**: Feel free to open an issue to discuss new feature ideas before starting implementation.

## License

This project is released under the MIT License. For more details, see the LICENSE file in the repository.
