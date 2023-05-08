import { types } from 'mobx-state-tree';

import actions from './actions';

export const DirectionModel = types.model('Direction', {
  id: types.maybeNull(types.number),
  name: types.string,
  description: types.string,
});

export const DirectionsStoreModel = types
  .model('Directions', {
    isLoading: types.optional(types.boolean, true),
    values: types.optional(types.array(DirectionModel), []),
  })
  .actions(actions);

export const directionsStoreProfessionPage = DirectionsStoreModel.create();
