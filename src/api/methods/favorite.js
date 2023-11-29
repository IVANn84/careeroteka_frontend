import CheckToken from 'ApiDir/intercepters/checkToken';

import RequireAuth from '../intercepters/requireAuth';
import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class FavoriteApi {
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

  @RequireAuth
  @CheckToken
  @Format
  FetchList() {
    return axiosWithConverter.get('/api/v1/favorite/');
  }
}

export default new FavoriteApi();
