import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';

class AreaApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/areas/', { params });
  }
}

export default new AreaApi();
