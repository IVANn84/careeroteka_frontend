import Update from 'immutability-helper';
import Api from 'Api';
import UpdateIsLoading from './setIsLoading';
import UpdateError from './setError';
import UpdateIsAuth from './setIsAuth';

export const SET_CURRENT_USER = 'LAYOUT__SET_CURRENT_USER';

export const SetCurrentUser = data => ({
    type: SET_CURRENT_USER,
    payload: data,
});

export const MutateCurrentUser = (state, value) => {
    return Update(state, {
        currentUser: {$set: value},
    });
};

export default function UpdateCurrentUser(value) {
    return dispatch => {
        dispatch(SetCurrentUser(value));
    };
}

export function FetchCurrentUser() {
    return async dispatch => {
        dispatch(UpdateIsLoading(true));
        
        const {errors, data} = await Api.FetchCurrentUser();
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
            dispatch(UpdateError(errors.detail || 'Неизвестная ошибка'));
        } else {
            dispatch(UpdateCurrentUser(data));
        }
    
        dispatch(UpdateIsAuth(!errors));
        dispatch(UpdateIsLoading(false));
    };
}