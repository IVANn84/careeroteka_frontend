import { flow, getParent } from 'mobx-state-tree';

import StatisticApi from 'Api/statistic';
import SkillApi from 'Api/skill';
import ReviewApi from 'Api/review';
import ProfessionApi from 'Api/profession';
import CourseApi from 'Api/course';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setIsLoadingSalaries(value) {
    self.isLoadingSalaries = value;
  },

  setIsLoadingSkills(value) {
    self.isLoadingSkills = value;
  },

  setIsLoadingReviews(value) {
    self.isLoadingReviews = value;
  },

  setIsLoadingCourses(value) {
    self.isLoadingCourses = value;
  },

  setIsLoadingStatistic(value) {
    self.isLoadingStatistic = value;
  },

  setEntity(value) {
    self.entity = value;
  },

  setSalaries(value) {
    self.entity.salaries = value;
  },

  setSkills(value) {
    self.entity.skills = value;
  },

  setReviews(value) {
    self.entity.reviews = value;
  },

  setCourses(value) {
    self.entity.courses = value;
  },

  setStatistic(value) {
    self.entity.statistic = value;
  },

  fetch: flow(function* (id) {
    self.setIsLoading(true);

    const professionId = +(self.entity.id || id);

    const { data, errors } = yield ProfessionApi.FetchById(professionId);

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setEntity({
        ...data,
        id: professionId,
      });
    }

    yield getParent(self).directionsStore.fetchDirections();

    self.setIsLoading(false);

    getParent(self).gradesStore.fetchGrades();
    self.fetchSalaries();
    self.fetchSkills();
    self.fetchReviews();
    self.fetchCourses();
    self.fetchStatistic();
  }),

  fetchSalaries: flow(function* () {
    self.setIsLoadingSalaries(true);

    const { data: salaries, errors } = yield ProfessionApi.FetchByIdSalaries(self.entity.id);

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setSalaries(salaries);
    }

    self.setIsLoadingSalaries(false);
  }),

  fetchSkills: flow(function* () {
    self.setIsLoadingSkills(true);

    const { gradeId } = getParent(self).fieldsStore;
    const { directionId } = getParent(self).fieldsStore;

    const { errors, data: skills } = yield SkillApi.FetchList({ gradeId, directionId });

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setSkills(skills);
    }

    self.setIsLoadingSkills(false);
  }),

  fetchReviews: flow(function* () {
    self.setIsLoadingReviews(true);

    const { gradeId } = getParent(self).fieldsStore;
    const { directionId } = getParent(self).fieldsStore;

    const { errors, data: reviews } = yield ReviewApi.FetchList({ gradeId, directionId });

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setReviews(reviews);
    }

    self.setIsLoadingReviews(false);
  }),

  fetchCourses: flow(function* () {
    self.setIsLoadingCourses(true);

    const { gradeId } = getParent(self).fieldsStore;
    const { directionId } = getParent(self).fieldsStore;

    const { errors, data: courses } = yield CourseApi.FetchList({ gradeId, directionId });

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setCourses(courses.map(course => ({
        ...course,
        type: course.type === 'online' ? 'Онлайн курс' : 'Оффлайн курс',
      })));
    }

    self.setIsLoadingCourses(false);
  }),

  fetchStatistic: flow(function* () {
    self.setIsLoadingStatistic(true);

    const { gradeId } = getParent(self).fieldsStore;
    const { directionId } = getParent(self).fieldsStore;

    const { errors, data: statistic } = yield StatisticApi.FetchProfessionSalaries({
      gradeId,
      directionId,
    });

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setStatistic(statistic);
    }

    self.setIsLoadingStatistic(false);
  }),
});
