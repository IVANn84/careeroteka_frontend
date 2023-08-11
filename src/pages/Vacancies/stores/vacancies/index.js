import { types } from 'mobx-state-tree';

import actions from './actions';

const VacancyAggregatorModel = types.model('VacancyAggregator', {
  id: types.number,
  name: types.string,
  icon: types.string,
});

export const VacancyModel = types.model('Vacancy', {
  id: types.number,
  company: types.string,
  name: types.string,
  city: types.string,
  salary: types.number,
  isRead: types.boolean,
  vacancyAggregators: types.array(VacancyAggregatorModel),
});

export const VacanciesStoreModel = types
  .model('Vacancies', {
    isLoading: types.optional(types.boolean, true),
    isLoadingNext: types.optional(types.boolean, false),
    values: types.optional(types.array(VacancyModel), []),
    nextPage: types.maybeNull(types.number),
  })
  .actions(actions);

export const vacanciesStoreMainPage = VacanciesStoreModel.create();
