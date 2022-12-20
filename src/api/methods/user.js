import {axiosWithConverter} from '../axiosWithConverter';

import Format from '../intercepters/format';

class UserApi {
    @Format
    Login(params) {
        return axiosWithConverter.post('/api/v1/login/', params);
    }
    
    @Format
    FetchCurrent() {
        return axiosWithConverter.get('/api/v1/user/current/');
    }
}

export default new UserApi();