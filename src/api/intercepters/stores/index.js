import {createContext, useContext} from 'react';

import {rootStoreInterceptersApi} from './root';

export const StoreInterceptersApiContext = createContext(rootStoreInterceptersApi);

export const useStoreInterceptersApi = () => useContext(StoreInterceptersApiContext);