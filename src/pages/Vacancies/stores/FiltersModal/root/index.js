import { types } from 'mobx-state-tree';

import { filtersModalFieldsStoreVacanciesPage, FiltersModalFieldsStoreModel } from '../fields';
import { filtersModalVacanciesStoreVacanciesPage, FiltersModalVacanciesStoreModel } from '../vacancies';
import actions from './actions';

export const RootStoreFiltersModalModel = types
  .model('Root', {
    fieldsStore: types.maybe(FiltersModalFieldsStoreModel),
    vacanciesStore: types.maybe(FiltersModalVacanciesStoreModel),
  })
  .actions(actions);

export const rootStoreFiltersModalVacanciesPage = RootStoreFiltersModalModel.create({
  fieldsStore: filtersModalFieldsStoreVacanciesPage,
  vacanciesStore: filtersModalVacanciesStoreVacanciesPage,
});
