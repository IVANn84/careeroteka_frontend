import {FetchAreaList} from './actions/blocks/professions/setAreaList';
import {FetchProfessionList} from './actions/blocks/professions/setProfessionList';
import UpdateSearchProfession from './actions/blocks/professions/setSearchProfession';
import UpdateArea from './actions/blocks/professions/setArea';

const dispatcher = dispatch => ({
    dispatcher: {
        fetchAreaList: () => dispatch(FetchAreaList()),
        fetchProfessionList: () => dispatch(FetchProfessionList(false)),
        fetchNextProfessionList: () => dispatch(FetchProfessionList(true)),
        updateSearchProfession: value => dispatch(UpdateSearchProfession(value)),
        updateArea: value => dispatch(UpdateArea(value)),
    },
});

export default dispatcher;