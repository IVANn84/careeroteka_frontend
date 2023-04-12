import {types} from 'mobx-state-tree';

import actions from './actions';

export const CityModel = types.model('City', {
    id: types.number,
    name: types.string,
    region: types.string,
});

export const CitiesStoreModel = types
    .model('Cities', {
        isLoading: types.optional(types.boolean, true),
        values: types.optional(types.array(CityModel), []),
    })
    .actions(actions);

export const citiesStoreOnboardingPage = CitiesStoreModel.create();