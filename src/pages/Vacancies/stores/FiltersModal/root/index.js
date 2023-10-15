import { types } from 'mobx-state-tree';

import actions from './actions';
import { FiltersModalVacanciesStoreModel, filtersModalVacanciesStoreVacanciesPage } from '../vacancies';
import { FiltersModalFieldsStoreModel, filtersModalFieldsStoreVacanciesPage } from '../fields';

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
