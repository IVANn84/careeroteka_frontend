import {createContext, useContext} from 'react';

import rootStore from './root';

export const StoreProfessionPageContext = createContext(rootStore);

export const useStoreProfessionPage = () => useContext(StoreProfessionPageContext);