import {types} from 'mobx-state-tree';

import actions from './actions';

const GradeModel = types.model('Grade', {
    id: types.number,
    name: types.string,
});

export const GradesStoreModel = types
    .model('Grades', {
        isLoading: types.optional(types.boolean, true),
        values: types.optional(types.array(GradeModel), []),
    })
    .actions(actions);

export const gradesStoreSurveyPage = GradesStoreModel.create();