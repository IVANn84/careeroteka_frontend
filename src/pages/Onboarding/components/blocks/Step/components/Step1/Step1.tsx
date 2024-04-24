import React, { useEffect, useMemo } from 'react';
import { getSnapshot } from 'mobx-state-tree';

import { useStoreOnboardingPage } from 'Page/Onboarding/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

export default function Step1({
  classes,
}) {
  const {
    stepsStore,
    citiesStore,
  } = useStoreOnboardingPage();

  useEffect(() => {
    void citiesStore.fetchCities();
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
            error={stepsStore.errors.step_1.firstName}
            isRequired
            onChange={value => stepsStore.setStepData(1, 'firstName', value)}
            placeholder="Введите ваше имя"
            type="text"
            value={stepsStore.stepsData[1].firstName}
          />
          <Input
            error={stepsStore.errors.step_1.lastName}
            isRequired
            onChange={value => stepsStore.setStepData(1, 'lastName', value)}
            placeholder="Введите вашу фамилию"
            type="text"
            value={stepsStore.stepsData[1].lastName}
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
            error={stepsStore.errors.step_1.telegramUsername}
            isRequired
            onChange={value => stepsStore.setStepData(1, 'telegramUsername', value)}
            placeholder="Telegram"
            type="text"
            value={stepsStore.stepsData[1].telegramUsername}
          />
        </div>
      </div>
      <div className={classes.resumeContainer}>
        <Typography
          className={classes.resumeTitle}
          component="h2"
          variant="H2"
          variantMobile="H2"
        >
          Загрузите свое резюме
        </Typography>
        <Typography
          className={classes.resumeDescription}
          component="p"
          variant="B1"
          variantMobile="B2"
        >
          Это необязательно, но если вы планируете работать с ментором,
          мы рекомендуем загрузить резюме
        </Typography>
        <Input
          accept=".pdf,.doc,.docx"
          buttonText="Или загрузите резюме с вашего устройства"
          error={stepsStore.errors.step_1.resume}
          isClearable
          onChange={value => stepsStore.setStepData(1, 'resume', value)}
          type="file"
          value={stepsStore.stepsData[1].resume}
        >
          <p>Перетащите файл резюме сюда</p>
          <p>Используйте файлы формата pdf или doc(x)</p>
        </Input>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          isDisabled={!stepsStore.isStepValid(1)}
          mode="dark"
          onClick={() => stepsStore.setStep(2)}
        >
          Все круто
        </Button>
      </div>
    </div>
  );
}
