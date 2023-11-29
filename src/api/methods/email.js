import CheckToken from 'ApiDir/intercepters/checkToken';

import RequireAuth from '../intercepters/requireAuth';
import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class EmailApi {
  @RequireAuth
  @CheckToken
  @Format
  SendConfirmation() {
    return axiosWithConverter.get('/api/v1/confirmation_email/');
  }
}

export default new EmailApi();
