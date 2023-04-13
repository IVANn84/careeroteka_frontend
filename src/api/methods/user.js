import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';
import RequireAuth from '../intercepters/requireAuth';

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
  @Format
  Logout() {
    return axiosWithConverter.get('/api/v1/logout/');
  }

  @RequireAuth
  @Format
  FetchCurrent() {
    return axiosWithConverter.get('/api/v1/user/current/');
  }
}

export default new UserApi();
