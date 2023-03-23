import React from 'react';

import {useStoreSurveyPage} from 'Page/Survey/stores';

import Step0 from './components/Step0';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

export default function Step() {
    const {
        step,
    } = useStoreSurveyPage();
    
    switch (step) {
        case 0:
            return (<Step0/>);
            
        case 1:
            return (<Step1/>);
            
        case 2:
            return (<Step2/>);
            
        case 3:
            return (<Step3/>);
            
        case 4:
            return (<Step4/>);
            
        case 5:
            return (<Step5/>);
    }
}