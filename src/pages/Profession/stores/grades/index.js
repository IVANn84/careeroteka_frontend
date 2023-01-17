import {types} from 'mobx-state-tree';

import actions from './actions';

const Grade = types.model('Grade', {
    id: types.number,
    name: types.string,
});

export const GradesStore = types
    .model('Grades', {
        isLoading: types.optional(types.boolean, true),
        values: types.optional(types.array(Grade), []),
    })
    .actions(actions);

export default GradesStore.create();