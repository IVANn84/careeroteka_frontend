import Update from 'immutability-helper';
import Api from 'Api';
import UpdateProfessionListIsLoading from './setProfessionListIsLoading';

export const SET_PROFESSION_LIST = 'MAIN__SET_PROFESSION_LIST';

export const SetProfessionList = data => ({
    type: SET_PROFESSION_LIST,
    payload: data,
});

export const MutateProfessionList = (state, {results, next}) => {
    return Update(state, {
        professions: {
            valueList: {$set: results},
            nextPage: {$set: next},
        },
    });
};

export default function UpdateProfessionList(value) {
    return dispatch => {
        dispatch(SetProfessionList(value));
    };
}

export const FetchProfessionList = isFetchNextPage => {
    return async (dispatch, getState) => {
        if (!isFetchNextPage) {
            dispatch(UpdateProfessionListIsLoading(true));
        }
        
        const {
            Main: {
                areaId,
                searchProfession,
                professions: {
                    valueList,
                    nextPage,
                },
            },
        } = getState();
        
        const {data, errors} = await Api.FetchProfessionList({
            search: searchProfession,
            areas__id: areaId,
            page: isFetchNextPage
                ? nextPage
                : null,
        });
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
        } else if (data) {
            dispatch(UpdateProfessionList(isFetchNextPage
                ? {
                    ...data,
                    results: [...valueList, ...data.results],
                }
                : data));
        }
        
        if (!isFetchNextPage) {
            dispatch(UpdateProfessionListIsLoading(false));
        }
    };
};