import { applySnapshot, flow, getSnapshot } from 'mobx-state-tree';

import OnboardingApi from 'Api/onboarding';

let initialState = {};

export default self => ({
  afterCreate() {
    initialState = getSnapshot(self);
  },

  reset() {
    applySnapshot(self, initialState);
  },

  setIsDone(value) {
    self.isDone = value;
  },

  setStep: flow(function* (value) {
    self.stepsStore.setIsLoading(true);

    const isSaved = yield self.stepsStore.saveStepData();

    if (isSaved) {
      self.step = value;
      yield self.stepsStore.fetchStepData();
    }

    self.stepsStore.setIsLoading(false);
  }),

  completeOnboarding: flow(function* () {
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
    self.setIsDone(true);
  }),
});
