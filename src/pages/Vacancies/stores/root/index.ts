import { applySnapshot, getSnapshot, types } from 'mobx-state-tree';

import { VacanciesStoreModel, vacanciesStoreMainPage } from '../vacancies';
import { RootStoreFiltersModalModel, rootStoreFiltersModalVacanciesPage } from '../FiltersModal/root';

let initialState = {};

export const RootStoreModel = types
  .model('Root', {
    vacanciesStore: types.maybe(VacanciesStoreModel),
    filtersModalStore: types.maybe(RootStoreFiltersModalModel),
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

export const rootStoreVacanciesPage = RootStoreModel.create({
  vacanciesStore: vacanciesStoreMainPage,
  filtersModalStore: rootStoreFiltersModalVacanciesPage,
});
