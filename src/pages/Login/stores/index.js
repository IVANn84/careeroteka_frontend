import {createContext, useContext} from 'react';

import rootStore from './root';

export const StoreLoginPageContext = createContext(rootStore);

export const useStoreLoginPage = () => useContext(StoreLoginPageContext);