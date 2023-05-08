import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';

class CityApi {
  /**
   * @param {{search: string?}} params
   */
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/cities/', { params });
  }
}

export default new CityApi();
