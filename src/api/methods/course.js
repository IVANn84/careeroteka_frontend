import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';

class CourseApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/courses/', { params });
  }
}

export default new CourseApi();
