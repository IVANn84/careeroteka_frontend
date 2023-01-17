import {types} from 'mobx-state-tree';

import actions from './actions';

export const User = types
    .model('User', {
        id: types.number,
        username: types.string,
        email: types.string,
        firstName: types.string,
        lastName: types.string,
    });

export const RootStore = types
    .model('Root', {
        isLoading: types.optional(types.boolean, true),
        error: types.maybeNull(types.string),
        isAuth: types.optional(types.boolean, false),
        currentUser: types.maybeNull(User),
    })
    .actions(actions);

export default RootStore.create();