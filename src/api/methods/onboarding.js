import CheckToken from 'ApiDir/intercepters/checkToken';
import { axiosWithConverter } from '../axiosWithConverter';

import Format from '../intercepters/format';
import RequireAuth from '../intercepters/requireAuth';

class OnboardingApi {
  @RequireAuth
  @CheckToken
  @Format
  SaveStep(step, params) {
    return axiosWithConverter.post(`/api/v1/onboarding/${step}/`, params);
  }

  @RequireAuth
  @CheckToken
  @Format
  EditStep(step, params) {
    return axiosWithConverter.put(`/api/v1/onboarding/${step}/`, params);
  }

  @RequireAuth
  @CheckToken
  @Format
  GetStep(step) {
    return axiosWithConverter.get(`/api/v1/onboarding/${step}/`);
  }

  @RequireAuth
  @CheckToken
  @Format
  SaveOnboarding(params) {
    return axiosWithConverter.put('/api/v1/onboarding/finally_step/', params);
  }
}

export default new OnboardingApi();
