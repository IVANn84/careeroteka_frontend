import Static from '../intercepters/static';
import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class ReviewApi {
  @Format
  FetchList(params: {gradeId: number, directionId: number}) {
    return axiosWithConverter.get('/api/v1/reviews/', { params });
  }

  @Static
  @Format
  FetchTypesList() {
    return axiosWithConverter.get('/api/v1/reviews_type/');
  }
}

export default new ReviewApi();
