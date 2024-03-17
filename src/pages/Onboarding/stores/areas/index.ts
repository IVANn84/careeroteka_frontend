import { flow, types } from 'mobx-state-tree';

import AreaApi from 'Api/area';

import { stepsStoreOnboardingPage } from '../steps';

export const AreaModel = types.model('Area', {
  id: types.number,
  name: types.string,
});

export const AreasStoreModel = types
  .model('Areas', {
    isLoading: types.optional(types.boolean, false),
    values: types.optional(types.array(AreaModel), []),
  })
  .actions(self => {
    function setIsLoading(value: boolean) {
      self.isLoading = value;
    }

    function setValues(value) {
      self.values = value;
    }

    const fetchAreas = flow(function* () {
      const search = stepsStoreOnboardingPage.supportData.areaSearch;

      setIsLoading(true);

      const { data, errors } = yield AreaApi.FetchList({ search, limit: 11 });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setValues(data.results);
      }

      setIsLoading(false);
    });

    return {
      setIsLoading,
      setValues,
      fetchAreas,
    };
  })
  .views(self => ({
    get filteredAreas() {
      const selectedId = stepsStoreOnboardingPage.stepsData[2].id;
      return selectedId
        ? self.values.filter(({ id }) => id !== selectedId)
        : self.values;
    },
  }));

export const areasStoreOnboardingPage = AreasStoreModel.create();
