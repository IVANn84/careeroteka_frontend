/**
 * Получение кол-ва знаков после запятой
 */
export const getCountDecimal = (value: number | string) => value.toString().split('.')[1]?.length || 0;
