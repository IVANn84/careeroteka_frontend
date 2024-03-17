/**
 * Склонение слов
 * @param number - Число, относительно которого склонять
 * @param wordList - Список слов
 */
export function getNoun(number: number, wordList: string[]) {
  const cases = [2, 0, 1, 1, 1, 2];
  return wordList[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
