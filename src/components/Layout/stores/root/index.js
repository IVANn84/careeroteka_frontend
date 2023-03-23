import {types} from 'mobx-state-tree';

import actions from './actions';

export const UserModel = types
    .model('User', {
        id: types.number,
        username: types.string,
        email: types.string,
        firstName: types.string,
        lastName: types.string,
    });

export const RootStoreModel = types
    .model('Root', {
        isLoading: types.optional(types.boolean, true),
        error: types.maybeNull(types.string),
        isAuth: types.optional(types.boolean, false),
        currentUser: types.maybeNull(UserModel),
    })
    .actions(actions);

export const rootStoreLayoutComponent = RootStoreModel.create();