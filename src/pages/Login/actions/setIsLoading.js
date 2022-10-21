import Update from 'immutability-helper';

export const SET_IS_LOADING = 'LOGIN__SET_IS_LOADING';

export const SetIsLoading = data => ({
    type: SET_IS_LOADING,
    payload: data,
});

export const MutateIsLoading = (state, value) => {
    return Update(state, {
        isLoading: {$set: value},
    });
};

export default function UpdateIsLoading(value) {
    return dispatch => {
        dispatch(SetIsLoading(value));
    };
}