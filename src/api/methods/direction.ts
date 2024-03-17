import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class DirectionApi {
  @Format
  FetchList(params: {search?: string}) {
    return axiosWithConverter.get('/api/v1/directions/', { params });
  }
}

export default new DirectionApi();
