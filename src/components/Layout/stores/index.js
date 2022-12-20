import {createContext, useContext} from 'react';

import rootStore from './root';

export const StoreLayoutComponentContext = createContext(rootStore);

export const useStoreLayoutComponent = () => useContext(StoreLayoutComponentContext);