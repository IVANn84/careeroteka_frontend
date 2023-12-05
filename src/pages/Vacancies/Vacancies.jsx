import React, { useEffect } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';

import VacanciesList from './components/blocks/VacanciesList';
import VacanciesFilters from './components/blocks/VacanciesFilters';

export default function Vacancies({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
    vacanciesStore,
    reset,
  } = useStoreVacanciesPage();

  useEffect(() => {
    vacanciesStore.fetchVacancies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldsStore]);

  useEffect(
    () => reset,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div>
      <Typography
        className={classes.title}
        component="h1"
        variant="H1"
        variantMobile="H1"
      >
        Поиск классной
        <div className={classes.flip}>
          <div className={classes.word}>подработки</div>
          <div className={classes.word}>работы</div>
          <div className={classes.word}>стажировки</div>
        </div>
      </Typography>
      <Typography
        className={classes.subTitle}
        component="p"
        variant="B1"
        variantMobile="B1"
      >
        Быстрый способ посмотреть все подходящие предложения на рынке
      </Typography>
      <VacanciesFilters />
      <VacanciesList />
    </div>
  );
}
