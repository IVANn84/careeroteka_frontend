import { flow, types } from 'mobx-state-tree';

import AreaApi from 'Api/area';

export const AreaModel = types.model('Area', {
  id: types.maybeNull(types.number),
  name: types.string,
});

export const AreasStoreModel = types
  .model('Areas', {
    isLoading: types.optional(types.boolean, true),
    values: types.optional(types.array(AreaModel), []),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setValues(value) {
      self.values = value;
    }

    const fetchAreas = flow(function* () {
      setIsLoading(true);

      const { data, errors } = yield AreaApi.FetchList();

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setValues([
          {
            id: null,
            name: 'Все направления',
          },
          ...data.results,
        ]);
      }

      setIsLoading(false);
    });

    return {
      setIsLoading,
      setValues,
      fetchAreas,
    };
  });

export const areasStoreMainPage = AreasStoreModel.create();
