import { applySnapshot, getSnapshot, types } from 'mobx-state-tree';

import { FiltersModalVacanciesStoreModel, filtersModalVacanciesStoreVacanciesPage } from '../vacancies';
import { FiltersModalFieldsStoreModel, filtersModalFieldsStoreVacanciesPage } from '../fields';
import { FiltersModalAverageSalaryStoreModel, filtersModalAverageSalaryStoreVacanciesPage } from '../averageSalary';

let initialState = {};

export const RootStoreFiltersModalModel = types
  .model('Root', {
    fieldsStore: types.maybe(FiltersModalFieldsStoreModel),
    vacanciesStore: types.maybe(FiltersModalVacanciesStoreModel),
    averageSalaryStore: types.maybe(FiltersModalAverageSalaryStoreModel),
  })
  .actions(self => {
    function afterCreate() {
      initialState = getSnapshot(self);
    }

    function reset() {
      applySnapshot(self, initialState);
    }

    return {
      afterCreate,
      reset,
    };
  });

export const rootStoreFiltersModalVacanciesPage = RootStoreFiltersModalModel.create({
  fieldsStore: filtersModalFieldsStoreVacanciesPage,
  vacanciesStore: filtersModalVacanciesStoreVacanciesPage,
  averageSalaryStore: filtersModalAverageSalaryStoreVacanciesPage,
});
