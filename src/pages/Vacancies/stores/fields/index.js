import { types } from 'mobx-state-tree';

import actions from './actions';

export const FieldsStoreModel = types
  .model('Fields', {
    searchVacancy: types.maybeNull(types.string),
    gradeId: types.maybeNull(types.number),
    gradeName: types.maybeNull(types.string),
  })
  .actions(actions);

export const fieldsStoreVacanciesPage = FieldsStoreModel.create();
