import {applyMiddleware, createStore, compose} from 'redux';
import Thunk from 'redux-thunk';

import Reducers from './reducers';

const usedMiddleware = [Thunk];
/* eslint-disable no-undef */
const composeEnhancers = REDUX_LOGGING && window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-undef */

const middleware = applyMiddleware(...usedMiddleware);
export default createStore(Reducers, composeEnhancers(middleware));
