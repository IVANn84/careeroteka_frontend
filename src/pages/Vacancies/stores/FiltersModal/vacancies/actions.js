import { flow, getParent } from 'mobx-state-tree';
import VacanciesApi from 'Mock/vacancies';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setVacancyList(value) {
    self.vacancyList = value;
  },

  fetchVacancyList: flow(function* () {
    self.setIsLoading(true);
    const filters = getParent(self).fieldsStore;

    const { data, errors } = yield VacanciesApi.FetchSalaryCostsByFilter(filters);

    if (errors) {
    // TODO: сделать нормальную обработку ошибок
    } else {
      self.setVacancyList(data);
    }

    getParent(self).fieldsStore.setMaxSalary(self.maxSalary);

    self.setIsLoading(false);
  }),
});
