import { flow, types } from 'mobx-state-tree';

import CityApi from 'Api/city';

export const CityModel = types.model('City', {
  id: types.number,
  name: types.string,
  region: types.string,
});

export const CitiesStoreModel = types
  .model('Cities', {
    isLoading: types.optional(types.boolean, true),
    values: types.optional(types.array(CityModel), []),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setValues(value) {
      self.values = value;
    }

    const fetchCities = flow(function* () {
      setIsLoading(true);

      const { data, errors } = yield CityApi.FetchList();

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setValues(data);
      }

      setIsLoading(false);
    });

    return {
      fetchCities,
      setIsLoading,
      setValues,
    };
  });

export const citiesStoreOnboardingPage = CitiesStoreModel.create();
