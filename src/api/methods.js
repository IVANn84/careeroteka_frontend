import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import Format from './intercepters/format';

const axiosWithConverter = applyCaseMiddleware(axios.create(), {
    ignoreHeaders: true,
    caseOptions: {
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