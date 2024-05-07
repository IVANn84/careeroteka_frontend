import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class CoursesByPartnerApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/courses-by-partner/', { params });
  }
}

export default new CoursesByPartnerApi();
