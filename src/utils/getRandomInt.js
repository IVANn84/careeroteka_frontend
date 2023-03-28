/**
 * Получение случайного числа
 * @param {Number} intFrom - Начальное значение
 * @param {Number} intTo - Конечное значение
 * @return {Number}
 */
export function getRandomInt(intFrom, intTo) {
    return Math.floor(Math.random() * intTo) + intFrom;
}