import Update from 'immutability-helper';

export const SET_PROFESSION_LIST_IS_LOADING = 'MAIN__SET_PROFESSION_LIST_IS_LOADING';

export const SetProfessionListIsLoading = data => ({
    type: SET_PROFESSION_LIST_IS_LOADING,
    payload: data,
});

export const MutateProfessionListIsLoading = (state, value) => {
    return Update(state, {
        professions: {
            isLoading: {$set: value},
        },
    });
};

export default function UpdateProfessionListIsLoading(value) {
    return dispatch => {
        dispatch(SetProfessionListIsLoading(value));
    };
}