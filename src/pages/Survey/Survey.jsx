import React, {useEffect} from 'react';

import {useStoreSurveyPage} from 'Page/Survey/stores';
import {PageSkeleton} from 'Component/Skeleton';

import Step from './components/blocks/Step';

export default function Survey({
    classes,
}) {
    const {
        reset,
        stepsStore,
    } = useStoreSurveyPage();
    
    useEffect(() => reset, []);
    
    return (
        <PageSkeleton isDisplayed={stepsStore.isLoading}>
            <div className={classes.container}>
                <Step/>
            </div>
        </PageSkeleton>
    );
}