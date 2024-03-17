import RequireAuth from '../intercepters/requireAuth';
import Format from '../intercepters/format';
import CheckToken from '../intercepters/checkToken';
import { axiosWithConverter } from '../axiosWithConverter';

class UserApi {
  @CheckToken
  @Format
  FetchCurrent() {
    return axiosWithConverter.get('/api/v1/user/current/');
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

  @Format
  Register(params) {
    return axiosWithConverter.post('/api/v1/signup/', params);
  }
}

export default new UserApi();
