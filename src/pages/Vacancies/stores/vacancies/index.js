import { types } from 'mobx-state-tree';

import actions from './actions';

const SalaryModel = types.model('Salary', {
  minValue: types.maybeNull(types.number),
  maxValue: types.maybeNull(types.number),
  currency: types.model('Currency', {
    code: types.string,
  }),
});

export const VacancyModel = types.model('Vacancy', {
  id: types.number,
  company: types.string,
  name: types.string,
  city: types.string,
  salary: types.maybeNull(types.union(SalaryModel, types.number)),
  isRead: types.maybeNull(types.boolean),
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
