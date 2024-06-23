import { createContext, useContext } from 'react';

import { rootStorePasswordRecoveryPage } from './root';

export const StoreLoginPasswordRecoveryContext = createContext(rootStorePasswordRecoveryPage);

export const useStorePasswordRecovery = () => useContext(StoreLoginPasswordRecoveryContext);
