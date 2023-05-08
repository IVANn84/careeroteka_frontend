import { types } from 'mobx-state-tree';

import { areasStoreMainPage, AreasStoreModel } from '../areas';
import { fieldsStoreMainPage, FieldsStoreModel } from '../fields';
import { professionsStoreMainPage, ProfessionsStoreModel } from '../professions';
import actions from './actions';

export const RootStoreModel = types
  .model('Root', {
    areasStore: types.maybe(AreasStoreModel),
    fieldsStore: types.maybe(FieldsStoreModel),
    professionsStore: types.maybe(ProfessionsStoreModel),
  })
  .actions(actions);

export const rootStoreMainPage = RootStoreModel.create({
  areasStore: areasStoreMainPage,
  fieldsStore: fieldsStoreMainPage,
  professionsStore: professionsStoreMainPage,
});
