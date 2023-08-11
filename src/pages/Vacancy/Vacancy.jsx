import React, { useEffect } from 'react';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Main from './components/blocks/Main';
import Description from './components/blocks/Description';
import Vacancies from './components/blocks/Vacancies';
import Response from './components/blocks/Response';

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
