import React from 'react';

import { useStoreOnboardingPage } from 'Page/Onboarding/stores';

import Step3 from './components/Step3';
import Step2 from './components/Step2';
import Step1 from './components/Step1';

export default function Step() {
  const { stepsStore } = useStoreOnboardingPage();

  switch (stepsStore.step) {
    case 2:
      return (<Step2 />);

    case 3:
      return (<Step3 />);

    case 1:
    default:
      return (<Step1 />);
  }
}
