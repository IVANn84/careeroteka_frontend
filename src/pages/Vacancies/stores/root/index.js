import { types } from 'mobx-state-tree';

import actions from './actions';
import { VacanciesStoreModel, vacanciesStoreMainPage } from '../vacancies';
import { RootStoreFiltersModalModel, rootStoreFiltersModalVacanciesPage } from '../FiltersModal/root';

export const RootStoreModel = types
  .model('Root', {
    vacanciesStore: types.maybe(VacanciesStoreModel),
    filtersModalStore: types.maybe(RootStoreFiltersModalModel),
  })
  .actions(actions);

export const rootStoreVacanciesPage = RootStoreModel.create({
  vacanciesStore: vacanciesStoreMainPage,
  filtersModalStore: rootStoreFiltersModalVacanciesPage,
});
