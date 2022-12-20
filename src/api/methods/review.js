import {axiosWithConverter} from '../axiosWithConverter';

import Format from '../intercepters/format';

class ReviewApi {
    /**
     * @param {{gradeId: number, directionId: number}} params
     */
    @Format
    FetchList(params) {
        return axiosWithConverter.get('/api/v1/reviews/', {params});
    }
}

export default new ReviewApi();