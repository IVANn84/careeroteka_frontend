import {types} from 'mobx-state-tree';

import actions from './actions';

import {stepsStoreSurveyPage, StepsStoreModel} from '../steps';
import {citiesStoreSurveyPage, CitiesStoreModel} from '../cities';
import {areasStoreSurveyPage, AreasStoreModel} from '../areas';
import {skillsStoreSurveyPage, SkillsStoreModel} from '../skills';

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