import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import Format from './intercepters/format';

const axiosWithConverter = applyCaseMiddleware(axios.create(), {
    ignoreHeaders: true,
    caseOptions: {
        // Перевод camel -> snake, snake -> camel только с одним подчеркиванием, поэтому требовать от бэка,
        // чтобы они присылали данные только в camel или с одним подчеркиванием, иначе на фронт придет snake
        // Пример перевода при отправке на бэк:
        // areasId -> areas_id, areas_id -> areas_id, areas__id -> areas__id, areas___id -> areas___id
        stripRegexp: /([^A-Z0-9_[\]]|(?<=[A-Z0-9])_(?=[A-Z0-9]))+/gi,
    },
});

class Methods {
    @Format
    Login(params) {
        return axiosWithConverter.post('/api/v1/login/', params);
    }
    
    @Format
    FetchCurrentUser() {
        return axiosWithConverter.get('/api/v1/user/current/');
    }
    
    @Format
    FetchProfessionList(params) {
        return axiosWithConverter.get('/api/v1/professions/', {params});
    }
    
    @Format
    FetchAreaList(params) {
        return axiosWithConverter.get('/api/v1/areas/', {params});
    }
}

export default new Methods();