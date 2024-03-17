import { applySnapshot, getSnapshot, types } from 'mobx-state-tree';

import { GradesStoreModel, gradesStoreProfessionPage } from '../grades';
import { FieldsStoreModel, fieldsStoreProfessionPage } from '../fields';
import { EntityStoreModel, entityStoreProfessionPage } from '../entity';
import { DirectionsStoreModel, directionsStoreProfessionPage } from '../directions';

let initialState = {};

export const RootStore = types
  .model('Root', {
    entityStore: types.maybe(EntityStoreModel),
    fieldsStore: types.maybe(FieldsStoreModel),
    directionsStore: types.maybe(DirectionsStoreModel),
    gradesStore: types.maybe(GradesStoreModel),
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

export const rootStoreProfessionPage = RootStore.create({
  entityStore: entityStoreProfessionPage,
  fieldsStore: fieldsStoreProfessionPage,
  directionsStore: directionsStoreProfessionPage,
  gradesStore: gradesStoreProfessionPage,
});
