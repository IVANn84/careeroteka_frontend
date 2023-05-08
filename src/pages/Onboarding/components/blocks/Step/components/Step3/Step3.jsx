import React from 'react';

import Button from 'Component/Button';
import Typography from 'Component/Typography';
import Input from 'Component/Input';

import { useStoreOnboardingPage } from 'Page/Onboarding/stores';

export default function Step3({
  classes,
}) {
  const {
    setStep,
    stepsStore,
    completeOnboarding,
  } = useStoreOnboardingPage();

  return (
    <div className={classes.container}>
      <div className={classes.fields}>
        <div className={classes.header}>
          <Typography
            variant="H1"
            variantMobile="H1"
            component="h1"
          >
            Какой вопрос или ситуацию вы хотели бы
            обсудить с ментором?
          </Typography>
          <Typography
            variant="B1"
            variantMobile="B2"
            component="p"
          >
            Это поле не обязательно для заполнения, но если вы планируете работать с ментором,
            оно поможет эксперту проработать ваш вопрос или кейс.
          </Typography>
        </div>
        <Input
          className={classes.input}
          type="textarea"
          isClearable
          value={stepsStore.stepsData[3].name}
          placeholder="Например: Мне нужна помощь с созданием маркетинговой стратегии"
          onChange={stepsStore.setQuestion}
        />
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => setStep(2)}
          mode="dark"
        >
          Назад
        </Button>
        <Button
          className={classes.button}
          onClick={completeOnboarding}
          mode="dark"
        >
          {stepsStore.stepsData[3].name
            ? 'Продолжить'
            : 'Пропустить'}
        </Button>
      </div>
    </div>
  );
}
