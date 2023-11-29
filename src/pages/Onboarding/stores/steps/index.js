import { types } from 'mobx-state-tree';

import views from './views';
import actions from './actions';

export const SupportDataModel = types.model('SupportData', {
  areaSearch: types.maybeNull(types.string),
});

export const Step1Model = types.model('Step1', {
  firstName: types.maybeNull(types.string),
  lastName: types.maybeNull(types.string),
  city: types.maybeNull(types.string),
  telegramUsername: types.maybeNull(types.string),
  resume: types.maybeNull(types.frozen()),
});

export const Step2Model = types.model('Step2', {
  id: types.maybeNull(types.number),
  name: types.maybeNull(types.string),
});

export const Step3Model = types.model('Step3', {
  name: types.maybeNull(types.string),
});

export const StepsDataModel = types.model('StepsData', {
  1: types.optional(Step1Model, {}),
  2: types.optional(Step2Model, {}),
  3: types.optional(Step3Model, {}),
});

export const ErrorsModel = types.model('Errors', {
  step_1: types.optional(types.model({
    firstName: types.maybeNull(types.string),
    lastName: types.maybeNull(types.string),
    city: types.maybeNull(types.string),
    telegramUsername: types.maybeNull(types.string),
    resume: types.maybeNull(types.string),
  }), {}),
  step_2: types.optional(types.model({
    id: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
  }), {}),
  step_3: types.optional(types.model({
    name: types.maybeNull(types.string),
  }), {}),
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

export const stepsStoreOnboardingPage = StepsStoreModel.create();
