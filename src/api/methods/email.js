import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';
import RequireAuth from '../intercepters/requireAuth';

class EmailApi {
  @RequireAuth
  @Format
  SendConfirmation() {
    return axiosWithConverter.get('/api/v1/confirmation_email/');
  }
}

export default new EmailApi();
