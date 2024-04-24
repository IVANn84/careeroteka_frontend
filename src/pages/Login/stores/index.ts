import { createContext, useContext } from 'react';

import { rootStoreLoginPage } from './root';

export const StoreLoginPageContext = createContext(rootStoreLoginPage);

export const useStoreLoginPage = () => useContext(StoreLoginPageContext);
