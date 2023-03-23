import {createContext, useContext} from 'react';

import {rootStoreLayoutComponent} from './root';

export const StoreLayoutComponentContext = createContext(rootStoreLayoutComponent);

export const useStoreLayoutComponent = () => useContext(StoreLayoutComponentContext);