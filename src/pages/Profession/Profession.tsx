import React, { useEffect, useRef } from 'react';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import { useDevice } from 'Hook/useDevice';

import Survey from './components/blocks/Survey';
import Skills from './components/blocks/Skills';
import SalaryInRegion from './components/blocks/SalaryInRegion';
import SalaryInCapital from './components/blocks/SalaryInCapital';
import Reviews from './components/blocks/Reviews';
import Main from './components/blocks/Main';
import Directions from './components/blocks/Directions';
import Description from './components/blocks/Description';
import Courses from './components/blocks/Courses';
import AverageSalaries from './components/blocks/AverageSalaries';

export default function Profession({
  match: {
    params: {
      id,
    },
  },
  classes,
}) {
  const deviceType = useDevice();

  const {
    entityStore,
    reset,
  } = useStoreProfessionPage();

  useEffect(() => {
    void entityStore.fetch(id);

    return reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const $survey = useRef(null);

  return (
    <div className={classes.container}>
      <Main $survey={$survey} />
      <div className={classes.inlineBlocks}>
        <Description />
        <AverageSalaries />
      </div>
      <Directions />
      <Skills />
      <div className={classes.inlineBlocks}>
        <SalaryInCapital />
        <SalaryInRegion />
      </div>
      {deviceType === 'desktop' && !!entityStore.entity?.courses?.length && (
        <Courses />
      )}
      <Reviews />
      <Survey ref={$survey} />
    </div>
  );
}
