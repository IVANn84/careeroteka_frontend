import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class CoursesByPartnerApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/vacancy/courses-by-partner/', { params });
  }
}

export default new CoursesByPartnerApi();
