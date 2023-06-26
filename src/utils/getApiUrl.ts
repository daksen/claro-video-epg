const VITE_API_BASE = import.meta.env.VITE_API_BASE;
const VITE_API_VERSION = import.meta.env.VITE_API_VERSION;
const VITE_API_AUTHPT = import.meta.env.VITE_API_AUTHPT;
const VITE_API_REGION = import.meta.env.VITE_API_REGION;
const VITE_API_HKS = import.meta.env.VITE_API_HKS;
const VITE_API_USER_ID = import.meta.env.VITE_API_USER_ID;
const VITE_API_QUANTITY = import.meta.env.VITE_API_QUANTITY;

/**
 * The function formats a given date into a specific format used for API requests.
 * @param {Date} date - The `date` parameter is a `Date` object that represents a specific date and
 * time. It is used as input to the `formatApiDate` function to format the date in a specific way.
 * @returns a string that represents the input date in a specific format.
 */
function formatApiDate(date: Date) {
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  return year + month + day + "240000";
}

/**
 * This function returns an API URL with specific parameters.
 * @returns a string that includes various parameters for an API URL. The parameters include the API
 * base URL, authentication token, API version, region, HKS, user ID, date range, and quantity.
 */
export default function getApiUrl() {
  const dateFrom = formatApiDate(new Date(new Date().setDate(new Date().getDate() - 1)));
  const dateTo = formatApiDate(new Date());
  return `${VITE_API_BASE}&authpt=${VITE_API_AUTHPT}&api_version=${VITE_API_VERSION}region=${VITE_API_REGION}&HKS=${VITE_API_HKS}&user_id=${VITE_API_USER_ID}&date_from=${dateFrom}&date_to=${dateTo}&quantity=${VITE_API_QUANTITY}`;
}
