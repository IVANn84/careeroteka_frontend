import Update from 'immutability-helper';

export const SET_IS_AUTH = 'LAYOUT__SET_IS_AUTH';

export const SetIsAuth = data => ({
    type: SET_IS_AUTH,
    payload: data,
});

export const MutateIsAuth = (state, value) => {
    return Update(state, {
        isAuth: {$set: value},
    });
};

export default function UpdateIsAuth(value) {
    return dispatch => {
        dispatch(SetIsAuth(value));
    };
}