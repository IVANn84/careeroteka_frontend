import { types } from 'mobx-state-tree';

import actions from './actions';
import { StepsStoreModel, stepsStoreSurveyPage } from '../steps';
import { SkillsStoreModel, skillsStoreSurveyPage } from '../skills';
import { CitiesStoreModel, citiesStoreSurveyPage } from '../cities';
import { AreasStoreModel, areasStoreSurveyPage } from '../areas';

export const RootStore = types
  .model('Root', {
    step: types.optional(types.number, 0),
    stepsStore: types.maybe(StepsStoreModel),
    citiesStore: types.maybe(CitiesStoreModel),
    areasStore: types.maybe(AreasStoreModel),
    skillsStore: types.maybe(SkillsStoreModel),
  })
  .actions(actions);

export const rootStoreSurveyPage = RootStore.create({
  stepsStore: stepsStoreSurveyPage,
  citiesStore: citiesStoreSurveyPage,
  areasStore: areasStoreSurveyPage,
  skillsStore: skillsStoreSurveyPage,
});
