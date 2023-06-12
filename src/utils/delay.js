/**
 * Асинхронная задержка кода
 * @param {number} time - время задержки (миллисекунды)
 * @return {Promise}
 */
export async function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
