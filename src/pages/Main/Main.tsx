import React, { useEffect, useRef } from 'react';

import { useStoreMainPage } from 'Page/Main/stores';

import Professions from './components/blocks/Professions';
import MainBlock from './components/blocks/Main';
import Articles from './components/blocks/Articles';

export default function Main({
  classes,
}) {
  const {
    areasStore,
    professionsStore,
    reset,
  } = useStoreMainPage();

  useEffect(() => {
    void areasStore.fetchAreas();
    void professionsStore.fetchProfessions();

    return reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const $professions = useRef(null);

  return (
    <div className={classes.container}>
      <MainBlock $professions={$professions} />
      <Articles />
      <Professions ref={$professions} />
    </div>
  );
}
