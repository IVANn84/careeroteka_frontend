import {combineReducers} from 'redux';

import Main from 'Page/Main/reducer';
import Login from 'Page/Login/reducer';

export default combineReducers({
    Main,
    Login,
});