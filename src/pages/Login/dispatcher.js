import Login from './actions/login';

const dispatcher = dispatch => ({
    dispatcher: {
        login: () => dispatch(Login()),
    },
});

export default dispatcher;