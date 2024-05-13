import { useEffect, useState } from "react";

interface Props<T> {
  callback: () => Promise<T>;
  defaultValue?: T | null;
}

// I prefer to use React Query for managing the API calls, but since state managers are not allowed, I've created custom hook

export const useAPI = <T>({ callback, defaultValue = null }: Props<T>) => {
  const [state, setState] = useState<T | typeof defaultValue>(defaultValue);
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
      console.error(error); // add toast
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [callback]);

  return {
    data: state,
    isLoading,
  };
};
