import { types } from 'mobx-state-tree';

import actions from './actions';
import { VacanciesStoreModel, vacanciesStoreMainPage } from '../vacancies';
import { GradesStoreModel, gradesStoreVacanciesPage } from '../grades';
import { FieldsStoreModel, fieldsStoreVacanciesPage } from '../fields';
import { RootStoreFiltersModalModel, rootStoreFiltersModalVacanciesPage } from '../FiltersModal/root';

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
