import { flow, getParent } from 'mobx-state-tree';

import VacanciesApi from 'Mock/vacancies';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setIsLoadingNext(value) {
    self.isLoadingNext = value;
  },

  setValues(value) {
    self.values = value;
  },

  setNextPage(value) {
    self.nextPage = value;
  },

  fetchVacancies: flow(function* (isFetchNextPage) {
    if (isFetchNextPage) {
      self.setIsLoadingNext(true);
    } else {
      self.setIsLoading(true);
    }

    const {
      fieldsStore: {
        searchVacancy,
        gradeId,
        typeVacancy,
      },
    } = getParent(self);

    const { data, errors } = yield VacanciesApi.FetchList({
      search: searchVacancy,
      gradeId,
      typeVacancy,
      page: isFetchNextPage
        ? self.nextPage
        : null,
    });

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setValues(isFetchNextPage
        ? [...self.values, ...data.results]
        : data.results);
      self.setNextPage(data.next);
    }

    if (isFetchNextPage) {
      self.setIsLoadingNext(false);
    } else {
      self.setIsLoading(false);
    }
  }),
});
