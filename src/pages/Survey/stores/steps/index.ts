import {
  applySnapshot, cast, flow, types,
} from 'mobx-state-tree';
import { deepmerge } from 'deepmerge-ts';

import { debounce } from 'Util/debounce';
import { areasStoreSurveyPage } from 'Page/Survey/stores/areas';
import { rootStoreLayoutComponent } from 'Component/Layout/stores/root';
import SurveyApi from 'Api/survey';
import ReviewApi from 'Api/review';

import { SkillModel, skillsStoreSurveyPage } from '../skills';

export const ReviewTypeModel = types.model('ReviewType', {
  id: types.number,
  name: types.string,
  description: types.string,
  value: types.number,
});

export const SupportDataModel = types.model('SupportData', {
  areaSearch: types.maybeNull(types.string),
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
  area: types.maybeNull(types.string),
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
    area: types.maybeNull(types.string),
  }), {}),
  step_3: types.maybeNull(types.string),
  step_4: types.maybeNull(types.string),
});

export const StepsStoreModel = types
  .model('Steps', {
    isLoading: types.optional(types.boolean, false),
    step: types.optional(types.number, 0),
    isEditData: types.optional(types.boolean, false),
    stepsData: types.optional(StepsDataModel, {}),
    supportData: types.optional(SupportDataModel, {}),
    errors: types.optional(ErrorsModel, {}),
  })
  .actions(self => {
    const debouncedFetchAreas = debounce(() => areasStoreSurveyPage.fetchAreas(), 300);
    const debouncedFetchSkills = debounce(() => skillsStoreSurveyPage.fetchSkills(), 300);

    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setIsEditData(value) {
      self.isEditData = value;
    }

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

    function setSupportSkillSearch(value) {
      self.supportData.skillSearch = value;

      debouncedFetchSkills(self);
    }

    function clearSupportData() {
      self.supportData = {
        areaSearch: null,
        skillSearch: null,
      };
    }

    function selectSkill(value) {
      const skills = self.stepsData[3];

      if (skills.some(({ id }) => id === value.id)) {
        self.stepsData[3] = cast(skills.filter(({ id }) => id !== value.id));
      } else {
        self.stepsData[3] = cast([...self.stepsData[3], value]);
      }

      this.setErrors({
        step_3: null,
      });
    }

    function rateReviewType(reviewId, value) {
      self.stepsData[4] = cast(self.stepsData[4].map(reviewType => (reviewType.id === reviewId
        ? { ...reviewType, value }
        : reviewType)));

      this.setErrors({
        step_4: null,
      });
    }

    const fetchStepData = flow(function* () {
      // Доступные критерии оценки
      const reviewTypes = self.step === 4
        ? yield ReviewApi.FetchTypesList().then(({ data }) => data)
        : [];

      if (self.step > 0) {
        if (rootStoreLayoutComponent.isAuth) {
          // Получаем с бэка
          const { data } = yield SurveyApi.GetStep(1, `step_${self.step}`);

          if (self.step === 4) {
            // Соединяем оценки профессии с существующими критериями оценки
            // P.S. делаем по name, тк с бэка id не совпадает из-за различий модели
            // но в будущем желательно переделать
            applySnapshot(self.stepsData[self.step], reviewTypes.map(reviewType => ({
              ...reviewType,
              value: data?.find(({ name }) => name === reviewType.name)?.value || 0,
            })));
          } else if (data) {
            applySnapshot(self.stepsData[self.step], data);
          }

          setIsEditData(!!data);
        } else {
          // Получаем из localStorage
          const savedData = JSON.parse(localStorage.getItem('survey1StepsData')) || {};

          if (self.step === 4) {
            applySnapshot(self.stepsData[self.step], reviewTypes.map(reviewType => ({
              ...reviewType,
              value: savedData[self.step]?.find(({ name }) => name === reviewType.name)?.value || 0,
            })));
          } else if (savedData[self.step]) {
            applySnapshot(self.stepsData[self.step], savedData[self.step]);
          }
        }
      }
    });

    const saveStepData = flow(function* () {
      const data = self.stepsData[self.step];

      if (self.step > 0) {
        if (rootStoreLayoutComponent.isAuth) {
          // Сохраняем на бэке
          const { errors } = self.isEditData
            ? yield SurveyApi.EditStep(1, `step_${self.step}`, data)
            : yield SurveyApi.SaveStep(1, `step_${self.step}`, data);

          if (errors) {
            return false;
          }
        } else {
          // Сохраняем в localStorage
          const savedData = JSON.parse(localStorage.getItem('survey1StepsData')) || {};
          savedData[self.step] = data;
          localStorage.setItem('survey1StepsData', JSON.stringify(savedData));
        }
      }

      return true;
    });

    function setOnlyStep(value) {
      self.step = value;
    }

    const setStep = flow(function* (value) {
      setIsLoading(true);

      const isSaved = yield saveStepData();

      if (isSaved) {
        setOnlyStep(value);
        yield fetchStepData();
      }

      setIsLoading(false);
    });

    return {
      setIsLoading,
      setIsEditData,
      setErrors,
      setStepData,
      setSupportAreaSearch,
      setSupportSkillSearch,
      clearSupportData,
      selectSkill,
      rateReviewType,
      setOnlyStep,
      fetchStepData,
      saveStepData,
      setStep,
    };
  })
  .views(self => ({
    isStepValid(step) {
      switch (step) {
        case 1:
          return self.stepsData[step].name
            && self.stepsData[step].city
            && self.stepsData[step].job
            && self.stepsData[step].position;

        case 2:
          return self.stepsData[step].area;

        case 3:
          return self.stepsData[step].length;

        case 4:
          return self.stepsData[step].every(item => item.value);

        default:
          return true;
      }
    },
  }));

export const stepsStoreSurveyPage = StepsStoreModel.create();
