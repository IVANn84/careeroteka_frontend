import React from 'react';

import Button from 'Component/Button';
import Typography from 'Component/Typography';
import { useStoreSurveyPage } from 'Page/Survey/stores';
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
            variant="H1"
            variantMobile="H1"
            component="h1"
          >
            Зарплата и оценка профессии
          </Typography>
          <Typography
            variant="B1"
            variantMobile="B2"
            component="p"
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
              key={id}
              name={name}
              description={description}
              value={value}
              onRate={selectedValue => stepsStore.rateReviewType(id, selectedValue)}
            />
          ))}
        </div>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => setStep(3)}
          mode="dark"
        >
          Назад
        </Button>
        <Button
          className={classes.button}
          onClick={completeSurvey}
          isDisabled={!stepsStore.isStepValid(4)}
          mode="dark"
        >
          Завершить
        </Button>
      </div>
    </div>
  );
}
