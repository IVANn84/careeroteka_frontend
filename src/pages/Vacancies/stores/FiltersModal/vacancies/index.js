import { types } from 'mobx-state-tree';

import views from './views';
import actions from './actions';

export const SalaryDataModel = types
  .model('SalaryData', {
    count: types.number,
    salary: types.number,
  });

export const FiltersModalVacanciesStoreModel = types
  .model('Vacancies', {
    isLoading: types.optional(types.boolean, true),
    vacancyList: types.optional(types.array(SalaryDataModel), []),
  })
  .actions(actions)
  .views(views);

export const filtersModalVacanciesStoreVacanciesPage = FiltersModalVacanciesStoreModel.create();
