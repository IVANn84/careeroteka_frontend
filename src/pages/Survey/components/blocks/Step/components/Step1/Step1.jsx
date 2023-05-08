import React, { useEffect, useMemo } from 'react';
import { getSnapshot } from 'mobx-state-tree';

import Button from 'Component/Button';
import Typography from 'Component/Typography';
import Input from 'Component/Input';

import { useStoreSurveyPage } from 'Page/Survey/stores';

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
            variant="B2"
            variantMobile="B2"
            className={classes.optionAddInfo}
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
          variant="H1"
          variantMobile="H1"
          component="h1"
        >
          Расскажите о себе
        </Typography>
        <div className={classes.inputs}>
          <Input
            type="text"
            value={stepsStore.stepsData[1].name}
            placeholder="Введите ваше имя"
            isRequired
            hasAutoFocus
            error={stepsStore.errors.step_1.name}
            onChange={value => stepsStore.setStepData(1, 'name', value)}
          />
          <Input
            type="text"
            value={stepsStore.stepsData[1].city}
            placeholder="Введите ваш город"
            isRequired
            error={stepsStore.errors.step_1.city}
            hasHint
            hintOptions={cityOptions}
            hintIsLoading={citiesStore.isLoading}
            hintPlaceholder="У нас еще нет студентов отсюда. Мы запомним этот город"
            onHintSelect={({ name }) => stepsStore.setStepData(1, 'city', name)}
            onChange={value => stepsStore.setStepData(1, 'city', value)}
          />
          <Input
            type="text"
            value={stepsStore.stepsData[1].job}
            isRequired
            error={stepsStore.errors.step_1.job}
            placeholder="Введите ваше текущее место работы"
            onChange={value => stepsStore.setStepData(1, 'job', value)}
          />
          <Input
            type="text"
            value={stepsStore.stepsData[1].position}
            isRequired
            error={stepsStore.errors.step_1.position}
            placeholder="Введите вашу должность"
            onChange={value => stepsStore.setStepData(1, 'position', value)}
          />
          <Input
            type="text"
            error={stepsStore.errors.step_1.link}
            value={stepsStore.stepsData[1].link}
            placeholder="Введите ссылку на FB/LinkedIN"
            onChange={value => stepsStore.setStepData(1, 'link', value)}
            isClearable
          />
        </div>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          onClick={() => setStep(2)}
          isDisabled={!stepsStore.isStepValid(1)}
          mode="dark"
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
}
