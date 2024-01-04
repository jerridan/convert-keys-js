export function isPlainObject(value: any) {
  return Object.getPrototypeOf(value) === Object.prototype;
  // return value.constructor === Object;
}
