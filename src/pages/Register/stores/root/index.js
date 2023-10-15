import { types } from 'mobx-state-tree';

import { fieldsStoreRegisterPage, FieldsStoreModel } from 'Page/Register/stores/fields';
import actions from './actions';

const ErrorsModel = types
  .model('Errors', {
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    confirmPassword: types.maybeNull(types.string),
  });

export const RootStoreModel = types
  .model('Root', {
    isLoading: types.optional(types.boolean, false),
    errors: types.optional(ErrorsModel, {}),
    fieldsStore: types.maybe(FieldsStoreModel),
  })
  .actions(actions);

export const rootStoreRegisterPage = RootStoreModel.create({
  fieldsStore: fieldsStoreRegisterPage,
});
