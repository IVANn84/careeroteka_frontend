import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class StatisticApi {
  @Format
  FetchProfessionSalaries(params) {
    return axiosWithConverter.get('/api/v1/statistics/', { params });
  }
}

export default new StatisticApi();
