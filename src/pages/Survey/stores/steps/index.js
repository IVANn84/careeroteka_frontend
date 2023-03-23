import {types} from 'mobx-state-tree';

import actions from './actions';
import views from './views';

import {SkillModel} from '../skills';

export const ReviewTypeModel = types.model('ReviewType', {
    id: types.number,
    name: types.string,
    description: types.string,
    value: types.number,
});

export const SupportDataModel = types.model('SupportData', {
    directionSearch: types.maybeNull(types.string),
    skillSearch: types.maybeNull(types.string),
});

export const Step1Model = types.model('Step1', {
    name: types.maybeNull(types.string),
    city: types.maybeNull(types.string),
    job: types.maybeNull(types.string),
    position: types.maybeNull(types.string),
    link: types.maybeNull(types.string),
});

export const Step2Model = types.model('Step2', {
    direction: types.maybeNull(types.string),
    grade: types.maybeNull(types.string),
});

export const StepsDataModel = types.model('StepsData', {
    1: types.optional(Step1Model, {}),
    2: types.optional(Step2Model, {}),
    3: types.optional(types.array(SkillModel), []),
    4: types.optional(types.array(ReviewTypeModel), []),
});

export const ErrorsModel = types.model('Errors', {
    step_1: types.optional(types.model({
        name: types.maybeNull(types.string),
        city: types.maybeNull(types.string),
        job: types.maybeNull(types.string),
        position: types.maybeNull(types.string),
        link: types.maybeNull(types.string),
    }), {}),
    step_2: types.optional(types.model({
        direction: types.maybeNull(types.string),
        grade: types.maybeNull(types.string),
    }), {}),
    step_3: types.maybeNull(types.string),
    step_4: types.maybeNull(types.string),
});

export const StepsStoreModel = types
    .model('Steps', {
        isLoading: types.optional(types.boolean, false),
        isEditData: types.optional(types.boolean, false),
        stepsData: types.optional(StepsDataModel, {}),
        supportData: types.optional(SupportDataModel, {}),
        errors: types.optional(ErrorsModel, {}),
    })
    .actions(actions)
    .views(views);

export const stepsStoreSurveyPage = StepsStoreModel.create();