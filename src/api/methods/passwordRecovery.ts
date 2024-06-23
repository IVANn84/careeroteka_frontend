import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class ResetPasswordApi {
  @Format
  ConfirmResetPassword(uid: string, params) {
    return axiosWithConverter.post(`/api/v1/password-reset-confirm/${uid}/`, params);
  }

  @Format
  ResetPassword(params) {
    return axiosWithConverter.post('/api/v1/password-reset/', params);
  }
}

export default new ResetPasswordApi();
