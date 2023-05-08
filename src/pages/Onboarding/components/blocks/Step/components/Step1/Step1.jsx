import React, { useEffect, useMemo } from 'react';
import { getSnapshot } from 'mobx-state-tree';

import Button from 'Component/Button';
import Typography from 'Component/Typography';
import Input from 'Component/Input';

import { useStoreOnboardingPage } from 'Page/Onboarding/stores';

export default function Step1({
  classes,
}) {
  const {
    setStep,
    stepsStore,
    citiesStore,
  } = useStoreOnboardingPage();

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
            value={stepsStore.stepsData[1].firstName}
            placeholder="Введите ваше имя"
            isRequired
            hasAutoFocus
            error={stepsStore.errors.step_1.firstName}
            onChange={value => stepsStore.setStepData(1, 'firstName', value)}
          />
          <Input
            type="text"
            value={stepsStore.stepsData[1].lastName}
            placeholder="Введите вашу фамилию"
            isRequired
            error={stepsStore.errors.step_1.name}
            onChange={value => stepsStore.setStepData(1, 'lastName', value)}
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
            error={stepsStore.errors.step_1.telegramUsername}
            value={stepsStore.stepsData[1].telegramUsername}
            placeholder="Telegram"
            isRequired
            onChange={value => stepsStore.setStepData(1, 'telegramUsername', value)}
          />
        </div>
      </div>
      <div className={classes.resumeContainer}>
        <Typography
          className={classes.resumeTitle}
          variant="H2"
          variantMobile="H2"
          component="h2"
        >
          Загрузите свое резюме
        </Typography>
        <Typography
          className={classes.resumeDescription}
          variant="B1"
          variantMobile="B2"
          component="p"
        >
          Это необязательно, но если вы планируете работать с ментором,
          мы рекомендуем загрузить резюме
        </Typography>
        <Input
          type="file"
          accept=".pdf,.doc,.docx"
          buttonText="Или загрузите резюме с вашего устройства"
          isClearable
          error={stepsStore.errors.step_1.resume}
          onChange={value => stepsStore.setStepData(1, 'resume', value)}
          value={stepsStore.stepsData[1].resume}
        >
          <p>Перетащите файл резюме сюда</p>
          <p>Используйте файлы формата pdf или doc(x)</p>
        </Input>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          onClick={() => setStep(2)}
          isDisabled={!stepsStore.isStepValid(1)}
          mode="dark"
        >
          Все круто
        </Button>
      </div>
    </div>
  );
}
