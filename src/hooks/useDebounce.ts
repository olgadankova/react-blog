import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [searchValue, setSearchValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return searchValue;
};
