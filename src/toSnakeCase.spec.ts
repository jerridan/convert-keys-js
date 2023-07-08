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
});
