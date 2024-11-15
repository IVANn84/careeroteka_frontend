import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class CourseApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/courses/', { params });
  }
}

export default new CourseApi();
