import { types } from 'mobx-state-tree';

import actions from './actions';
import { ProfessionsStoreModel, professionsStoreMainPage } from '../professions';
import { FieldsStoreModel, fieldsStoreMainPage } from '../fields';
import { AreasStoreModel, areasStoreMainPage } from '../areas';

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
