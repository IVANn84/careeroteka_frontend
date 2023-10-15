import { types } from 'mobx-state-tree';

import views from './views';
import actions from './actions';

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
