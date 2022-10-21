import getRandomInt from 'Util/getRandomInt';

const timeout = delay => new Promise(resolve => setTimeout(resolve, delay));

const wrapAnswer = (data, hasError, error = {error: 'Something went wrong'}) => ({
    data: !hasError
        ? data
        : null,
    errors: hasError
        ? error
        : null,
});

export default {
    FetchProfessionList: (() => {
        let nextPage = 2;
        let id = 1;
        
        return async (params, hasError = false) => {
            // eslint-disable-next-line no-console
            console.log('FetchProfessionList', params);
            
            await timeout(1000);
            
            const data = {
                next: nextPage <= 5
                    ? nextPage++
                    : null,
                results: Array(10)
                    .fill(null)
                    .map(() => ({
                        id: id++,
                        name: 'Python',
                        salaryMinValue: getRandomInt(30000, 200000),
                        countDirections: getRandomInt(1, 4),
                    })),
            };
            
            return wrapAnswer(data, hasError);
        };
    })(),
    
    FetchAreaList: (() => {
        let id = 1;
        
        return async (hasError = false) => {
            // eslint-disable-next-line no-console
            console.log('FetchAreaList');
            
            await timeout(1000);
            
            const data = Array(10)
                .fill(null)
                .map(() => ({
                    name: `Вариант ${id}`,
                    id: id++,
                }));
            
            return wrapAnswer(data, hasError);
        };
    })(),
};