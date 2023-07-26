import { types } from 'mobx-state-tree';

import { VacancyModel } from 'Page/Vacancies/stores/vacancies';

import actions from './actions';

export const VacanciesStoreModel = types
  .model('Vacancies', {
    isLoading: types.optional(types.boolean, true),
    values: types.optional(types.array(VacancyModel), []),
  })
  .actions(actions);

export const vacanciesStoreVacancyPage = VacanciesStoreModel.create();
