import { toKebabCase } from "./toKebabCase";

describe("toKebabCase", () => {
  it("converts object keys to kebab case", () => {
    expect(toKebabCase({ object_key: "value" })).toEqual({
      "object-key": "value",
    });
  });

  it("converts objects with multiple keys", () => {
    expect(
      toKebabCase({
        object_key: "value",
        another_object_key: "anotherValue",
      }),
    ).toEqual({
      "object-key": "value",
      "another-object-key": "anotherValue",
    });
  });

  it("converts nested keys", () => {
    expect(
      toKebabCase({
        object_key: {
          nested_key: { deeply_nested_key: "value" },
        },
      }),
    ).toEqual({
      "object-key": {
        "nested-key": { "deeply-nested-key": "value" },
      },
    });
  });

  it("converts objects with nested arrays", () => {
    expect(
      toKebabCase({
        object_key: {
          nested_key: [1, 2, 3],
        },
      }),
    ).toEqual({
      "object-key": {
        "nested-key": [1, 2, 3],
      },
    });
  });

  it("converts arrays with nested objects", () => {
    expect(
      toKebabCase([
        { nested_key: { deeply_nested_key: "value" } },
        { nested_key: { deeply_nested_key: "value" } },
      ]),
    ).toEqual([
      { "nested-key": { "deeply-nested-key": "value" } },
      { "nested-key": { "deeply-nested-key": "value" } },
    ]);
  });

  it("handles multi-dimensional arrays", () => {
    expect(
      toKebabCase([
        [{ nested_key: 1 }, { nested_key: 2 }],
        [{ nested_key: 3 }, { nested_key: 4 }],
      ]),
    ).toEqual([
      [{ "nested-key": 1 }, { "nested-key": 2 }],
      [{ "nested-key": 3 }, { "nested-key": 4 }],
    ]);
  });

  it("handles objects with multi-dimensional arrays", () => {
    expect(
      toKebabCase({
        object_key: [
          [{ nested_key: 1 }, { nested_key: 2 }],
          [{ nested_key: 3 }, { nested_key: 4 }],
        ],
      }),
    ).toEqual({
      "object-key": [
        [{ "nested-key": 1 }, { "nested-key": 2 }],
        [{ "nested-key": 3 }, { "nested-key": 4 }],
      ],
    });
  });

  it("converts objects with different nested value types", () => {
    expect(
      toKebabCase({
        object_key_1: [{ nested_key: { deeply_nested_key: "value" } }, 1, 2, 3],
        object_key_2: { nested_key: { deeply_nested_key: "value" } },
      }),
    ).toEqual({
      "object-key-1": [
        { "nested-key": { "deeply-nested-key": "value" } },
        1,
        2,
        3,
      ],
      "object-key-2": { "nested-key": { "deeply-nested-key": "value" } },
    });
  });

  it("accepts key overrides", () => {
    const overrides = { object_key: "overridden_key" };

    expect(toKebabCase({ object_key: "value" }, overrides)).toEqual({
      overridden_key: "value",
    });
  });

  it("overrides keys where the value is an array", () => {
    const overrides = { object_key: "overridden_key" };

    expect(
      toKebabCase({ object_key: [{ nested_key: "value" }] }, overrides),
    ).toEqual({
      overridden_key: [{ "nested-key": "value" }],
    });
  });

  it("overrides keys where the value is an object", () => {
    const overrides = { object_key: "overridden_key" };

    expect(
      toKebabCase({ object_key: { nested_key: "value" } }, overrides),
    ).toEqual({
      overridden_key: { "nested-key": "value" },
    });
  });

  it("overrides keys where the value is a nested object", () => {
    const overrides = { nested_key: "overridden_key" };

    expect(
      toKebabCase({ object_key: { nested_key: "value" } }, overrides),
    ).toEqual({
      "object-key": { overridden_key: "value" },
    });
  });

  it("overrides keys where the value is an array of objects", () => {
    const overrides = { nested_key: "overridden_key" };

    expect(
      toKebabCase({ object_key: [{ nested_key: "value" }] }, overrides),
    ).toEqual({
      "object-key": [{ overridden_key: "value" }],
    });
  });

  it("handles an empty object", () => {
    expect(toKebabCase({})).toEqual({});
  });

  it("handles an empty array", () => {
    expect(toKebabCase([])).toEqual([]);
  });

  it("handles an object with empty arrays", () => {
    expect(toKebabCase({ empty_array: [] })).toEqual({ "empty-array": [] });
  });

  it("handles an array with empty objects", () => {
    expect(toKebabCase([{}])).toEqual([{}]);
  });
});
