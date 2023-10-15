import React from 'react';

import { useStoreSurveyPage } from 'Page/Survey/stores';

import BlocksSkeleton from './components/BlocksSkeleton';
import Area from './components/Area';

export default function AreaList({
  classes,
}) {
  const {
    stepsStore,
    areasStore,
  } = useStoreSurveyPage();

  return (
    <div className={classes.container}>
      {stepsStore.stepsData[2].area && (
        <Area
          areaName={stepsStore.stepsData[2].area}
          removeArea={() => stepsStore.setStepData(2, 'area', null)}
        />
      )}
      <BlocksSkeleton isDisplayed={areasStore.isLoading}>
        {areasStore.filteredAreas.map(({ id, name }) => (
          <Area
            areaName={name}
            key={id}
            onSelect={() => stepsStore.setStepData(2, 'area', name)}
          />
        ))}
      </BlocksSkeleton>
    </div>
  );
}
