import { types } from 'mobx-state-tree';

import actions from './actions';
import { VacanciesStoreModel, vacanciesStoreVacancyPage } from '../vacancies';
import { EntityStoreModel, entityStoreVacancyPage } from '../entity';

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
