import CheckToken from 'ApiDir/intercepters/checkToken';
import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';
import RequireAuth from '../intercepters/requireAuth';

class FavoriteApi {
  @RequireAuth
  @CheckToken
  @Format
  FetchList() {
    return axiosWithConverter.get('/api/v1/favorite/');
  }

  @RequireAuth
  @CheckToken
  @Format
  Add(id) {
    return axiosWithConverter.post(`/api/v1/favorite/${id}/`);
  }

  @RequireAuth
  @CheckToken
  @Format
  Delete(id) {
    return axiosWithConverter.delete(`/api/v1/favorite/${id}/`);
  }
}

export default new FavoriteApi();
