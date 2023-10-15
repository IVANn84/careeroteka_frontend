import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class AreaApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/areas/', { params });
  }
}

export default new AreaApi();
