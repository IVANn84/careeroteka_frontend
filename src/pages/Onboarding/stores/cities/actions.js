import { flow } from 'mobx-state-tree';

import CityApi from 'Api/city';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setValues(value) {
    self.values = value;
  },

  fetchCities: flow(function* () {
    self.setIsLoading(true);

    const { data, errors } = yield CityApi.FetchList();

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setValues(data);
    }

    self.setIsLoading(false);
  }),
});
