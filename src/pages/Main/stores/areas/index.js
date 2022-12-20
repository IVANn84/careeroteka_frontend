import {types} from 'mobx-state-tree';

import actions from './actions';

export const Area = types.model('Area', {
    id: types.maybeNull(types.number),
    name: types.string,
});

export const AreasStore = types
    .model('Areas', {
        isLoading: types.optional(types.boolean, true),
        values: types.optional(types.array(Area), []),
    })
    .actions(actions);

export default AreasStore.create();