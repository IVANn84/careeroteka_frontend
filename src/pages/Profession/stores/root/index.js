import { types } from 'mobx-state-tree';

import actions from './actions';
import { GradesStoreModel, gradesStoreProfessionPage } from '../grades';
import { FieldsStoreModel, fieldsStoreProfessionPage } from '../fields';
import { EntityStoreModel, entityStoreProfessionPage } from '../entity';
import { DirectionsStoreModel, directionsStoreProfessionPage } from '../directions';

export const RootStore = types
  .model('Root', {
    entityStore: types.maybe(EntityStoreModel),
    fieldsStore: types.maybe(FieldsStoreModel),
    directionsStore: types.maybe(DirectionsStoreModel),
    gradesStore: types.maybe(GradesStoreModel),
  })
  .actions(actions);

export const rootStoreProfessionPage = RootStore.create({
  entityStore: entityStoreProfessionPage,
  fieldsStore: fieldsStoreProfessionPage,
  directionsStore: directionsStoreProfessionPage,
  gradesStore: gradesStoreProfessionPage,
});
