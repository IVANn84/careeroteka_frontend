import { types } from 'mobx-state-tree';

import { fieldsStoreVacanciesPage, FieldsStoreModel } from '../fields';
import { vacanciesStoreMainPage, VacanciesStoreModel } from '../vacancies';
import actions from './actions';

export const RootStoreModel = types
  .model('Root', {
    fieldsStore: types.maybe(FieldsStoreModel),
    vacanciesStore: types.maybe(VacanciesStoreModel),
  })
  .actions(actions);

export const rootStoreVacanciesPage = RootStoreModel.create({
  fieldsStore: fieldsStoreVacanciesPage,
  vacanciesStore: vacanciesStoreMainPage,
});
