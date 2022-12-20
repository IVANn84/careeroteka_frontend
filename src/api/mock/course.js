import {timeout, wrapAnswer} from '../mockUtils';

export default {
    FetchList: (() => {
        let id = 1;
        
        return async (params, hasError = false) => {
            // eslint-disable-next-line no-console
            console.log('CourseApi', 'FetchList', params);
            
            await timeout(1000);
            
            const data = Array(10)
                .fill(null)
                .map(() => ({
                    name: id === 3 ? 'Инженер по автоматизации тестирования' : `Вариант ${id}`,
                    id: id++,
                    company: 'ООО "Рога и копыта"',
                    type: 'online',
                    image: 'https://picsum.photos/200/300',
                    rating: 3.4,
                }));
            
            return wrapAnswer(data, hasError);
        };
    })(),
};