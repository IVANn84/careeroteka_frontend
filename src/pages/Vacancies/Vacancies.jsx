import React, { useEffect } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Typography from 'Component/Typography';

import VacanciesFilters from './components/blocks/VacanciesFilters';
import VacanciesList from './components/blocks/VacanciesList';

export default function Vacancies({
  classes,
}) {
  const {
    vacanciesStore,
    gradesStore,
    reset,
  } = useStoreVacanciesPage();

  useEffect(() => {
    vacanciesStore.fetchVacancies();
    gradesStore.fetchGrades();

    return reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography
        className={classes.title}
        variant="H1"
        variantMobile="H1"
        component="h1"
      >
        Вакансии
      </Typography>
      <VacanciesFilters />
      <VacanciesList />
    </div>
  );
}
