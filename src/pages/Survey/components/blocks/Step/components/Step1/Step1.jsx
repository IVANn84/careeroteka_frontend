import React, { useEffect, useMemo } from 'react';
import { getSnapshot } from 'mobx-state-tree';

import { useStoreSurveyPage } from 'Page/Survey/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

export default function Step1({
  classes,
}) {
  const {
    setStep,
    stepsStore,
    citiesStore,
  } = useStoreSurveyPage();

  useEffect(() => {
    citiesStore.fetchCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cityList = getSnapshot(citiesStore.values);

  const cityOptions = useMemo(
    () => cityList.map(city => ({
      ...city,
      optionValue: (
        <>
          <p>{city.name}</p>
          <Typography
            className={classes.optionAddInfo}
            variant="B2"
            variantMobile="B2"
          >
            {city.region}
          </Typography>
        </>
      ),
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cityList],
  );

  return (
    <div className={classes.container}>
      <div className={classes.fields}>
        <Typography
          className={classes.title}
          component="h1"
          variant="H1"
          variantMobile="H1"
        >
          Расскажите о себе
        </Typography>
        <div className={classes.inputs}>
          <Input
            error={stepsStore.errors.step_1.name}
            hasAutoFocus
            isRequired
            onChange={value => stepsStore.setStepData(1, 'name', value)}
            placeholder="Введите ваше имя"
            type="text"
            value={stepsStore.stepsData[1].name}
          />
          <Input
            error={stepsStore.errors.step_1.city}
            hasHint
            hintIsLoading={citiesStore.isLoading}
            hintOptions={cityOptions}
            hintPlaceholder="У нас еще нет студентов отсюда. Мы запомним этот город"
            isRequired
            onChange={value => stepsStore.setStepData(1, 'city', value)}
            onHintSelect={({ name }) => stepsStore.setStepData(1, 'city', name)}
            placeholder="Введите ваш город"
            type="text"
            value={stepsStore.stepsData[1].city}
          />
          <Input
            error={stepsStore.errors.step_1.job}
            isRequired
            onChange={value => stepsStore.setStepData(1, 'job', value)}
            placeholder="Введите ваше текущее место работы"
            type="text"
            value={stepsStore.stepsData[1].job}
          />
          <Input
            error={stepsStore.errors.step_1.position}
            isRequired
            onChange={value => stepsStore.setStepData(1, 'position', value)}
            placeholder="Введите вашу должность"
            type="text"
            value={stepsStore.stepsData[1].position}
          />
          <Input
            error={stepsStore.errors.step_1.link}
            isClearable
            onChange={value => stepsStore.setStepData(1, 'link', value)}
            placeholder="Введите ссылку на FB/LinkedIN"
            type="text"
            value={stepsStore.stepsData[1].link}
          />
        </div>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          isDisabled={!stepsStore.isStepValid(1)}
          mode="dark"
          onClick={() => setStep(2)}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
