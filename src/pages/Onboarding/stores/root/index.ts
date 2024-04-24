import {
  applySnapshot, flow, getSnapshot, types,
} from 'mobx-state-tree';

import OnboardingApi from 'Api/onboarding';

import { StepsStoreModel, stepsStoreOnboardingPage } from '../steps';
import { CitiesStoreModel, citiesStoreOnboardingPage } from '../cities';
import { AreasStoreModel, areasStoreOnboardingPage } from '../areas';

let initialState = {};

export const RootStoreModel = types
  .model('Root', {
    stepsStore: types.maybe(StepsStoreModel),
    citiesStore: types.maybe(CitiesStoreModel),
    areasStore: types.maybe(AreasStoreModel),
  })
  .actions(self => {
    function afterCreate() {
      initialState = getSnapshot(self);
    }

    function reset() {
      applySnapshot(self, initialState);
    }

    const completeOnboarding = flow(function* () {
      const isSaved = yield self.stepsStore.saveStepData();

      if (!isSaved) {
        return;
      }

      self.stepsStore.setIsLoading(true);

      const data = {
        step_1: { ...self.stepsStore.stepsData[1] },
        step_2: self.stepsStore.stepsData[2],
        step_3: self.stepsStore.stepsData[3],
      };

      delete data.step_1.resume;

      const { errors } = yield OnboardingApi.SaveOnboarding(data);

      if (errors) {
        self.stepsStore.setIsLoading(false);
        self.stepsStore.setErrors(errors);
        // eslint-disable-next-line no-alert
        alert(
          Object.entries(errors)
            .map(([keyStep, error]) => Object.entries(error)
              .map(([keyField, text]) => `${keyStep}: ${keyField}: ${text}`))
            .join('\n'),
        );
        return;
      }

      self.stepsStore.setIsLoading(false);
      self.stepsStore.setIsDone(true);
    });

    return {
      afterCreate,
      reset,
      completeOnboarding,
    };
  });

export const rootStoreOnboardingPage = RootStoreModel.create({
  stepsStore: stepsStoreOnboardingPage,
  citiesStore: citiesStoreOnboardingPage,
  areasStore: areasStoreOnboardingPage,
});
