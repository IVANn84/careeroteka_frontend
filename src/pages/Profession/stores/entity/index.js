import { types } from 'mobx-state-tree';

import actions from './actions';
import views from './views';

export const SalaryModel = types.model('Salary', {
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
  .actions(actions)
  .views(views);

export const entityStoreProfessionPage = EntityStoreModel.create();
