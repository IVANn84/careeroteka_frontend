import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import Format from './intercepters/format';
import RequireAuth from './intercepters/requireAuth';

const axiosWithConverter = applyCaseMiddleware(axios.create(), {
    ignoreHeaders: true,
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