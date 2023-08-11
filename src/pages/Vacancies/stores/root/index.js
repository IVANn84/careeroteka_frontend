import { types } from 'mobx-state-tree';

import { fieldsStoreVacanciesPage, FieldsStoreModel } from '../fields';
import { vacanciesStoreMainPage, VacanciesStoreModel } from '../vacancies';
import { gradesStoreVacanciesPage, GradesStoreModel } from '../grades';
import { rootStoreFiltersModalVacanciesPage, RootStoreFiltersModalModel } from '../FiltersModal/root';
import actions from './actions';

export const RootStoreModel = types
  .model('Root', {
    fieldsStore: types.maybe(FieldsStoreModel),
    vacanciesStore: types.maybe(VacanciesStoreModel),
    gradesStore: types.maybe(GradesStoreModel),
    filtersModalStore: types.maybe(RootStoreFiltersModalModel),
  })
  .actions(actions);

export const rootStoreVacanciesPage = RootStoreModel.create({
  fieldsStore: fieldsStoreVacanciesPage,
  vacanciesStore: vacanciesStoreMainPage,
  gradesStore: gradesStoreVacanciesPage,
  filtersModalStore: rootStoreFiltersModalVacanciesPage,
});
