import React from 'react';

import Area from './components/Area';
import BlocksSkeleton from './components/BlocksSkeleton';

import {useStoreOnboardingPage} from 'Page/Onboarding/stores';

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
                    removeArea={() => stepsStore.setArea(null)}/>
            )}
            <BlocksSkeleton isDisplayed={areasStore.isLoading}>
                {areasStore.filteredAreas.map(({id, name}) => (
                    <Area
                        key={id}
                        areaName={name}
                        onSelect={() => stepsStore.setArea({id, name})}/>
                ))}
            </BlocksSkeleton>
        </div>
    );
}