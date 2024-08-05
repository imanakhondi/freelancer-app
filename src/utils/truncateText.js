export default function truncateText(text, maxLength) {
  if (typeof text !== "string")
    throw new TypeError("First argument must be a string");
  if (typeof maxLength !== "number" || maxLength < 0)
    throw new TypeError("Second argument must be a non-negative number");

  if (text.length <= maxLength) return text;

  return `${text.substring(0, maxLength)}...`;
}
