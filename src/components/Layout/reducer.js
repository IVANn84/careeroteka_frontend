import DefaultState from './defaultState';

import {SET_IS_LOADING, MutateIsLoading} from './actions/setIsLoading';
import {SET_ERROR, MutateError} from './actions/setError';
import {SET_CURRENT_USER, MutateCurrentUser} from './actions/setCurrentUser';
import {SET_IS_AUTH, MutateIsAuth} from './actions/setIsAuth';

const reducer = (state = DefaultState, {type, payload}) => {
    switch (type) {
        case SET_IS_LOADING:
            return MutateIsLoading(state, payload);
            
        case SET_ERROR:
            return MutateError(state, payload);
            
        case SET_CURRENT_USER:
            return MutateCurrentUser(state, payload);
            
        case SET_IS_AUTH:
            return MutateIsAuth(state, payload);

        default:
            return state;
    }
};

export default reducer;