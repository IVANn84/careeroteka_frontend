import { flow, getParent } from 'mobx-state-tree';

import VacanciesApi from 'Mock/vacancies';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setValues(value) {
    self.values = value;
  },

  fetchVacancies: flow(function* () {
    const { id } = getParent(self).entityStore.entity;

    self.setIsLoading(true);

    const { data, errors } = yield VacanciesApi.FetchSimilarList(id);

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setValues(data);
    }

    self.setIsLoading(false);
  }),
});
