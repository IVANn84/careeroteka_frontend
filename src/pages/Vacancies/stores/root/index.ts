import { applySnapshot, getSnapshot, types } from 'mobx-state-tree';

import { VacanciesStoreModel, vacanciesStoreMainPage } from '../vacancies';
// eslint-disable-next-line import/no-unresolved, @typescript-eslint/no-unused-vars
import { PartnerBannerModel, partnersStoreMainPage } from '../partner';
import { RootStoreFiltersModalModel, rootStoreFiltersModalVacanciesPage } from '../FiltersModal/root';

let initialState = {};

export const RootStoreModel = types
  .model('Root', {
    vacanciesStore: types.maybe(VacanciesStoreModel),
    filtersModalStore: types.maybe(RootStoreFiltersModalModel),
    partnersStore: types.maybe(PartnerBannerModel),
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
  partnersStore: partnersStoreMainPage,
});
