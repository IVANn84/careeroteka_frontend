import React, { useEffect } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';

import VacanciesList from './components/blocks/VacanciesList';
import VacanciesFilters from './components/blocks/VacanciesFilters';

export default function Vacancies({
  classes,
}) {
  const {
    vacanciesStore,
    gradesStore,
    fieldsStore,
    reset,
  } = useStoreVacanciesPage();

  useEffect(() => {
    vacanciesStore.fetchVacancies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldsStore.typeVacancy, fieldsStore.gradeId]);

  useEffect(() => {
    gradesStore.fetchGrades();

    return reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography
        className={classes.title}
        component="h1"
        variant="H1"
        variantMobile="H1"
      >
        Вакансии
      </Typography>
      <VacanciesFilters />
      <VacanciesList />
    </div>
  );
}
