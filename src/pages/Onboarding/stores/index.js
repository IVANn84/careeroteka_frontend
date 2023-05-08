import { createContext, useContext } from 'react';

import { rootStoreOnboardingPage } from './root';

export const StoreOnboardingPageContext = createContext(rootStoreOnboardingPage);

export const useStoreOnboardingPage = () => useContext(StoreOnboardingPageContext);
