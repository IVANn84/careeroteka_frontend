import {axiosWithConverter} from '../axiosWithConverter';

import Format from '../intercepters/format';
import RequireAuth from '../intercepters/requireAuth';

class FavoriteApi {
    @RequireAuth
    @Format
    FetchList() {
        return axiosWithConverter.get('/api/v1/favorite/');
    }
    
    @RequireAuth
    @Format
    Add(id) {
        return axiosWithConverter.post(`/api/v1/favorite/${id}/`);
    }
    
    @RequireAuth
    @Format
    Delete(id) {
        return axiosWithConverter.delete(`/api/v1/favorite/${id}/`);
    }
}

export default new FavoriteApi();