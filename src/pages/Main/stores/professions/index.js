import {types} from 'mobx-state-tree';

import actions from './actions';

const ProfessionModel = types.model('Profession', {
    id: types.number,
    name: types.string,
    salaryMinValue: types.number,
    countDirections: types.number,
});

export const ProfessionsStoreModel = types
    .model('Professions', {
        isLoading: types.optional(types.boolean, true),
        isLoadingNext: types.optional(types.boolean, false),
        values: types.optional(types.array(ProfessionModel), []),
        nextPage: types.maybeNull(types.number),
    })
    .actions(actions);

export const professionsStoreMainPage = ProfessionsStoreModel.create();