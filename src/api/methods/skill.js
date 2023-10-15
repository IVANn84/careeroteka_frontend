import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class SkillApi {
  /**
   * @param {{gradeId: number, directionId: number}} params
   */
  @Format
  FetchList(params) {
    return axiosWithConverter.get('/api/v1/skills/', { params });
  }
}

export default new SkillApi();
