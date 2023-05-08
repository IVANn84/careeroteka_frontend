import { createContext, useContext } from 'react';

import { rootStoreMainPage } from './root';

export const StoreMainPageContext = createContext(rootStoreMainPage);

export const useStoreMainPage = () => useContext(StoreMainPageContext);
