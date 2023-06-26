import { useState, useEffect } from "react";

interface DebounceProps<T> {
  value: T
  delay: number
}

/**
 * This is a custom React hook that returns a debounced value of a given string after a specified delay
 * in milliseconds.
 * @param {string} value - The value that needs to be debounced.
 * @param {number} delay - The number of milliseconds to wait before updating the debounced
 * value.
 * @returns The hook returns the `debouncedValue`, which is the latest value of
 * the input string after a specified delay (in milliseconds) has passed since the last time the input
 * value was updated. This is useful for preventing unnecessary API calls or other
 * expensive operations from being triggered too frequently as the user types into the input field
 */
function useDebounce<T>({ value, delay }: DebounceProps<T>) {

  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      // Clean up the setTimeout when the component unmounts
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
