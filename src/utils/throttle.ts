/**
 * Задержка выполнения функции (выполнение через определенное время)
 * @returns - Функция с задержкой
 */
export function throttle(fn: (...args: any[]) => any, delayMs: number) {
  let timeout: NodeJS.Timeout;
  return function (...args) {
    if (timeout) {
      return;
    }
    timeout = setTimeout(() => {
      fn(...args);
      clearTimeout(timeout);
      timeout = null;
    }, delayMs);
  };
}
