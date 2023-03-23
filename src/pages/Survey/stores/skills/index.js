import {types} from 'mobx-state-tree';

import actions from './actions';
import views from './views';

export const SkillModel = types.model('Skill', {
    id: types.number,
    name: types.string,
});

export const SkillsStoreModel = types
    .model('Skills', {
        isLoading: types.optional(types.boolean, false),
        values: types.optional(types.array(SkillModel), []),
    })
    .actions(actions)
    .views(views);

export const skillsStoreSurveyPage = SkillsStoreModel.create();