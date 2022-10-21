import Update from 'immutability-helper';

export const SET_AREA_LIST_IS_LOADING = 'MAIN__SET_AREA_LIST_IS_LOADING';

export const SetAreaListIsLoading = data => ({
    type: SET_AREA_LIST_IS_LOADING,
    payload: data,
});

export const MutateAreaListIsLoading = (state, value) => {
    return Update(state, {
        areas: {
            isLoading: {$set: value},
        },
    });
};

export default function UpdateAreaListIsLoading(value) {
    return dispatch => {
        dispatch(SetAreaListIsLoading(value));
    };
}