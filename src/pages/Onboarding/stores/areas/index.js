import { types } from 'mobx-state-tree';

import views from './views';
import actions from './actions';

export const AreaModel = types.model('Area', {
  id: types.number,
  name: types.string,
});

export const AreasStoreModel = types
  .model('Areas', {
    isLoading: types.optional(types.boolean, false),
    values: types.optional(types.array(AreaModel), []),
  })
  .actions(actions)
  .views(views);

export const areasStoreOnboardingPage = AreasStoreModel.create();
