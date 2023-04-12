import {types} from 'mobx-state-tree';

import actions from './actions';

export const UserModel = types
    .model('User', {
        id: types.number,
        email: types.string,
        firstName: types.maybeNull(types.string),
        lastName: types.maybeNull(types.string),
        isOnboardingDone: types.boolean,
        isEmailConfirmed: types.optional(types.boolean, false),
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