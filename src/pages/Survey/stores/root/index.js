import {types} from 'mobx-state-tree';

import actions from './actions';

import {stepsStoreSurveyPage, StepsStoreModel} from '../steps';
import {citiesStoreSurveyPage, CitiesStoreModel} from '../cities';
import {gradesStoreSurveyPage, GradesStoreModel} from '../grades';
import {directionsStoreSurveyPage, DirectionsStoreModel} from '../directions';
import {skillsStoreSurveyPage, SkillsStoreModel} from '../skills';

export const RootStore = types
    .model('Root', {
        step: types.optional(types.number, 0),
        stepsStore: types.maybe(StepsStoreModel),
        citiesStore: types.maybe(CitiesStoreModel),
        gradesStore: types.maybe(GradesStoreModel),
        directionsStore: types.maybe(DirectionsStoreModel),
        skillsStore: types.maybe(SkillsStoreModel),
    })
    .actions(actions);

export const rootStoreSurveyPage = RootStore.create({
    stepsStore: stepsStoreSurveyPage,
    citiesStore: citiesStoreSurveyPage,
    gradesStore: gradesStoreSurveyPage,
    directionsStore: directionsStoreSurveyPage,
    skillsStore: skillsStoreSurveyPage,
});