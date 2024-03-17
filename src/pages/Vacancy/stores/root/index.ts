import { applySnapshot, getSnapshot, types } from 'mobx-state-tree';

import { VacanciesStoreModel, vacanciesStoreVacancyPage } from '../vacancies';
import { EntityStoreModel, entityStoreVacancyPage } from '../entity';

let initialState = {};

export const RootStore = types
  .model('Root', {
    entityStore: types.maybe(EntityStoreModel),
    vacanciesStore: types.maybe(VacanciesStoreModel),
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

export const rootStoreVacancyPage = RootStore.create({
  entityStore: entityStoreVacancyPage,
  vacanciesStore: vacanciesStoreVacancyPage,
});
