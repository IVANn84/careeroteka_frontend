import {types} from 'mobx-state-tree';

import actions from './actions';

const Profession = types.model('Profession', {
    id: types.number,
    name: types.string,
    salaryMinValue: types.number,
    countDirections: types.number,
});

export const ProfessionsStore = types
    .model('Professions', {
        isLoading: types.optional(types.boolean, true),
        isLoadingNext: types.optional(types.boolean, false),
        values: types.optional(types.array(Profession), []),
        nextPage: types.maybeNull(types.number),
    })
    .actions(actions);

export default ProfessionsStore.create();