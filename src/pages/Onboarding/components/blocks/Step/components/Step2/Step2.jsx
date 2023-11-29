import React, { useEffect } from 'react';

import { useStoreOnboardingPage } from 'Page/Onboarding/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

import AreaList from './components/AreaList';

export default function Step2({
  classes,
}) {
  const {
    setStep,
    stepsStore,
    areasStore,
  } = useStoreOnboardingPage();

  useEffect(() => {
    areasStore.fetchAreas();
    return () => {
      stepsStore.clearSupportData();
      areasStore.setValues([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.fields}>
        <Typography
          className={classes.title}
          component="h1"
          variant="H1"
          variantMobile="H1"
        >
          Выберите направление наиболее близкое для вашей текущей позиции
        </Typography>
        <Input
          className={classes.areaSearchInput}
          isClearable
          onChange={stepsStore.setSupportAreaSearch}
          placeholder="Поиск по направлению"
          type="text"
          value={stepsStore.supportData.areaSearch}
        />
        <AreaList />
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          mode="dark"
          onClick={() => setStep(1)}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          className={classes.button}
          isDisabled={!stepsStore.isStepValid(2)}
          mode="dark"
          onClick={() => setStep(3)}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
