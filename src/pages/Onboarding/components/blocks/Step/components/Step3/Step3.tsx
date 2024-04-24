import React from 'react';

import { useStoreOnboardingPage } from 'Page/Onboarding/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

export default function Step3({
  classes,
}) {
  const {
    stepsStore,
    completeOnboarding,
  } = useStoreOnboardingPage();

  return (
    <div className={classes.container}>
      <div className={classes.fields}>
        <div className={classes.header}>
          <Typography
            component="h1"
            variant="H1"
            variantMobile="H1"
          >
            Какой вопрос или ситуацию вы хотели бы
            обсудить с ментором?
          </Typography>
          <Typography
            component="p"
            variant="B1"
            variantMobile="B2"
          >
            Это поле не обязательно для заполнения, но если вы планируете работать с ментором,
            оно поможет эксперту проработать ваш вопрос или кейс.
          </Typography>
        </div>
        <Input
          className={classes.input}
          isClearable
          onChange={stepsStore.setQuestion}
          placeholder="Например: Мне нужна помощь с созданием маркетинговой стратегии"
          type="textarea"
          value={stepsStore.stepsData[3].name}
        />
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          mode="dark"
          onClick={() => stepsStore.setStep(2)}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          className={classes.button}
          mode="dark"
          onClick={completeOnboarding}
        >
          {stepsStore.stepsData[3].name
            ? 'Продолжить'
            : 'Пропустить'}
        </Button>
      </div>
    </div>
  );
}
