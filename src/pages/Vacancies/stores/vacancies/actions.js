import { flow, getParent } from 'mobx-state-tree';

import VacanciesApi from 'Api/vacancy';

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
      filtersModalStore: {
        fieldsStore,
      },
    } = getParent(self);

    const filters = { ...fieldsStore };

    if (!filters.searchValues) {
      delete filters.searchValues;
      delete filters.searchBy;
    }
    if (!filters.excludeValues) {
      delete filters.excludeValues;
      delete filters.excludeBy;
    }

    const { data, errors } = yield VacanciesApi.FetchList({
      ...filters,
      searchValues: filters.searchValues
        ? filters.searchValues.split(',')
        : null,
      excludeValues: filters.excludeValues
        ? filters.excludeValues.split(',')
        : null,
      page: isFetchNextPage
        ? self.nextPage
        : null,
    });

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      const localStorageVacancies = localStorage.getItem('visitedVacancies');
      const visitedVacancyIds = localStorageVacancies
        ? JSON.parse(localStorageVacancies)
        : [];

      const formedResults = data.results.vacancies.map(vacancy => ({
        ...vacancy,
        isRead: visitedVacancyIds.includes(vacancy.id),
      }));

      self.setValues(isFetchNextPage
        ? [...self.values, ...formedResults]
        : formedResults);
      self.setNextPage(data.next);
    }
    if (isFetchNextPage) {
      self.setIsLoadingNext(false);
    } else {
      self.setIsLoading(false);
    }
  }),
});
