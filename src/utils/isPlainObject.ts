export function isPlainObject(value: any) {
  if (!value) return false;

  return Object.getPrototypeOf(value) === Object.prototype;
}
