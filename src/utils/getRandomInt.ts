/**
 * Получение случайного числа
 */
export function getRandomInt(intFrom: number, intTo: number) {
  return Math.floor(Math.random() * intTo) + intFrom;
}
