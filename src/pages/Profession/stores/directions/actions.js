import { flow, getParent } from 'mobx-state-tree';

import ProfessionApi from 'Api/profession';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setValues(value) {
    self.values = value;
  },

  fetchDirections: flow(function* () {
    self.setIsLoading(true);

    const professionId = getParent(self).entityStore.entity.id;

    const { data, errors } = yield ProfessionApi.FetchByIdDirections(professionId);

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setValues(data);
      getParent(self).fieldsStore.setDirection(data[0], false);
    }

    self.setIsLoading(false);
  }),
});
