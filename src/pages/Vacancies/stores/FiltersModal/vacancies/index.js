import { types } from 'mobx-state-tree';

import actions from './actions';
import views from './views';

export const FiltersModalVacanciesStoreModel = types
  .model('Vacancies', {
    isLoading: types.optional(types.boolean, true),
    vacancyList: types.optional(types.array(types.number), []),
  })
  .actions(actions)
  .views(views);

export const filtersModalVacanciesStoreVacanciesPage = FiltersModalVacanciesStoreModel.create();
