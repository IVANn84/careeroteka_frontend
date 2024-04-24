import { flow, types } from 'mobx-state-tree';

import { fieldsStoreProfessionPage } from 'Page/Profession/stores/fields';
import { entityStoreProfessionPage } from 'Page/Profession/stores/entity';
import ProfessionApi from 'Api/profession';

export const DirectionModel = types.model('Direction', {
  id: types.maybeNull(types.number),
  name: types.string,
  description: types.string,
});

export const DirectionsStoreModel = types
  .model('Directions', {
    isLoading: types.optional(types.boolean, true),
    values: types.optional(types.array(DirectionModel), []),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setValues(value) {
      self.values = value;
    }

    const fetchDirections = flow(function* () {
      setIsLoading(true);

      const professionId = entityStoreProfessionPage.entity.id;

      const { data, errors } = yield ProfessionApi.FetchByIdDirections(professionId);

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setValues(data);
        fieldsStoreProfessionPage.setDirection(data[0], false);
      }

      setIsLoading(false);
    });

    return {
      setIsLoading,
      setValues,
      fetchDirections,
    };
  });

export const directionsStoreProfessionPage = DirectionsStoreModel.create();
