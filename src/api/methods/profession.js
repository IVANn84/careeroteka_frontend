import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';

class ProfessionApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/professions/', { params });
  }

  @Format
  FetchById(id) {
    return axiosWithConverter.get(`/api/v1/professions/${id}/`);
  }

  @Format
  FetchByIdSalaries(id) {
    return axiosWithConverter.get(`/api/v1/professions/${id}/salaries/`);
  }

  @Format
  FetchByIdCourses(id) {
    return axiosWithConverter.get(`/api/v1/professions/${id}/courses/`);
  }

  @Format
  FetchByIdDirections(id) {
    return axiosWithConverter.get(`/api/v1/professions/${id}/directions/`);
  }
}

export default new ProfessionApi();
