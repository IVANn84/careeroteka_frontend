import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {useStoreOnboardingPage} from 'Page/Onboarding/stores';
import {useStoreLayoutComponent} from 'Component/Layout/stores';

import {PageSkeleton} from 'Component/Skeleton';

import Step from './components/blocks/Step';

export default function Onboarding({
    classes,
}) {
    const history = useHistory();
    
    const {
        fetchCurrentUser,
    } = useStoreLayoutComponent();
    
    const {
        reset,
        stepsStore,
        isDone,
    } = useStoreOnboardingPage();
    
    useEffect(() => {
        const fetchFirstStep = async () => {
            stepsStore.setIsLoading(true);
            await stepsStore.fetchStepData();
            stepsStore.setIsLoading(false);
        };
        fetchFirstStep();
        
        return reset;
    }, []);
    
    useEffect(() => {
        (async function () {
            if (isDone) {
                await fetchCurrentUser();
                history.push('/verify-email');
            }
        })();
    }, [isDone]);
    
    return (
        <PageSkeleton isDisplayed={stepsStore.isLoading}>
            <div className={classes.container}>
                <Step/>
            </div>
        </PageSkeleton>
    );
}