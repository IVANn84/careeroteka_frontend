import { useEffect, useState } from 'react';

// Задержка перед обновлением значения
export function useDebouncedValue(value: any, delayMS: number): any {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMS);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delayMS]);

  return debouncedValue;
}
