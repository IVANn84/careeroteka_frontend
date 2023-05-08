import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';

class GradeApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/grades/', { params });
  }
}

export default new GradeApi();
