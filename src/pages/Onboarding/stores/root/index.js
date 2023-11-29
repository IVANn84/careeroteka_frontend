import { types } from 'mobx-state-tree';

import actions from './actions';
import { StepsStoreModel, stepsStoreOnboardingPage } from '../steps';
import { CitiesStoreModel, citiesStoreOnboardingPage } from '../cities';
import { AreasStoreModel, areasStoreOnboardingPage } from '../areas';

export const RootStore = types
  .model('Root', {
    step: types.optional(types.number, 1),
    stepsStore: types.maybe(StepsStoreModel),
    citiesStore: types.maybe(CitiesStoreModel),
    areasStore: types.maybe(AreasStoreModel),
    isDone: types.optional(types.boolean, false),
  })
  .actions(actions);

export const rootStoreOnboardingPage = RootStore.create({
  stepsStore: stepsStoreOnboardingPage,
  citiesStore: citiesStoreOnboardingPage,
  areasStore: areasStoreOnboardingPage,
});
