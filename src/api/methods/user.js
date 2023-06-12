import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';
import RequireAuth from '../intercepters/requireAuth';
import CheckToken from '../intercepters/checkToken';

class UserApi {
  @Format
  Register(params) {
    return axiosWithConverter.post('/api/v1/signup/', params);
  }

  @Format
  Login(params) {
    return axiosWithConverter.post('/api/v1/login/', params);
  }

  @RequireAuth
  @CheckToken
  @Format
  Logout() {
    return axiosWithConverter.get('/api/v1/logout/');
  }

  @CheckToken
  @Format
  FetchCurrent() {
    return axiosWithConverter.get('/api/v1/user/current/');
  }
}

export default new UserApi();
