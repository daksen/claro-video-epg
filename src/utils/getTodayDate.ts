/**
 * The function returns today's date in the format of "year/month/day".
 * @returns The function `getTodayDate()` returns a string in the format of "YYYY/MM/DD" representing
 * the current date.
 */
export default function getTodayDate() {
  const today = new Date();
  const year = today.toLocaleString("default", { year: "numeric" });
  const month = today.toLocaleString("default", { month: "2-digit" });
  const day = today.toLocaleString("default", { day: "2-digit" });
  return `${year}/${month}/${day}`;
}