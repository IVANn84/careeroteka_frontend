import React, { useEffect } from 'react';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';

import Vacancies from './components/blocks/Vacancies';
import Response from './components/blocks/Response';
import Main from './components/blocks/Main';
import Description from './components/blocks/Description';

// Добавляем в локальное хранилище посещенные вакансии
const addVisitedVacancy = id => {
  const localStorageVacancies = localStorage.getItem('visitedVacancies');
  const visitedVacancyIds = localStorageVacancies
    ? JSON.parse(localStorageVacancies)
    : [];

  if (!visitedVacancyIds.includes(id)) {
    visitedVacancyIds.push(id);
    localStorage.setItem('visitedVacancies', JSON.stringify(visitedVacancyIds));
  }
};

export default function Vacancy({
  match: {
    params: {
      id,
    },
  },
  classes,
}) {
  const {
    entityStore,
    reset,
  } = useStoreVacancyPage();

  useEffect(() => {
    entityStore.fetch(id);

    addVisitedVacancy(+id);

    return reset;
  }, [entityStore, id, reset]);

  return (
    <div className={classes.container}>
      <Main />
      <div className={classes.inlineBlocks}>
        <Description />
        <Response />
      </div>
      <Vacancies />
    </div>
  );
}
