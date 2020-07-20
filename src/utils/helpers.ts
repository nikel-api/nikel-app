/* eslint-disable */
export function defaultObject(data: any) {
  const replacer = (_: any, value: any) =>
    String(value) === "null" || String(value) === "undefined"
      ? "Unknown"
      : value;
  return JSON.parse(JSON.stringify(data, replacer));
}
