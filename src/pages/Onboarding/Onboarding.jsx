import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

import { useStoreOnboardingPage } from 'Page/Onboarding/stores';
import { PageSkeleton } from 'Component/Skeleton';
import { useStoreLayoutComponent } from 'Component/Layout/stores';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async function () {
      if (isDone) {
        await fetchCurrentUser();
        history.push('/verify-email');
      }
    }());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDone]);

  return (
    <PageSkeleton isDisplayed={stepsStore.isLoading}>
      <div className={classes.container}>
        <Step />
      </div>
    </PageSkeleton>
  );
}
