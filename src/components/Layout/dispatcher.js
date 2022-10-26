import {FetchCurrentUser} from './actions/setCurrentUser';

const dispatcher = dispatch => ({
    dispatcher: {
        fetchCurrentUser: () => dispatch(FetchCurrentUser()),
    },
});

export default dispatcher;