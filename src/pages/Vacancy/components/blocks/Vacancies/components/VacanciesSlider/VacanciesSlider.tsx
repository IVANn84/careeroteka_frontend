import { useParams } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { getSnapshot } from 'mobx-state-tree';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Vacancy from 'Page/Vacancies/components/blocks/VacanciesList/components/Vacancy';
import { useSlider } from 'Hook/useSlider';

import ListSkeleton from './components/ListSkeleton';

export default function VacanciesSlider({
  buttonRightRef,

  classes,
}) {
  const { id } = useParams<{ id: string }>();
  const {
    vacanciesStore,
  } = useStoreVacancyPage();

  useEffect(() => {
    void vacanciesStore.fetchVacancies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vacanciesStore, id]);

  const $slider = useRef(null);
  useSlider({
    $slider,
    $sliderButtonRight: buttonRightRef,
    slideList: getSnapshot(vacanciesStore.values),
  });

  return (
    <div
      className={classes.slider}
      ref={$slider}
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
