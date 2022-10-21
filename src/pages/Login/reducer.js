import DefaultState from './defaultState';

import {SET_IS_LOADING, MutateIsLoading} from './actions/setIsLoading';
import {SET_ERROR, MutateError} from './actions/setError';

const reducer = (state = DefaultState, {type, payload}) => {
    switch (type) {
        case SET_IS_LOADING:
            return MutateIsLoading(state, payload);
            
        case SET_ERROR:
            return MutateError(state, payload);

        default:
            return state;
    }
};

export default reducer;