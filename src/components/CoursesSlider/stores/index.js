import {createContext, useContext} from 'react';

import {rootStoreCoursesSliderComponent} from './root';

export const StoreCoursesSliderComponentContext = createContext(rootStoreCoursesSliderComponent);

export const useStoreCoursesSliderComponent = () => useContext(StoreCoursesSliderComponentContext);