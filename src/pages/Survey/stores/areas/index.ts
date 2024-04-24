import { flow, types } from 'mobx-state-tree';

import AreaApi from 'Api/area';

import { stepsStoreSurveyPage } from '../steps';

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
      const search = stepsStoreSurveyPage.supportData.areaSearch;

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
      const { area } = stepsStoreSurveyPage.stepsData[2];
      return area
        ? self.values.filter(({ name }) => name !== area)
        : self.values;
    },
  }));

export const areasStoreSurveyPage = AreasStoreModel.create();
