import { createContext, useContext } from 'react';

import { rootStoreProfessionPage } from './root';

export const StoreProfessionPageContext = createContext(rootStoreProfessionPage);

export const useStoreProfessionPage = () => useContext(StoreProfessionPageContext);
