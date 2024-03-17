/**
 * Загрузка данных через Promise.all
 */
export async function fetchAll(fetches: Promise<any>[]):
  Promise<{ errors: any; unauthorized: boolean; } | { results: { data: any; }[]; }> {
  try {
    // Выбиваем ошибку, как только один из фетчей упал
    const wrappedFetches = fetches.map(async fetch => {
      const result = await fetch;

      if (result.errors) {
        throw result;
      }

      return result;
    });

    return {
      results: await Promise.all(wrappedFetches),
    };
  } catch (result) {
    return result;
  }
}
