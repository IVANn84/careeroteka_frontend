import { flow, types } from 'mobx-state-tree';

import PartnerApi from 'Api/partner';

export const Banner = types.model('Banner', {
  image: types.string,
  resolution: types.string,
});

export const PartnerBannerModel = types.model('Parther', {
  values: types.optional(types.array(Banner), []),
})
  .actions(self => ({
    fetchPartners: flow(function* fetchPartners() {
      const { data, error } = yield PartnerApi.FetchPartnersBanner();
      if (data) {
        self.values = data;
      }
      if (error) {
        throw new Error('Something went wrong');
      }
    }),
  }));

export const partnersStoreMainPage = PartnerBannerModel.create();
