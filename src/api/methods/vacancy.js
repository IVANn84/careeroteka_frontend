import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';

class VacancyApi {
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/vacancy/', { params });
  }

  @Format
  FetchById(id) {
    return axiosWithConverter.get(`/api/v1/vacancy/${id}/`);
  }
}

export default new VacancyApi();
