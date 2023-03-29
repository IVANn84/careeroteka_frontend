import {types} from 'mobx-state-tree';

import actions from './actions';
import views from './views';

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

export const areasStoreSurveyPage = AreasStoreModel.create();