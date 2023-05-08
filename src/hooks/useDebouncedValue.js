import { useState, useEffect } from 'react';

/**
 * Задержка перед обновлением значения
 * @param {any} value - Значение
 * @param {number} delay - Время задержки (в миллисекундах)
 * @return {any}
 */
export function useDebouncedValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
