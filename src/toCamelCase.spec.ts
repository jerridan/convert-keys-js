import { toCamelCase } from "./toCamelCase";

describe("toCamelCase", () => {
  it("converts object keys to camel case", () => {
    expect(toCamelCase({ object_key: "value" })).toEqual({
      objectKey: "value",
    });
  });

  it("converts objects with multiple keys", () => {
    expect(
      toCamelCase({
        object_key: "value",
        another_object_key: "anotherValue",
      }),
    ).toEqual({
      objectKey: "value",
      anotherObjectKey: "anotherValue",
    });
  });

  it("converts nested keys", () => {
    expect(
      toCamelCase({
        object_key: {
          nested_key: { deeply_nested_key: "value" },
        },
      }),
    ).toEqual({
      objectKey: {
        nestedKey: { deeplyNestedKey: "value" },
      },
    });
  });

  it("converts objects with nested arrays", () => {
    expect(
      toCamelCase({
        object_key: {
          nested_key: [1, 2, 3],
        },
      }),
    ).toEqual({
      objectKey: {
        nestedKey: [1, 2, 3],
      },
    });
  });

  it("converts arrays with nested objects", () => {
    expect(
      toCamelCase([
        { nested_key: { deeply_nested_key: "value" } },
        { nested_key: { deeply_nested_key: "value" } },
      ]),
    ).toEqual([
      { nestedKey: { deeplyNestedKey: "value" } },
      { nestedKey: { deeplyNestedKey: "value" } },
    ]);
  });

  it("handles multi-dimensional arrays", () => {
    expect(
      toCamelCase([
        [{ nested_key: 1 }, { nested_key: 2 }],
        [{ nested_key: 3 }, { nested_key: 4 }],
      ]),
    ).toEqual([
      [{ nestedKey: 1 }, { nestedKey: 2 }],
      [{ nestedKey: 3 }, { nestedKey: 4 }],
    ]);
  });

  it("handles objects with multi-dimensional arrays", () => {
    expect(
      toCamelCase({
        object_key: [
          [{ nested_key: 1 }, { nested_key: 2 }],
          [{ nested_key: 3 }, { nested_key: 4 }],
        ],
      }),
    ).toEqual({
      objectKey: [
        [{ nestedKey: 1 }, { nestedKey: 2 }],
        [{ nestedKey: 3 }, { nestedKey: 4 }],
      ],
    });
  });

  it("converts objects with different nested value types", () => {
    expect(
      toCamelCase({
        object_key_1: [{ nested_key: { deeply_nested_key: "value" } }, 1, 2, 3],
        object_key_2: { nested_key: { deeply_nested_key: "value" } },
      }),
    ).toEqual({
      objectKey1: [{ nestedKey: { deeplyNestedKey: "value" } }, 1, 2, 3],
      objectKey2: { nestedKey: { deeplyNestedKey: "value" } },
    });
  });

  it("accepts key overrides", () => {
    const overrides = { object_key: "overridden_key" };

    expect(toCamelCase({ object_key: "value" }, overrides)).toEqual({
      overridden_key: "value",
    });
  });

  it("overrides keys where the value is an array", () => {
    const overrides = { object_key: "overridden_key" };

    expect(
      toCamelCase({ object_key: [{ nested_key: "value" }] }, overrides),
    ).toEqual({
      overridden_key: [{ nestedKey: "value" }],
    });
  });

  it("overrides keys where the value is an object", () => {
    const overrides = { object_key: "overridden_key" };

    expect(
      toCamelCase({ object_key: { nested_key: "value" } }, overrides),
    ).toEqual({
      overridden_key: { nestedKey: "value" },
    });
  });

  it("overrides keys where the value is a nested object", () => {
    const overrides = { nested_key: "overridden_key" };

    expect(
      toCamelCase({ object_key: { nested_key: "value" } }, overrides),
    ).toEqual({
      objectKey: { overridden_key: "value" },
    });
  });

  it("overrides keys where the value is an array of objects", () => {
    const overrides = { nested_key: "overridden_key" };

    expect(
      toCamelCase({ object_key: [{ nested_key: "value" }] }, overrides),
    ).toEqual({
      objectKey: [{ overridden_key: "value" }],
    });
  });

  it("handles an empty object", () => {
    expect(toCamelCase({})).toEqual({});
  });

  it("handles an empty array", () => {
    expect(toCamelCase([])).toEqual([]);
  });

  it("handles an object with empty arrays", () => {
    expect(toCamelCase({ empty_array: [] })).toEqual({ emptyArray: [] });
  });

  it("handles an array with empty objects", () => {
    expect(toCamelCase([{}])).toEqual([{}]);
  });
});
