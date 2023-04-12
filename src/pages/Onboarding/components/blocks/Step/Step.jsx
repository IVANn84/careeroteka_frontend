import React from 'react';

import {useStoreOnboardingPage} from 'Page/Onboarding/stores';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

export default function Step() {
    const {
        step,
    } = useStoreOnboardingPage();
    
    switch (step) {
        case 1:
            return (<Step1/>);
            
        case 2:
            return (<Step2/>);
            
        case 3:
            return (<Step3/>);
    }
}