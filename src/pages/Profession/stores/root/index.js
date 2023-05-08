import { types } from 'mobx-state-tree';

import { entityStoreProfessionPage, EntityStoreModel } from '../entity';
import { fieldsStoreProfessionPage, FieldsStoreModel } from '../fields';
import { directionsStoreProfessionPage, DirectionsStoreModel } from '../directions';
import { gradesStoreProfessionPage, GradesStoreModel } from '../grades';
import actions from './actions';

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
