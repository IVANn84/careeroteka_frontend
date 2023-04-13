import {createContext, useContext} from 'react';

import {rootStoreRegisterPage} from './root';

export const StoreRegisterPageContext = createContext(rootStoreRegisterPage);

export const useStoreRegisterPage = () => useContext(StoreRegisterPageContext);