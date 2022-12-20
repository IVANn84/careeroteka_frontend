import {types} from 'mobx-state-tree';

import actions from './actions';
import views from './views';

export const Salary = types.model('Salary', {
    minValue: types.number,
    maxValue: types.number,
});

export const Skill = types.model('Skill', {
    id: types.number,
    name: types.string,
    value: types.string,
});

export const Review = types.model('Review', {
    id: types.number,
    title: types.string,
    value: types.number,
});

export const Color = types.model('Color', {
    textColor: types.string,
    backgroundColor: types.string,
    buttonColor: types.union(
        types.literal('light'),
        types.literal('primary'),
        types.literal('dark'),
    ),
});

export const Course = types.model('Course', {
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

export const StatisticMonths = types.model('StatisticMonths', {
    id: types.number,
    salary: types.number,
    month: types.string,
});

export const Statistic = types.model('Statistic', {
    inCapital: types.array(StatisticMonths),
    inRegion: types.array(StatisticMonths),
    percentInCapital: types.number,
    percentInRegion: types.number,
});

export const Entity = types
    .model('Entity', {
        id: types.maybeNull(types.number),
        name: types.maybeNull(types.string),
        description: types.maybeNull(types.string),
        areas: types.optional(types.array(types.string), []),
        color: types.maybeNull(Color),
        image: types.maybeNull(types.string),
        
        salaries: types.maybeNull(types.model({
            inCapital: types.maybeNull(Salary),
            inRegion: types.maybeNull(Salary),
        })),
        
        skills: types.optional(types.array(Skill), []),
        
        reviews: types.optional(types.array(Review), []),
        
        courses: types.optional(types.array(Course), []),
        
        statistic: types.maybeNull(Statistic),
    });

export const EntityStore = types
    .model('EntityStore', {
        isLoading: types.optional(types.boolean, true),
        isLoadingSalaries: types.optional(types.boolean, true),
        isLoadingSkills: types.optional(types.boolean, true),
        isLoadingReviews: types.optional(types.boolean, true),
        isLoadingCourses: types.optional(types.boolean, true),
        isLoadingStatistic: types.optional(types.boolean, true),
        entity: types.optional(Entity, {}),
    })
    .actions(actions)
    .views(views);

export default EntityStore.create();