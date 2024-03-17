import { flow, types } from 'mobx-state-tree';

import { stepsStoreSurveyPage } from 'Page/Survey/stores/steps';
import SurveyApi from 'Api/survey';

export const SkillModel = types.model('Skill', {
  id: types.number,
  name: types.string,
});

export const SkillsStoreModel = types
  .model('Skills', {
    isLoading: types.optional(types.boolean, false),
    values: types.optional(types.array(SkillModel), []),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setValues(value) {
      self.values = value;
    }

    const fetchSkills = flow(function* () {
      const search = stepsStoreSurveyPage.supportData.skillSearch;

      setIsLoading(true);

      const { data, errors } = yield SurveyApi.FetchSkillList({ search, limit: 11 });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setValues(data.results);
      }

      setIsLoading(false);
    });

    return {
      setIsLoading,
      setValues,
      fetchSkills,
    };
  })
  .views(self => ({
    get filteredSkills() {
      const skills = stepsStoreSurveyPage.stepsData[3];
      return skills.length
        ? self.values.filter(({ id }) => !skills.some(skill => skill.id === id))
        : self.values;
    },
  }));

export const skillsStoreSurveyPage = SkillsStoreModel.create();
