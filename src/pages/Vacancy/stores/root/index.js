import { types } from 'mobx-state-tree';

import { entityStoreVacancyPage, EntityStoreModel } from '../entity';
import { vacanciesStoreVacancyPage, VacanciesStoreModel } from '../vacancies';
import actions from './actions';

export const RootStore = types
  .model('Root', {
    entityStore: types.maybe(EntityStoreModel),
    vacanciesStore: types.maybe(VacanciesStoreModel),
  })
  .actions(actions);

export const rootStoreVacancyPage = RootStore.create({
  entityStore: entityStoreVacancyPage,
  vacanciesStore: vacanciesStoreVacancyPage,
});
