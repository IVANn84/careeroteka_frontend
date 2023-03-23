import {types} from 'mobx-state-tree';

import actions from './actions';

export const AreaModel = types.model('Area', {
    id: types.maybeNull(types.number),
    name: types.string,
});

export const AreasStoreModel = types
    .model('Areas', {
        isLoading: types.optional(types.boolean, true),
        values: types.optional(types.array(AreaModel), []),
    })
    .actions(actions);

export const areasStoreMainPage = AreasStoreModel.create();