export default function toLocalDate(date) {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) throw new TypeError("Invalid date");
  return new Date(date).toLocaleDateString("fa-IR", {});
}
