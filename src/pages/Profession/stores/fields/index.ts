import { types } from 'mobx-state-tree';

import { entityStoreProfessionPage } from 'Page/Profession/stores/entity';

export const FieldsStoreModel = types
  .model('Fields', {
    directionId: types.maybeNull(types.number),
    directionName: types.maybeNull(types.string),
    directionDescription: types.maybeNull(types.string),
    gradeId: types.optional(types.number, 3),
    gradeName: types.optional(types.string, 'Middle'),
  })
  .actions(self => {
    function setGrade({ id, name }, shouldFetchEntity = true) {
      const prevGradeId = self.gradeId;

      self.gradeId = id;
      self.gradeName = name;

      if (shouldFetchEntity && prevGradeId !== id) {
        void entityStoreProfessionPage.fetchSkills();
        void entityStoreProfessionPage.fetchReviews();
        void entityStoreProfessionPage.fetchCourses();
        void entityStoreProfessionPage.fetchStatistic();
      }
    }

    function setDirection({ id, name, description }, shouldFetchEntity = true) {
      const prevDirectionId = self.directionId;

      self.directionId = id;
      self.directionName = name;
      self.directionDescription = description;

      if (shouldFetchEntity && prevDirectionId !== id) {
        void entityStoreProfessionPage.fetchSkills();
        void entityStoreProfessionPage.fetchReviews();
        void entityStoreProfessionPage.fetchCourses();
        void entityStoreProfessionPage.fetchStatistic();
      }
    }

    return {
      setGrade,
      setDirection,
    };
  });

export const fieldsStoreProfessionPage = FieldsStoreModel.create();
