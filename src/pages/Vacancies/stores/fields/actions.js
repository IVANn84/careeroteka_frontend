import { getParent } from 'mobx-state-tree';

export default self => ({
  setSearchVacancy(value) {
    self.searchVacancy = value;
  },

  setGrade(value) {
    const prevGradeId = self.gradeId;

    self.gradeId = value?.id || null;
    self.gradeName = value?.name || null;

    if (prevGradeId !== value?.id) {
      getParent(self).vacanciesStore.fetchVacancies();
    }
  },

  setTypeVacancy(value) {
    self.typeVacancy = value;
  },
});
