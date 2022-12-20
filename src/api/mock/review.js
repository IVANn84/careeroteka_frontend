import {timeout, wrapAnswer} from '../mockUtils';

export default {
    FetchList: (() => {
        return async (params, hasError = false) => {
            // eslint-disable-next-line no-console
            console.log('ReviewApi', 'FetchList', params);
            
            await timeout(1000);
            
            const data = [
                {
                    id: 1,
                    title: 'Work-life баланс',
                    value: 3.4,
                },
                {
                    id: 2,
                    title: 'Карьерный рост',
                    value: 5,
                },
                {
                    id: 3,
                    title: 'Уровень зарплаты',
                    value: 4,
                },
                {
                    id: 4,
                    title: 'Переработки',
                    value: 2,
                },
                {
                    id: 5,
                    title: 'Разнообразие задач',
                    value: 0,
                },
            ];
            
            return wrapAnswer(data, hasError);
        };
    })(),
};