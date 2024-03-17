import { createContext, useContext } from 'react';

import { rootStoreVacanciesPage } from './root';

export const StoreVacanciesPageContext = createContext(rootStoreVacanciesPage);

export const useStoreVacanciesPage = () => useContext(StoreVacanciesPageContext);
