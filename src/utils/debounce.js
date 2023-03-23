/**
 * Задержка выполнения функции (выполнение после остановки вызова функции на определенное время)
 * @param {Function} fn - Функция для выполнения
 * @param {number} delay - Время задержки (в миллисекундах)
 * @returns {Function} - Функция с задержкой
 */
export function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}