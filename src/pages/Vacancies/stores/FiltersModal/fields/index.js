import { types } from 'mobx-state-tree';

import actions from './actions';

export const FiltersModalFieldsStoreModel = types
  .model('Fields', {
    // type: types.maybeNull(types.string),
    type: types.optional(types.string, 'vacancy'),
    searchValues: types.maybeNull(types.string),
    isAbroad: types.maybeNull(types.boolean),
    searchBy: types.optional(types.array(types.string), []),
    excludeValues: types.maybeNull(types.string),
    excludeBy: types.optional(types.array(types.string), []),
    minSalary: types.optional(types.number, 0),
    maxSalary: types.maybeNull(types.number),
    experience: types.optional(types.array(types.string), []),
    workFormat: types.optional(types.array(types.string), []),
    employmentFormat: types.optional(types.array(types.string), []),
    contractType: types.optional(types.array(types.string), []),
    companySize: types.optional(types.array(types.string), []),
    hasInsurance: types.maybeNull(types.boolean),
    isAccredited: types.maybeNull(types.boolean),
    isRelocationRequired: types.maybeNull(types.boolean),
    source: types.maybeNull(types.string),
  })
  .actions(actions);

export const filtersModalFieldsStoreVacanciesPage = FiltersModalFieldsStoreModel.create();
