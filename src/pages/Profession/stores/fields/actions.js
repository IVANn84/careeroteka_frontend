import { getParent } from 'mobx-state-tree';

export default self => ({
  setGrade({ id, name }, shouldFetchEntity = true) {
    const prevGradeId = self.gradeId;

    self.gradeId = id;
    self.gradeName = name;

    if (shouldFetchEntity && prevGradeId !== id) {
      getParent(self).entityStore.fetchSkills();
      getParent(self).entityStore.fetchReviews();
      getParent(self).entityStore.fetchCourses();
      getParent(self).entityStore.fetchStatistic();
    }
  },

  setDirection({ id, name, description }, shouldFetchEntity = true) {
    const prevDirectionId = self.directionId;

    self.directionId = id;
    self.directionName = name;
    self.directionDescription = description;

    if (shouldFetchEntity && prevDirectionId !== id) {
      getParent(self).entityStore.fetchSkills();
      getParent(self).entityStore.fetchReviews();
      getParent(self).entityStore.fetchCourses();
      getParent(self).entityStore.fetchStatistic();
    }
  },
});
