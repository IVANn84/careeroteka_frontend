import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';
import RequireAuth from '../intercepters/requireAuth';

class AreaApi {
  @RequireAuth
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/areas/', { params });
  }
}

export default new AreaApi();
