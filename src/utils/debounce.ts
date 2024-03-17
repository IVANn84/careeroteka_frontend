/**
 * Задержка выполнения функции (выполнение после остановки вызова функции на определенное время)
 * @returns - Функция с задержкой
 */
export const debounce = (fn: (...args: any[]) => any, delayMs: number) => {
  let timeout: NodeJS.Timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delayMs);
  };
};
