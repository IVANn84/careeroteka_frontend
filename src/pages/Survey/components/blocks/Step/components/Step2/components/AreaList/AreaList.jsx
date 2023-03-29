import React from 'react';

import Area from './components/Area';
import BlocksSkeleton from './components/BlocksSkeleton';

import {useStoreSurveyPage} from 'Page/Survey/stores';

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
                    removeArea={() => stepsStore.setStepData(2, 'area', null)}/>
            )}
            <BlocksSkeleton isDisplayed={areasStore.isLoading}>
                {areasStore.filteredAreas.map(({id, name}) => (
                    <Area
                        key={id}
                        areaName={name}
                        onSelect={() => stepsStore.setStepData(2, 'area', name)}/>
                ))}
            </BlocksSkeleton>
        </div>
    );
}