import Update from 'immutability-helper';
import {FetchProfessionList} from './setProfessionList';

export const SET_AREA = 'MAIN__SET_AREA';

export const SetArea = data => ({
    type: SET_AREA,
    payload: data,
});

export const MutateArea = (state, {id, name}) => {
    return Update(state, {
        areaId: {$set: id},
        areaName: {$set: name},
    });
};

export default function UpdateArea(value) {
    return (dispatch, getState) => {
        const {
            Main: {
                areaId,
            },
        } = getState();
        
        dispatch(SetArea(value));
    
        if (areaId !== value.id) {
            dispatch(FetchProfessionList(false));
        }
    };
}
