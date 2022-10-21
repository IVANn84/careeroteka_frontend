import Update from 'immutability-helper';

export const SET_SEARCH_PROFESSION = 'MAIN__SET_SEARCH_PROFESSION';

export const SetSearchProfession = data => ({
    type: SET_SEARCH_PROFESSION,
    payload: data,
});

export const MutateSearchProfession = (state, value) => {
    return Update(state, {
        searchProfession: {$set: value},
    });
};

export default function UpdateSearchProfession(value) {
    return dispatch => {
        dispatch(SetSearchProfession(value));
    };
}