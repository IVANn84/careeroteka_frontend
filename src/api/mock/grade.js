import {timeout, wrapAnswer} from '../mockUtils';

export default {
    FetchList: (() => {
        return async (hasError = false) => {
            // eslint-disable-next-line no-console
            console.log('GradeApi', 'FetchList');
            
            await timeout(1000);
            
            const data = [
                {
                    id: 1,
                    name: 'Intern',
                },
                {
                    id: 2,
                    name: 'Junior',
                },
                {
                    id: 3,
                    name: 'Middle',
                },
                {
                    id: 4,
                    name: 'Senior',
                },
                {
                    id: 5,
                    name: 'Technical Lead',
                },
            ];
            
            return wrapAnswer(data, hasError);
        };
    })(),
};