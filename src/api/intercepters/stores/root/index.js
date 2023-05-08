import { types } from 'mobx-state-tree';

import actions from './actions';

export const RootStoreModel = types
  .model('Root', {
    // Флаг, обозначающий, что необходимо редиректнуть на страницу авторизации
    // (используется в компоненте Layout)
    isRedirectToLogin: types.optional(types.boolean, false),
  })
  .actions(actions);

export const rootStoreInterceptersApi = RootStoreModel.create();
