import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class DirectionApi {
  /**
   * @param {{search: string?}} params
   */
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/directions/', { params });
  }
}

export default new DirectionApi();
