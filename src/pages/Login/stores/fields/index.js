import { types } from 'mobx-state-tree';

import actions from './actions';

export const FieldsStoreModel = types
  .model('Fields', {
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
  })
  .actions(actions);

export const fieldsStoreLoginPage = FieldsStoreModel.create();
