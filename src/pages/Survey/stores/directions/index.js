import {types} from 'mobx-state-tree';

import actions from './actions';
import views from './views';

export const DirectionModel = types.model('Direction', {
    id: types.number,
    name: types.string,
});

export const DirectionsStoreModel = types
    .model('Directions', {
        isLoading: types.optional(types.boolean, false),
        values: types.optional(types.array(DirectionModel), []),
    })
    .actions(actions)
    .views(views);

export const directionsStoreSurveyPage = DirectionsStoreModel.create();