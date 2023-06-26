import { useEffect, useMemo, useState } from "react";
import { Channel, Program, useEpg } from "planby";
// hooks
import useDebounce from "./useDebounce";
// utils
import normalizeData from "../utils/normalizeData";
import getApiUrl from "../utils/getApiUrl";
import getTodayDate from "../utils/getTodayDate";
import theme from "../utils/theme";
// interfaces
import { SelectedProgram } from "../interfaces";

/**
 * This is a custom hook that fetches data from an API, normalizes it, and returns props for rendering
 * an electronic program guide (EPG) with React.
 * @returns The function `usePlanby` returns an object with the following properties:
 * - `getEpgProps`: an object with props to be passed to the EPG component
 * - `getLayoutProps`: an object with props to be passed to the layout component
 * - `isLoading`: a boolean indicating whether the data is currently being loaded
 * - `error`: a string containing an error message if there
 */
export default function usePlanby() {

  const [channels, setChannels] = useState<Channel[]>([]);
  const [epg, setEpg] = useState<Program[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<SelectedProgram | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const channelsData = useMemo(() => channels, [channels]);
  const epgData = useMemo(() => epg, [epg]);

  const debouncedSelectedProgram = useDebounce<SelectedProgram | null>({
    value: selectedProgram,
    delay: 100,
  });

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    startDate: getTodayDate(),
    sidebarWidth: 200,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    isBaseTimeFormat: true,
    theme: theme,
  });

  useEffect(() => {
    // Create a new instance of the AbortController.
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        /* `const response = await fetch(url, { signal: abortController.signal })` is making a fetch
        request to the specified `url` and passing an `AbortSignal` object as an option to the
        `fetch` function. The `AbortSignal` is created by the `AbortController` instance and can be
        used to abort the fetch request if needed. */
        const response = await fetch(getApiUrl(), {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const responseData = await response.json();

        const { normalizedChannels, normalizedPrograms } = normalizeData(responseData);

        setEpg(normalizedPrograms);
        setChannels(normalizedChannels);
        setError("");
        setIsLoading(false);

      } catch(error) {
        if (error instanceof Error && error.name !== "AbortError") {
          // If the error is not from `abortController` set the error.
          console.error(error);
          setError(error.message);
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      /* `abortController.abort()` is a method that aborts any ongoing fetch request associated with
      the `AbortController` instance. It is used in the cleanup function of the `useEffect` hook to
      cancel any ongoing API requests when the component unmounts. This helps to prevent memory leaks and
      unnecessary network requests. */
      abortController.abort();
    }
  }, []);

  return {
    getEpgProps,
    getLayoutProps,
    setSelectedProgram,
    debouncedSelectedProgram,
    isLoading,
    error,
  };
}
