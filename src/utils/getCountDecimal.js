/**
 * Получение кол-ва знаков после запятой
 * @param {Number | String} value
 * @return {number}
 */
export const getCountDecimal = value => value.toString().split('.')[1]?.length || 0;