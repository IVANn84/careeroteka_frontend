import { flow, types } from 'mobx-state-tree';

import { gradesStoreProfessionPage } from 'Page/Profession/stores/grades';
import { fieldsStoreProfessionPage } from 'Page/Profession/stores/fields';
import { directionsStoreProfessionPage } from 'Page/Profession/stores/directions';
import StatisticApi from 'Api/statistic';
import SkillApi from 'Api/skill';
import ReviewApi from 'Api/review';
import ProfessionApi from 'Api/profession';
import CourseApi from 'Api/course';

export const SalaryModel = types.model('SalaryChart', {
  minValue: types.number,
  maxValue: types.number,
});

export const SkillModel = types.model('Skill', {
  id: types.number,
  name: types.string,
  value: types.string,
});

export const ReviewModel = types.model('Review', {
  id: types.number,
  name: types.string,
  value: types.number,
});

export const ColorModel = types.model('Color', {
  textColor: types.string,
  backgroundColor: types.string,
  buttonColor: types.union(
    types.literal('light'),
    types.literal('primary'),
    types.literal('dark'),
  ),
});

export const CourseModel = types.model('Course', {
  id: types.number,
  name: types.string,
  company: types.string,
  image: types.string,
  type: types.union(
    types.literal('Онлайн курс'),
    types.literal('Оффлайн курс'),
  ),
  rating: types.number,
});

export const StatisticMonthsModel = types.model('StatisticMonths', {
  id: types.number,
  salary: types.number,
  month: types.string,
});

export const StatisticModel = types.model('Statistic', {
  inCapital: types.array(StatisticMonthsModel),
  inRegion: types.array(StatisticMonthsModel),
  percentInCapital: types.number,
  percentInRegion: types.number,
});

export const EntityModel = types
  .model('Entity', {
    id: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    areas: types.optional(types.array(types.string), []),
    color: types.maybeNull(ColorModel),
    image: types.maybeNull(types.string),

    salaries: types.maybeNull(types.model({
      inCapital: types.maybeNull(SalaryModel),
      inRegion: types.maybeNull(SalaryModel),
    })),

    skills: types.optional(types.array(SkillModel), []),

    reviews: types.optional(types.array(ReviewModel), []),

    courses: types.optional(types.array(CourseModel), []),

    statistic: types.maybeNull(StatisticModel),
  });

export const EntityStoreModel = types
  .model('EntityStore', {
    isLoading: types.optional(types.boolean, true),
    isLoadingSalaries: types.optional(types.boolean, true),
    isLoadingSkills: types.optional(types.boolean, true),
    isLoadingReviews: types.optional(types.boolean, true),
    isLoadingCourses: types.optional(types.boolean, true),
    isLoadingStatistic: types.optional(types.boolean, true),
    entity: types.optional(EntityModel, {}),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setIsLoadingSalaries(value) {
      self.isLoadingSalaries = value;
    }

    function setIsLoadingSkills(value) {
      self.isLoadingSkills = value;
    }

    function setIsLoadingReviews(value) {
      self.isLoadingReviews = value;
    }

    function setIsLoadingCourses(value) {
      self.isLoadingCourses = value;
    }

    function setIsLoadingStatistic(value) {
      self.isLoadingStatistic = value;
    }

    function setEntity(value) {
      self.entity = value;
    }

    function setSalaries(value) {
      self.entity.salaries = value;
    }

    function setSkills(value) {
      self.entity.skills = value;
    }

    function setReviews(value) {
      self.entity.reviews = value;
    }

    function setCourses(value) {
      self.entity.courses = value;
    }

    function setStatistic(value) {
      self.entity.statistic = value;
    }

    const fetchSalaries = flow(function* () {
      setIsLoadingSalaries(true);

      const { data: salaries, errors } = yield ProfessionApi.FetchByIdSalaries(self.entity.id);

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (salaries) {
        setSalaries(salaries);
      }

      setIsLoadingSalaries(false);
    });

    const fetchSkills = flow(function* () {
      setIsLoadingSkills(true);

      const { gradeId, directionId } = fieldsStoreProfessionPage;

      const { errors, data: skills } = yield SkillApi.FetchList({ gradeId, directionId });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (skills) {
        setSkills(skills);
      }

      setIsLoadingSkills(false);
    });

    const fetchReviews = flow(function* () {
      setIsLoadingReviews(true);

      const { gradeId, directionId } = fieldsStoreProfessionPage;

      const { errors, data: reviews } = yield ReviewApi.FetchList({ gradeId, directionId });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (reviews) {
        setReviews(reviews);
      }

      setIsLoadingReviews(false);
    });

    const fetchCourses = flow(function* () {
      setIsLoadingCourses(true);

      const { gradeId, directionId } = fieldsStoreProfessionPage;

      const { errors, data: courses } = yield CourseApi.FetchList({ gradeId, directionId });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (courses) {
        setCourses(courses.map(course => ({
          ...course,
          type: course.type === 'online' ? 'Онлайн курс' : 'Оффлайн курс',
        })));
      }

      setIsLoadingCourses(false);
    });

    const fetchStatistic = flow(function* () {
      setIsLoadingStatistic(true);

      const { gradeId, directionId } = fieldsStoreProfessionPage;

      const { errors, data: statistic } = yield StatisticApi.FetchProfessionSalaries({
        gradeId,
        directionId,
      });

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (statistic) {
        setStatistic(statistic);
      }

      setIsLoadingStatistic(false);
    });

    const fetch = flow(function* (id) {
      setIsLoading(true);

      const professionId = +(self.entity.id || id);

      const { data, errors } = yield ProfessionApi.FetchById(professionId);

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setEntity({
          ...data,
          id: professionId,
        });
      }

      // Почему-то при использовании yield ломается ts
      directionsStoreProfessionPage.fetchDirections()
        .finally(() => {
          setIsLoading(false);

          gradesStoreProfessionPage.fetchGrades();
          void fetchSalaries();
          void fetchSkills();
          void fetchReviews();
          void fetchCourses();
          void fetchStatistic();
        });
    });

    return {
      setIsLoading,
      setIsLoadingSalaries,
      setIsLoadingSkills,
      setIsLoadingReviews,
      setIsLoadingCourses,
      setIsLoadingStatistic,
      setEntity,
      setSalaries,
      setSkills,
      setReviews,
      setCourses,
      setStatistic,
      fetch,
      fetchSalaries,
      fetchSkills,
      fetchReviews,
      fetchCourses,
      fetchStatistic,
    };
  })
  .views(self => ({
    get reviewBlocks() {
      const result = [];
      const array = self.entity?.reviews || [];

      for (let index = 0; index < array.length; index += 3) {
        result.push(array.slice(index, index + 3));
      }

      return result;
    },
  }));

export const entityStoreProfessionPage = EntityStoreModel.create();
