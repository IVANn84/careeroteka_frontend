import { applySnapshot, flow, getParent } from 'mobx-state-tree';

import { objectDeepMerge } from 'Util/objectDeepMerge';
import { debounce } from 'Util/debounce';
import { axiosWithConverter } from 'ApiDir/axiosWithConverter';
import OnboardingApi from 'Api/onboarding';

const debouncedFetchAreas = debounce(self => getParent(self).areasStore.fetchAreas(), 300);

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setIsEditData(value) {
    self.isEditData = value;
  },

  setStepData(step, field, value) {
    self.stepsData[step][field] = value;

    self.setErrors({
      [`step_${step}`]: {
        [field]: null,
      },
    });
  },

  setSupportAreaSearch(value) {
    self.supportData.areaSearch = value;

    debouncedFetchAreas(self);
  },

  setArea(value) {
    self.stepsData[2] = {
      id: value?.id || null,
      name: value?.name || null,
    };
  },

  setQuestion(value) {
    self.stepsData[3] = {
      name: value,
    };
  },

  clearSupportData() {
    self.supportData = {};
  },

  setErrors(errors) {
    self.errors = objectDeepMerge(self.errors, errors);
  },

  fetchStepData: flow(function* () {
    const { step } = getParent(self);

    const { data } = yield OnboardingApi.GetStep(`step_${step}`);

    if (step === 1 && data?.resume) {
      const resumeName = decodeURIComponent(data.resume)
        .split('/')
        .pop();

      const { data: resume } = yield axiosWithConverter.get(data.resume, { responseType: 'arraybuffer' });

      applySnapshot(self.stepsData[step], {
        ...data,
        resume: new File([resume], resumeName),
      });
    } else if (data) {
      applySnapshot(self.stepsData[step], data);
    }

    self.setIsEditData(!!data);
  }),

  saveStepData: flow(function* () {
    const { step } = getParent(self);
    const formData = new FormData();
    const data = self.stepsData[step];

    if (step === 1) {
      for (const key of Object.keys(data)) {
        if (key !== 'resume' || data[key]) {
          formData.append(key, data[key]);
        }
      }
    }

    // Сохраняем на бэке
    const { errors } = self.isEditData
      ? yield OnboardingApi.EditStep(`step_${step}`, step === 1
        ? formData
        : data)
      : yield OnboardingApi.SaveStep(`step_${step}`, step === 1
        ? formData
        : data);

    return !errors;
  }),
});
