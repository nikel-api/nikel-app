/* eslint-disable */
export function defaultObject(data: any) {
  const replacer = (_: any, value: any) =>
    String(value) === "null" || String(value) === "undefined"
      ? "Unknown"
      : value;
  return JSON.parse(JSON.stringify(data, replacer));
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function convertSecsToTime(seconds: number) {
  return new Date(seconds * 1000).toISOString().substr(11, 5);
}
