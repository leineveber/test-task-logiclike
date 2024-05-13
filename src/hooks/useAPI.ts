import { useEffect, useState } from "react";

interface Props<T> {
  callback: () => Promise<T>;
  defaultValue?: T | null;
}

// i prefer to use React Query for managing the API calls, but since state managers are not allowed, I've created custom hook

export const useAPI = <T>({ callback, defaultValue = null }: Props<T>) => {
  const [state, setState] = useState<T | typeof defaultValue>(defaultValue);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await callback();
      setState(data);
    };

    try {
      setIsLoading(true);
      fetchData();
    } catch (error) {
      setError(error as Error);
      console.error(error); // add toast
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [callback]);

  return {
    data: state,
    isLoading,
    error,
  };
};
