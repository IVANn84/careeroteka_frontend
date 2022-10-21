import Update from 'immutability-helper';
import Api from 'Api';
import UpdateAreaListIsLoading from './setAreaListIsLoading';

export const SET_AREA_LIST = 'MAIN__SET_AREA_LIST';

export const SetAreaList = data => ({
    type: SET_AREA_LIST,
    payload: data,
});

export const MutateAreaList = (state, value) => {
    return Update(state, {
        areas: {
            valueList: {$set: value},
        },
    });
};

export default function UpdateAreaList(value) {
    return dispatch => {
        dispatch(SetAreaList(value));
        
    };
}

export const FetchAreaList = () => {
    return async dispatch => {
        dispatch(UpdateAreaListIsLoading(true));
        
        const valueList = [{
            id: null,
            name: 'Все направления',
        }];
        
        const {data, errors} = await Api.FetchAreaList();
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
        } else if (data) {
            valueList.push(...data);
        }
        
        dispatch(UpdateAreaList(valueList));
        
        dispatch(UpdateAreaListIsLoading(false));
    };
};