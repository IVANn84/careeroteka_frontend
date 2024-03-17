import {
  applySnapshot, flow, getSnapshot, types,
} from 'mobx-state-tree';

import { rootStoreLayoutComponent } from 'Component/Layout/stores/root';
import SurveyApi from 'Api/survey';

import { StepsStoreModel, stepsStoreSurveyPage } from '../steps';
import { SkillsStoreModel, skillsStoreSurveyPage } from '../skills';
import { CitiesStoreModel, citiesStoreSurveyPage } from '../cities';
import { AreasStoreModel, areasStoreSurveyPage } from '../areas';

let initialState = {};

export const RootStore = types
  .model('Root', {
    stepsStore: types.maybe(StepsStoreModel),
    citiesStore: types.maybe(CitiesStoreModel),
    areasStore: types.maybe(AreasStoreModel),
    skillsStore: types.maybe(SkillsStoreModel),
  })
  .actions(self => {
    function afterCreate() {
      initialState = getSnapshot(self);
    }

    function reset() {
      applySnapshot(self, initialState);
    }

    const completeSurvey = flow(function* () {
      self.stepsStore.setIsLoading(true);

      const data = {
        step_1: self.stepsStore.stepsData[1],
        step_2: self.stepsStore.stepsData[2],
        step_3: self.stepsStore.stepsData[3],
        step_4: self.stepsStore.stepsData[4],
      };

      const { errors } = yield rootStoreLayoutComponent.isAuth
        ? SurveyApi.SaveSurveyAuth(1, data)
        : SurveyApi.SaveSurveyAnonim(1, data);

      if (errors) {
        self.stepsStore.setIsLoading(false);
        self.stepsStore.setErrors(errors);
        // eslint-disable-next-line no-alert
        alert(
          Object.entries(errors)
            .map(([keyStep, error]) => Object.entries(error).map(([keyField, text]) => `${keyStep}: ${keyField}: ${text}`))
            .join('\n'),
        );
        return;
      }

      self.stepsStore.setIsLoading(false);
      stepsStoreSurveyPage.setOnlyStep(5);
      localStorage.removeItem('survey1StepsData');
    });

    return {
      afterCreate,
      reset,
      completeSurvey,
    };
  });

export const rootStoreSurveyPage = RootStore.create({
  stepsStore: stepsStoreSurveyPage,
  citiesStore: citiesStoreSurveyPage,
  areasStore: areasStoreSurveyPage,
  skillsStore: skillsStoreSurveyPage,
});
