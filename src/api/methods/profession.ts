import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class ProfessionApi {
  @Format
  FetchById(id: number) {
    return axiosWithConverter.get(`/api/v1/professions/${id}/`);
  }

  @Format
  FetchByIdCourses(id: number) {
    return axiosWithConverter.get(`/api/v1/professions/${id}/courses/`);
  }

  @Format
  FetchByIdDirections(id: number) {
    return axiosWithConverter.get(`/api/v1/professions/${id}/directions/`);
  }

  @Format
  FetchByIdSalaries(id: number) {
    return axiosWithConverter.get(`/api/v1/professions/${id}/salaries/`);
  }

  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/professions/', { params });
  }
}

export default new ProfessionApi();
