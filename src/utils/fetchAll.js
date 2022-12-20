/**
 * Загрузка данных через Promise.all
 * @param {Promise[]} fetches - Массив фетчей
 * @returns {Promise<{errors: any, unauthorized: Boolean} | {results: {data: any}[]}>}
 */
export async function fetchAll(fetches) {
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