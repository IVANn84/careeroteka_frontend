/**
 * Асинхронная задержка кода
 */
export async function delay(delayMs: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delayMs);
  });
}
