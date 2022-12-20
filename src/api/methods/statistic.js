import {axiosWithConverter} from '../axiosWithConverter';

import Format from '../intercepters/format';

class StatisticApi {
    @Format
    FetchProfessionSalaries(params) {
        return axiosWithConverter.get('/api/v1/statistics/', {params});
    }
}

export default new StatisticApi();