import {createContext, useContext} from 'react';

import {rootStoreSurveyPage} from './root';

export const StoreSurveyPageContext = createContext(rootStoreSurveyPage);

export const useStoreSurveyPage = () => useContext(StoreSurveyPageContext);