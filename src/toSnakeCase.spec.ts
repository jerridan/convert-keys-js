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

  it("handles an empty object", () => {
    expect(toSnakeCase({})).toEqual({});
  });

  it("throws an error if the argument is not an object", () => {
    expect(() => toSnakeCase([])).toThrowError("Argument must be an object");
  });
});
