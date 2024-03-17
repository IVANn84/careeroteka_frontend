import {
  applySnapshot, getSnapshot, types,
} from 'mobx-state-tree';

import { ProfessionsStoreModel, professionsStoreMainPage } from '../professions';
import { FieldsStoreModel, fieldsStoreMainPage } from '../fields';
import { AreasStoreModel, areasStoreMainPage } from '../areas';

let initialState = {};

export const RootStoreModel = types
  .model('Root', {
    areasStore: types.maybe(AreasStoreModel),
    fieldsStore: types.maybe(FieldsStoreModel),
    professionsStore: types.maybe(ProfessionsStoreModel),
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

export const rootStoreMainPage = RootStoreModel.create({
  areasStore: areasStoreMainPage,
  fieldsStore: fieldsStoreMainPage,
  professionsStore: professionsStoreMainPage,
});
