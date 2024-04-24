import React, { useEffect } from 'react';

import { useStoreSurveyPage } from 'Page/Survey/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

import AreaList from './components/AreaList';

export default function Step2({
  classes,
}) {
  const {
    stepsStore,
    areasStore,
  } = useStoreSurveyPage();

  useEffect(() => {
    void areasStore.fetchAreas();
    return () => {
      stepsStore.clearSupportData();
      areasStore.setValues([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.fields}>
        <div className={classes.header}>
          <Typography
            component="h1"
            variant="H1"
            variantMobile="H1"
          >
            Выбор направления
          </Typography>
          <Typography
            component="p"
            variant="B1"
            variantMobile="B2"
          >
            Мы зададим несколько вопросов, на основе которых будем обновлять информацию на странице
            профессии.
          </Typography>
        </div>
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
          onClick={() => stepsStore.setStep(1)}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          className={classes.button}
          isDisabled={!stepsStore.isStepValid(2)}
          mode="dark"
          onClick={() => stepsStore.setStep(3)}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
