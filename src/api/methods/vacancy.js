import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class VacancyApi {
  @Format
  FetchById(id) {
    return axiosWithConverter.get(`/api/v1/vacancy/${id}/`);
  }

  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/vacancy/', { params });
  }
}

export default new VacancyApi();
