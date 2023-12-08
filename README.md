# ConvertKeys

`ConvertKeys` is a tool for converting object keys between camel case, snake case and kebab case.

### Key Features:

- Accepts objects and arrays
- Handles deeply-nested keys
- Supports overrides for specific key conversions

## Installation

Install `ConvertKeys` via npm or yarn:

```bash
npm install @jerridan/convert-keys
# or
yarn add @jerridan/convert-keys
```

## Usage

ConvertKeys exports three functions:

- `toSnakeCase` -> for converting keys to snake case
- `toCamelCase` -> for converting keys to camel case
- `toKebabCase` -> for converting keys to kebab case

Each function accepts two arguments:

1. `input` -> the object or array to convert
2. `overrides` -> an optional object containing overrides for specific key conversions

### Examples

**Converting an object**

```javascript
toSnakeCase({ objectKey: "value" });
// Output: { object_key: "value" }
```

**Converting a complex nested object**

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

**Using overrides**

```javascript
const overrides = { nestedKey: "overridden-key" };
toKebabCase({ objectKey: { nestedKey: "value" } }, overrides);
// Output:
// { "object-key": { "overridden-key": "value" } }
```

## Contributing

Contributions to this project are welcome. Please follow these general guidelines:

- **Reporting Bugs**: Submit an issue via GitHub with a clear title and description, steps to reproduce, expected behavior, and the actual behavior observed.
- **Pull Requests**: Pull requests should be well-tested, readable, and maintain the integrity of the project. If your pull request is aimed at fixing a bug, link the relevant issue in the description. Additionally, please update the CHANGELOG.md file with a summary of your changes.
- **Feature Requests**: Feel free to open an issue to discuss new feature ideas before starting implementation.

## License

This project is released under the MIT License. For more details, see the LICENSE file in the repository.
