import { isPlainObject } from "./isPlainObject";

describe("isPlainObject", () => {
  it("returns true for plain objects", () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
  });

  it("returns true when the constructor property has been changed", () => {
    expect(isPlainObject({ constructor: 1 })).toBe(true);
  });

  it("returns false for objects with a prototype", () => {
    expect(isPlainObject(Object.create({ a: 1 }))).toBe(false);
  });

  it("returns true for objects with a valueOf method", () => {
    expect(isPlainObject({ valueOf: 0 })).toBe(true);
  });

  it("returns false for arrays", () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2])).toBe(false);
  });

  it("returns false for functions", () => {
    expect(isPlainObject(() => {})).toBe(false);
  });

  it("returns false for primitives", () => {
    expect(isPlainObject("string")).toBe(false);
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isPlainObject(null)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isPlainObject(undefined)).toBe(false);
  });
});
