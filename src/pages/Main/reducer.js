import DefaultState from './defaultState';

import {SET_AREA, MutateArea} from './actions/blocks/professions/setArea';
import {SET_SEARCH_PROFESSION, MutateSearchProfession} from './actions/blocks/professions/setSearchProfession';
import {SET_AREA_LIST_IS_LOADING, MutateAreaListIsLoading} from './actions/blocks/professions/setAreaListIsLoading';
import {SET_AREA_LIST, MutateAreaList} from './actions/blocks/professions/setAreaList';
import {SET_PROFESSION_LIST_IS_LOADING, MutateProfessionListIsLoading} from './actions/blocks/professions/setProfessionListIsLoading';
import {SET_PROFESSION_LIST, MutateProfessionList} from './actions/blocks/professions/setProfessionList';

const reducer = (state = DefaultState, {type, payload}) => {
    switch (type) {
        case SET_AREA:
            return MutateArea(state, payload);

        case SET_SEARCH_PROFESSION:
            return MutateSearchProfession(state, payload);

        case SET_AREA_LIST_IS_LOADING:
            return MutateAreaListIsLoading(state, payload);

        case SET_AREA_LIST:
            return MutateAreaList(state, payload);

        case SET_PROFESSION_LIST_IS_LOADING:
            return MutateProfessionListIsLoading(state, payload);

        case SET_PROFESSION_LIST:
            return MutateProfessionList(state, payload);

        default:
            return state;
    }
};

export default reducer;