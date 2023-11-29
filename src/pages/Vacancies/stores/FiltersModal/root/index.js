import { types } from 'mobx-state-tree';

import actions from './actions';
import { FiltersModalVacanciesStoreModel, filtersModalVacanciesStoreVacanciesPage } from '../vacancies';
import { FiltersModalFieldsStoreModel, filtersModalFieldsStoreVacanciesPage } from '../fields';
import { FiltersModalAverageSalaryStoreModel, filtersModalAverageSalaryStoreVacanciesPage } from '../averageSalary';

export const RootStoreFiltersModalModel = types
  .model('Root', {
    isFiltersChanged: types.optional(types.boolean, false),
    fieldsStore: types.maybe(FiltersModalFieldsStoreModel),
    vacanciesStore: types.maybe(FiltersModalVacanciesStoreModel),
    averageSalaryStore: types.maybe(FiltersModalAverageSalaryStoreModel),
  })
  .actions(actions);

export const rootStoreFiltersModalVacanciesPage = RootStoreFiltersModalModel.create({
  fieldsStore: filtersModalFieldsStoreVacanciesPage,
  vacanciesStore: filtersModalVacanciesStoreVacanciesPage,
  averageSalaryStore: filtersModalAverageSalaryStoreVacanciesPage,
});
