import {axiosWithConverter} from '../axiosWithConverter';

import Format from '../intercepters/format';
import Static from '../intercepters/static';

class ReviewApi {
    /**
     * @param {{gradeId: number, directionId: number}} params
     */
    @Format
    FetchList(params) {
        return axiosWithConverter.get('/api/v1/reviews/', {params});
    }
    
    @Static
    @Format
    FetchTypesList() {
        return axiosWithConverter.get('/api/v1/reviews_type/');
    }
}

export default new ReviewApi();