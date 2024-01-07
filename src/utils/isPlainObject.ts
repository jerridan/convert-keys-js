export function isPlainObject(value: any) {
  if (!value) return false;

  return [null, Object.prototype].includes(Object.getPrototypeOf(value));
}
