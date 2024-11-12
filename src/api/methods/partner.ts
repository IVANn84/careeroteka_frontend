import Format from '../intercepters/format';
import { axiosWithConverter } from '../axiosWithConverter';

class PartnerApi {
  @Format
  FetchPartnersBanner() {
    return axiosWithConverter.get('/api/v1/partners/analitik-dannykh-dev/banners-by-course/');
  }
}

export default new PartnerApi();
