import { types } from 'mobx-state-tree';

import actions from './actions';

export const FiltersModalFieldsStoreModel = types
  .model('Fields', {
    typeVacancy: types.optional(types.number, 1),
    searchWords: types.maybeNull(types.string),
    searchAt: types.optional(types.array(types.number), []),
    excludeWords: types.maybeNull(types.string),
    excludeAt: types.optional(types.array(types.number), []),
    minSalary: types.optional(types.number, 0),
    maxSalary: types.maybeNull(types.number),
    gradesVacancy: types.optional(types.array(types.number), []),
    workFormats: types.optional(types.array(types.number), []),
    employmentFormats: types.optional(types.array(types.number), []),
  })
  .actions(actions);

export const filtersModalFieldsStoreVacanciesPage = FiltersModalFieldsStoreModel.create();
