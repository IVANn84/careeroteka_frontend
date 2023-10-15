import { types } from 'mobx-state-tree';

import { FieldsStoreModel, fieldsStoreLoginPage } from 'Page/Login/stores/fields';

import actions from './actions';

export const RootStoreModel = types
  .model('Root', {
    isLoading: types.optional(types.boolean, false),
    isLoaded: types.optional(types.boolean, false),
    error: types.maybeNull(types.string),
    fieldsStore: types.maybe(FieldsStoreModel),
  })
  .actions(actions);

export const rootStoreLoginPage = RootStoreModel.create({
  fieldsStore: fieldsStoreLoginPage,
});
