import { flow, getParent } from 'mobx-state-tree';

import VacanciesApi from 'Api/vacancy';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setVacancyList(value) {
    self.vacancyList = value;
  },

  fetchVacancyList: flow(function* () {
    self.setIsLoading(true);

    const { data, errors } = yield VacanciesApi.FetchSalaryCostsByFilter();

    if (errors) {
    // TODO: сделать нормальную обработку ошибок
    } else {
      self.setVacancyList(data);
    }

    if (!getParent(self).fieldsStore.maxSalary) {
      getParent(self).fieldsStore.setMaxSalary(self.maxSalary);
    }

    self.setIsLoading(false);
  }),
});
