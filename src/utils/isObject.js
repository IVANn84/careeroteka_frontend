/**
 * Проверка на объект
 * @param {*} value
 * @return {boolean}
 */
export function isObject(value) {
  return (value && typeof value === 'object' && !Array.isArray(value));
}
