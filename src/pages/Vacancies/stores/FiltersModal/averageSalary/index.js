import { types } from 'mobx-state-tree';

import actions from './actions';

const AverageSalaryDataModel = types.model('AverageSalaryData', {
  vacancy: types.maybeNull(types.number),
  internship: types.maybeNull(types.number),
  freelance: types.maybeNull(types.number),
});

export const FiltersModalAverageSalaryStoreModel = types
  .model('AverageSalary', {
    isLoading: types.optional(types.boolean, true),
    averageSalaryData: types.optional(AverageSalaryDataModel, {}),
  })
  .actions(actions);

export const filtersModalAverageSalaryStoreVacanciesPage = FiltersModalAverageSalaryStoreModel
  .create();
