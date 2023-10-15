import React from 'react';

import { useStoreSurveyPage } from 'Page/Survey/stores';
import Typography from 'Component/Typography';
import Button from 'Component/Button';

import Review from './components/Review';

export default function Step4({
  classes,
}) {
  const {
    setStep,
    completeSurvey,
    stepsStore,
  } = useStoreSurveyPage();

  return (
    <div className={classes.container}>
      <div className={classes.fields}>
        <div className={classes.header}>
          <Typography
            component="h1"
            variant="H1"
            variantMobile="H1"
          >
            Зарплата и оценка профессии
          </Typography>
          <Typography
            component="p"
            variant="B1"
            variantMobile="B2"
          >
            Это поможет пользователям легче выбирать профессию для старта
            карьеры или смены направления.
          </Typography>
        </div>
        <div className={classes.reviews}>
          {stepsStore.stepsData[4].map(({
            id, name, description, value,
          }) => (
            <Review
              description={description}
              key={id}
              name={name}
              onRate={selectedValue => stepsStore.rateReviewType(id, selectedValue)}
              value={value}
            />
          ))}
        </div>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          mode="dark"
          onClick={() => setStep(3)}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          className={classes.button}
          isDisabled={!stepsStore.isStepValid(4)}
          mode="dark"
          onClick={completeSurvey}
        >
          Завершить
        </Button>
      </div>
    </div>
  );
}
