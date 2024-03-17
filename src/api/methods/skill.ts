import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class SkillApi {
  @Format
  FetchList(params: {gradeId: number, directionId: number}) {
    return axiosWithConverter.get('/api/v1/skills/', { params });
  }
}

export default new SkillApi();
