import React, { useRef } from 'react';
import { getSnapshot } from 'mobx-state-tree';

import { useSlider } from 'Hook/useSlider';

import Vacancy from 'Page/Vacancies/components/blocks/VacanciesList/components/Vacancy';
import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import ListSkeleton from './components/ListSkeleton';

export default function VacanciesSlider({
  buttonRightRef,

  classes,
}) {
  const {
    vacanciesStore,
  } = useStoreVacancyPage();

  const $slider = useRef(null);
  useSlider({
    $slider,
    $sliderButtonRight: buttonRightRef,
    slideList: getSnapshot(vacanciesStore.values),
  });

  return (
    <div
      ref={$slider}
      className={classes.slider}
    >
      <ListSkeleton isDisplayed={vacanciesStore.isLoading}>
        {
          vacanciesStore.values
            .map(vacancy => (
              <Vacancy
                key={vacancy.id}
                value={vacancy}
              />
            ))
        }
      </ListSkeleton>
    </div>
  );
}
