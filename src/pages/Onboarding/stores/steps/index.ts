import {
  applySnapshot, flow, types,
} from 'mobx-state-tree';
import { deepmerge } from 'deepmerge-ts';

import { debounce } from 'Util/debounce';
import { areasStoreOnboardingPage } from 'Page/Onboarding/stores/areas';
import { axiosWithConverter } from 'ApiDir/axiosWithConverter';
import OnboardingApi from 'Api/onboarding';

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
    step: types.optional(types.number, 1),
    isDone: types.optional(types.boolean, false),
    isLoading: types.optional(types.boolean, false),
    isEditData: types.optional(types.boolean, false),
    stepsData: types.optional(StepsDataModel, {}),
    supportData: types.optional(SupportDataModel, {}),
    errors: types.optional(ErrorsModel, {}),
  })
  .actions(self => {
    const debouncedFetchAreas = debounce(() => areasStoreOnboardingPage.fetchAreas(), 300);

    function setIsDone(value) {
      self.isDone = value;
    }

    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setIsEditData(value) {
      self.isEditData = value;
    }

    const fetchStepData = flow(function* () {
      const { data } = yield OnboardingApi.GetStep(`step_${self.step}`);

      if (self.step === 1 && data?.resume) {
        const resumeName = decodeURIComponent(data.resume)
          .split('/')
          .pop();

        const { data: resume } = yield axiosWithConverter.get(data.resume, { responseType: 'arraybuffer' });

        applySnapshot(self.stepsData[self.step], {
          ...data,
          resume: new File([resume], resumeName),
        });
      } else if (data) {
        applySnapshot(self.stepsData[self.step], data);
      }

      setIsEditData(!!data);
    });

    const saveStepData = flow(function* () {
      const formData = new FormData();
      const data = self.stepsData[self.step];

      if (self.step === 1) {
        for (const key of Object.keys(data)) {
          if (key !== 'resume' || data[key]) {
            formData.append(key, data[key]);
          }
        }
      }

      // Сохраняем на бэке
      const { errors } = self.isEditData
        ? yield OnboardingApi.EditStep(`step_${self.step}`, self.step === 1
          ? formData
          : data)
        : yield OnboardingApi.SaveStep(`step_${self.step}`, self.step === 1
          ? formData
          : data);

      return !errors;
    });

    const setStep = flow(function* (value) {
      setIsLoading(true);

      const isSaved = yield saveStepData();

      if (isSaved) {
        self.step = value;
        yield fetchStepData();
      }

      setIsLoading(false);
    });

    function setErrors(errors) {
      self.errors = deepmerge(self.errors, errors);
    }

    function setStepData(step, field, value) {
      self.stepsData[step][field] = value;

      setErrors({
        [`step_${step}`]: {
          [field]: null,
        },
      });
    }

    function setSupportAreaSearch(value) {
      self.supportData.areaSearch = value;

      debouncedFetchAreas(self);
    }

    function setArea(value) {
      self.stepsData[2] = {
        id: value?.id || null,
        name: value?.name || null,
      };
    }

    function setQuestion(value) {
      self.stepsData[3] = {
        name: value,
      };
    }

    function clearSupportData() {
      self.supportData = { areaSearch: null };
    }

    return {
      setIsLoading,
      setIsEditData,
      setStepData,
      setSupportAreaSearch,
      setArea,
      setQuestion,
      clearSupportData,
      setErrors,
      setIsDone,
      setStep,
      fetchStepData,
      saveStepData,
    };
  })
  .views(self => ({
    isStepValid(step: 1 | 2 | 3) {
      switch (step) {
        case 1:
          return self.stepsData[step].firstName
            && self.stepsData[step].lastName
            && self.stepsData[step].city
            && self.stepsData[step].telegramUsername;

        case 2:
          return self.stepsData[step].id;

        default:
          return true;
      }
    },
  }));

export const stepsStoreOnboardingPage = StepsStoreModel.create();
