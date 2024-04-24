import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class CityApi {
  @Format
  FetchList(params?: {search?: string}) {
    return axiosWithConverter.get('/api/v1/cities/', { params });
  }
}

export default new CityApi();
