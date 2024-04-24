import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class GradeApi {
  @Format
  FetchList(params?: any) {
    return axiosWithConverter.get('/api/v1/grades/', { params });
  }
}

export default new GradeApi();
