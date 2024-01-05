import { isPlainObject } from "./isPlainObject";

describe("isPlainObject", () => {
  it("returns true for plain objects", () => {
    expect(isPlainObject({})).toEqual(true);
    expect(isPlainObject({ a: 1 })).toEqual(true);
  });

  it("returns true when the constructor property has been changed", () => {
    expect(isPlainObject({ constructor: 1 })).toEqual(true);
  });

  it("returns false for objects with a prototype", () => {
    expect(isPlainObject(Object.create({ a: 1 }))).toEqual(false);
  });

  it("returns true for objects with a valueOf method", () => {
    expect(isPlainObject({ valueOf: 0 })).toEqual(true);
  });

  it("returns false for arrays", () => {
    expect(isPlainObject([])).toEqual(false);
    expect(isPlainObject([1, 2])).toEqual(false);
  });

  it("returns false for functions", () => {
    expect(isPlainObject(() => {})).toEqual(false);
  });

  it("returns false for primitives", () => {
    expect(isPlainObject("string")).toEqual(false);
    expect(isPlainObject(1)).toEqual(false);
    expect(isPlainObject(true)).toEqual(false);
  });

  it("returns false for null", () => {
    expect(isPlainObject(null)).toEqual(false);
  });

  it("returns false for undefined", () => {
    expect(isPlainObject(undefined)).toEqual(false);
  });

  it("returns false for classes and class instances", () => {
    class Test {}

    expect(isPlainObject(Test)).toEqual(false);
    expect(isPlainObject(new Test())).toEqual(false);
  });

  it("returns false for errors", () => {
    expect(isPlainObject(new Error())).toEqual(false);
  });
});
