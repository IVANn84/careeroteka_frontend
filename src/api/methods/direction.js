import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';

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
