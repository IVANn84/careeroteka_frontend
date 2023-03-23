import React from 'react';

import Direction from './components/Direction';
import BlocksSkeleton from './components/BlocksSkeleton';

import {useStoreSurveyPage} from 'Page/Survey/stores';

export default function DirectionList({
    classes,
}) {
    const {
        stepsStore,
        directionsStore,
    } = useStoreSurveyPage();
    
    return (
        <div className={classes.container}>
            {stepsStore.stepsData[2].direction && (
                <Direction
                    direction={stepsStore.stepsData[2].direction}
                    removeDirection={() => stepsStore.setStepData(2, 'direction', null)}/>
            )}
            <BlocksSkeleton isDisplayed={directionsStore.isLoading}>
                {directionsStore.filteredDirections.map(({id, name}) => (
                    <Direction
                        key={id}
                        direction={name}
                        onSelect={() => stepsStore.setStepData(2, 'direction', name)}/>
                ))}
            </BlocksSkeleton>
        </div>
    );
}