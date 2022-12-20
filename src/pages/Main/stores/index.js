import {createContext, useContext} from 'react';

import rootStore from './root';

export const StoreMainPageContext = createContext(rootStore);

export const useStoreMainPage = () => useContext(StoreMainPageContext);