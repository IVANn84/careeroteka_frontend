import React from 'react';

import { useStoreOnboardingPage } from 'Page/Onboarding/stores';

import BlocksSkeleton from './components/BlocksSkeleton';
import Area from './components/Area';

export default function AreaList({
  classes,
}) {
  const {
    stepsStore,
    areasStore,
  } = useStoreOnboardingPage();

  return (
    <div className={classes.container}>
      {stepsStore.stepsData[2].id && (
        <Area
          areaName={stepsStore.stepsData[2].name}
          removeArea={() => stepsStore.setArea(null)}
        />
      )}
      <BlocksSkeleton isDisplayed={areasStore.isLoading}>
        {areasStore.filteredAreas.map(({ id, name }) => (
          <Area
            areaName={name}
            key={id}
            onSelect={() => stepsStore.setArea({ id, name })}
          />
        ))}
      </BlocksSkeleton>
    </div>
  );
}
