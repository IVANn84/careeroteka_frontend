import { types } from 'mobx-state-tree';

import { fieldsStoreRegisterPage, FieldsStoreModel } from 'Page/Register/stores/fields';
import actions from './actions';

export const RootStoreModel = types
  .model('Root', {
    isLoading: types.optional(types.boolean, false),
    error: types.maybeNull(types.string),
    fieldsStore: types.maybe(FieldsStoreModel),
  })
  .actions(actions);

export const rootStoreRegisterPage = RootStoreModel.create({
  fieldsStore: fieldsStoreRegisterPage,
});
