import { toSnakeCase } from "./toSnakeCase";

describe("toSnakeCase", () => {
  it("converts object keys to snake case", () => {
    expect(toSnakeCase({ objectKey: "value" })).toEqual({
      object_key: "value",
    });
  });

  it("converts objects with multiple keys", () => {
    expect(
      toSnakeCase({
        objectKey: "value",
        anotherObjectKey: "anotherValue",
      }),
    ).toEqual({
      object_key: "value",
      another_object_key: "anotherValue",
    });
  });

  it("converts nested keys", () => {
    expect(
      toSnakeCase({
        objectKey: {
          nestedKey: { deeplyNestedKey: "value" },
        },
      }),
    ).toEqual({
      object_key: {
        nested_key: { deeply_nested_key: "value" },
      },
    });
  });

  it("converts objects with nested arrays", () => {
    expect(
      toSnakeCase({
        objectKey: {
          nestedKey: [1, 2, 3],
        },
      }),
    ).toEqual({
      object_key: {
        nested_key: [1, 2, 3],
      },
    });
  });

  it("converts arrays with nested objects", () => {
    expect(
      toSnakeCase([
        { nestedKey: { deeplyNestedKey: "value" } },
        { nestedKey: { deeplyNestedKey: "value" } },
      ]),
    ).toEqual([
      { nested_key: { deeply_nested_key: "value" } },
      { nested_key: { deeply_nested_key: "value" } },
    ]);
  });

  it("handles multi-dimensional arrays", () => {
    expect(
      toSnakeCase([
        [{ nestedKey: 1 }, { nestedKey: 2 }],
        [{ nestedKey: 3 }, { nestedKey: 4 }],
      ]),
    ).toEqual([
      [{ nested_key: 1 }, { nested_key: 2 }],
      [{ nested_key: 3 }, { nested_key: 4 }],
    ]);
  });

  it("handles objects with multi-dimensional arrays", () => {
    expect(
      toSnakeCase({
        objectKey: [
          [{ nestedKey: 1 }, { nestedKey: 2 }],
          [{ nestedKey: 3 }, { nestedKey: 4 }],
        ],
      }),
    ).toEqual({
      object_key: [
        [{ nested_key: 1 }, { nested_key: 2 }],
        [{ nested_key: 3 }, { nested_key: 4 }],
      ],
    });
  });

  it("converts objects with different nested value types", () => {
    expect(
      toSnakeCase({
        objectKey1: [{ nestedKey: { deeplyNestedKey: "value" } }, 1, 2, 3],
        objectKey2: { nestedKey: { deeplyNestedKey: "value" } },
      }),
    ).toEqual({
      object_key_1: [{ nested_key: { deeply_nested_key: "value" } }, 1, 2, 3],
      object_key_2: { nested_key: { deeply_nested_key: "value" } },
    });
  });

  it("accepts key overrides", () => {
    const overrides = { objectKey: "overridden_key" };

    expect(toSnakeCase({ objectKey: "value" }, overrides)).toEqual({
      overridden_key: "value",
    });
  });

  it("overrides keys where the value is an array", () => {
    const overrides = { objectKey: "overridden_key" };

    expect(
      toSnakeCase({ objectKey: [{ nestedKey: "value" }] }, overrides),
    ).toEqual({
      overridden_key: [{ nested_key: "value" }],
    });
  });

  it("overrides keys where the value is an object", () => {
    const overrides = { objectKey: "overridden_key" };

    expect(
      toSnakeCase({ objectKey: { nestedKey: "value" } }, overrides),
    ).toEqual({
      overridden_key: { nested_key: "value" },
    });
  });

  it("handles an empty object", () => {
    expect(toSnakeCase({})).toEqual({});
  });

  it("handles an empty array", () => {
    expect(toSnakeCase([])).toEqual([]);
  });

  it("handles an object with empty arrays", () => {
    expect(toSnakeCase({ emptyArray: [] })).toEqual({ empty_array: [] });
  });

  it("handles an array with empty objects", () => {
    expect(toSnakeCase([{}])).toEqual([{}]);
  });
});
