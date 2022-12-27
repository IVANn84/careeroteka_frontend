import {types} from 'mobx-state-tree';

import actions from './actions';

export const FieldsStore = types
    .model('Fields', {
        searchProfession: types.maybeNull(types.string),
        areaId: types.maybeNull(types.number),
        areaName: types.optional(types.string, 'Все направления'),
    })
    .actions(actions);

export default FieldsStore.create();