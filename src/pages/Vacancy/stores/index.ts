import { createContext, useContext } from 'react';

import { rootStoreVacancyPage } from './root';

export const StoreVacancyPageContext = createContext(rootStoreVacancyPage);

export const useStoreVacancyPage = () => useContext(StoreVacancyPageContext);
