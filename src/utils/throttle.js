/**
 * Задержка выполнения функции (выполнение через определенное время)
 * @param {Function} fn - Функция для выполнения
 * @param {number} delay - Время задержки (в миллисекундах)
 * @returns {Function} - Функция с задержкой
 */
export function throttle(fn, delay) {
  let timeout;
  return function (...args) {
    if (timeout) {
      return;
    }
    timeout = setTimeout(() => {
      fn(...args);
      clearTimeout(timeout);
      timeout = null;
    }, delay);
  };
}
