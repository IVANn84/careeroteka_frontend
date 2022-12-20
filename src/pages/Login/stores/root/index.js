import {types} from 'mobx-state-tree';

import actions from './actions';

export const RootStore = types
    .model('Root', {
        isLoading: types.optional(types.boolean, false),
        error: types.maybeNull(types.string),
    })
    .actions(actions);

export default RootStore.create();