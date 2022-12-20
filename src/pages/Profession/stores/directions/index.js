import {types} from 'mobx-state-tree';

import actions from './actions';

export const Direction = types.model('Direction', {
    id: types.maybeNull(types.number),
    name: types.string,
    description: types.string,
});

export const DirectionsStore = types
    .model('Directions', {
        isLoading: types.optional(types.boolean, true),
        values: types.optional(types.array(Direction), []),
    })
    .actions(actions);

export default DirectionsStore.create();