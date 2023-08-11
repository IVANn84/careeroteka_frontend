import { flow, getParent } from 'mobx-state-tree';

import VacanciesApi from 'Mock/vacancies';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setEntity(value) {
    self.entity = value;
  },

  fetch: flow(function* (id) {
    self.setIsLoading(true);

    const vacancyId = +(self.entity.id || id);

    const { data, errors } = yield VacanciesApi.FetchById(vacancyId);

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setEntity({
        ...data,
        id: vacancyId,
      });
    }

    self.setIsLoading(false);

    getParent(self).vacanciesStore.fetchVacancies();
  }),
});
