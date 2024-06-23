import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class EmailApi {
  @Format
  EmailResend(params) {
    return axiosWithConverter.post('/api/v1/signup/email-resend/', params);
  }

  @Format
  SendConfirmation(uid: string) {
    return axiosWithConverter.get(`/api/v1/confirmation_email/${uid}/`);
  }
}

export default new EmailApi();
