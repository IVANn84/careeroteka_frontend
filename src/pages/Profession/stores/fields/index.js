import {types} from 'mobx-state-tree';

import actions from './actions';

export const FieldsStore = types
    .model('Fields', {
        directionId: types.maybeNull(types.number),
        directionName: types.maybeNull(types.string),
        directionDescription: types.maybeNull(types.string),
        gradeId: types.optional(types.number, 3),
        gradeName: types.optional(types.string, 'Middle'),
    })
    .actions(actions);

export default FieldsStore.create();