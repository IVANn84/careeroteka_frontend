import { applySnapshot, getSnapshot, types } from 'mobx-state-tree';

import { FiltersModalVacanciesStoreModel, filtersModalVacanciesStoreVacanciesPage } from '../vacancies';
import { FiltersModalFieldsStoreModel, filtersModalFieldsStoreVacanciesPage } from '../fields';
import { FiltersModalCoursesByPartnerStoreModel, filtersModalCoursesByPartnerVacanciesPage } from '../coursesByPartner';
import { FiltersModalAverageSalaryStoreModel, filtersModalAverageSalaryStoreVacanciesPage } from '../averageSalary';

let initialState = {};

export const RootStoreFiltersModalModel = types
  .model('Root', {
    fieldsStore: types.maybe(FiltersModalFieldsStoreModel),
    vacanciesStore: types.maybe(FiltersModalVacanciesStoreModel),
    averageSalaryStore: types.maybe(FiltersModalAverageSalaryStoreModel),
    coursesByPartnerStore: types.maybe(FiltersModalCoursesByPartnerStoreModel),
  })
  .actions(self => {
    function afterCreate() {
      initialState = getSnapshot(self);
    }

    function reset() {
      applySnapshot(self, initialState);
    }

    return {
      afterCreate,
      reset,
    };
  });

export const rootStoreFiltersModalVacanciesPage = RootStoreFiltersModalModel.create({
  fieldsStore: filtersModalFieldsStoreVacanciesPage,
  vacanciesStore: filtersModalVacanciesStoreVacanciesPage,
  averageSalaryStore: filtersModalAverageSalaryStoreVacanciesPage,
  coursesByPartnerStore: filtersModalCoursesByPartnerVacanciesPage,
});
