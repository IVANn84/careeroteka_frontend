import { flow, types } from 'mobx-state-tree';

import { rootStoreFiltersModalVacanciesPage } from 'Page/Vacancies/stores/FiltersModal/root';
import VacanciesApi from 'Api/vacancy';

const SalaryModel = types.model('Salary', {
  minValue: types.maybeNull(types.number),
  maxValue: types.maybeNull(types.number),
  currency: types.model('Currency', {
    code: types.string,
  }),
});

export const VacancyModel = types.model('Vacancy', {
  id: types.number,
  company: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  city: types.maybeNull(types.string),
  salary: types.maybeNull(types.union(SalaryModel, types.number)),
  isRead: types.maybeNull(types.boolean),
});

export const VacanciesStoreModel = types
  .model('Vacancies', {
    isLoading: types.optional(types.boolean, true),
    isLoadingNext: types.optional(types.boolean, false),
    values: types.optional(types.array(VacancyModel), []),
    nextPage: types.maybeNull(types.number),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setIsLoadingNext(value) {
      self.isLoadingNext = value;
    }

    function setValues(value) {
      self.values = value;
    }

    function setNextPage(value) {
      self.nextPage = value;
    }

    const fetchVacancies = flow(function* (isFetchNextPage?: boolean) {
      if (isFetchNextPage) {
        setIsLoadingNext(true);
      } else {
        setIsLoading(true);
      }

      const {
        fieldsStore,
      } = rootStoreFiltersModalVacanciesPage;

      const filters = { ...fieldsStore.filters };

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
        byCourse: filters.byCourse
          ? filters.byCourse.id
          : null,
        page: isFetchNextPage
          ? self.nextPage
          : null,
      });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        const localStorageVacancies = localStorage.getItem('visitedVacancies');
        const visitedVacancyIds = localStorageVacancies
          ? JSON.parse(localStorageVacancies)
          : [];

        const formedResults = data.results.vacancies.map(vacancy => ({
          ...vacancy,
          isRead: visitedVacancyIds.includes(vacancy.id),
        }));

        setValues(isFetchNextPage
          ? [...self.values, ...formedResults]
          : formedResults);
        setNextPage(data.next);
      }
      if (isFetchNextPage) {
        setIsLoadingNext(false);
      } else {
        setIsLoading(false);
      }
    });

    return {
      setIsLoading,
      setIsLoadingNext,
      setValues,
      setNextPage,
      fetchVacancies,
    };
  });

export const vacanciesStoreMainPage = VacanciesStoreModel.create();
