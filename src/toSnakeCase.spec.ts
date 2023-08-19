import { toSnakeCase } from "./toSnakeCase";

describe("toSnakeCase", () => {
  it("converts object keys to camel case", () => {
    expect(toSnakeCase({ objectKey: "value" })).toEqual({
      object_key: "value",
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

  it("handles nested arrays", () => {
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

  it("converts keys of objects in arrays", () => {
    expect(
      toSnakeCase({
        objectKey: [
          { nestedKey: { deeplyNestedKey: "value" } },
          {
            nestedKey: {
              deeplyNestedKey: [{ evenMoreDeeplyNestedKey: "value" }],
            },
          },
        ],
      }),
    ).toEqual({
      object_key: [
        { nested_key: { deeply_nested_key: "value" } },
        {
          nested_key: {
            deeply_nested_key: [{ even_more_deeply_nested_key: "value" }],
          },
        },
      ],
    });
  });

  it("handles nested arrays with some values being objects", () => {
    expect(
      toSnakeCase({
        objectKey: [{ nestedKey: { deeplyNestedKey: "value" } }, 1, 2, 3],
      }),
    ).toEqual({
      object_key: [{ nested_key: { deeply_nested_key: "value" } }, 1, 2, 3],
    });
  });

  it.todo("handles double arrays");

  it("can accept key overrides", () => {
    const overrides = { objectKey: "object_key1" };

    expect(toSnakeCase({ objectKey: "value" }, overrides)).toEqual({
      object_key1: "value",
    });
  });

  it("handles an empty object", () => {
    expect(toSnakeCase({})).toEqual({});
  });

  it("handles an object with empty arrays", () => {
    expect(toSnakeCase({ emptyArray: [] })).toEqual({ empty_array: [] });
  });
});
