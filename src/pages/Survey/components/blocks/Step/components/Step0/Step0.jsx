import React from 'react';

import { useStoreSurveyPage } from 'Page/Survey/stores';
import Typography from 'Component/Typography';
import Button from 'Component/Button';

export default function Step0({
  classes,
}) {
  const {
    setStep,
  } = useStoreSurveyPage();

  return (
    <div className={classes.container}>
      <Typography
        className={`${classes.row} ${classes.center}`}
        component="h1"
        variant="H1"
        variantMobile="H1"
      >
        Пройдите опрос и помогите нам стать лучше
      </Typography>
      <Typography
        className={`${classes.row} ${classes.center}`}
        variant="B1"
        variantMobile="B2"
      >
        Мы зададим несколько вопросов, на основе которых будем обновлять информацию на
        странице професии.
        Старайтесь отвечать честно, отмечая положительные и отрицательные стороны профессии.
      </Typography>
      <Typography
        className={`${classes.row} ${classes.blue} ${classes.center}`}
        variant="B1"
        variantMobile="B2"
        weight="semiBold"
        weightMobile="semiBold"
      >
        Возможно, ваши ответы помогут другим выбрать карьеру и профессию.
      </Typography>
      <Typography
        className={classes.center}
        variant="B1"
        variantMobile="B2"
      >
        Опрос займет
        {' '}
        <Typography
          variant="B1"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="semiBold"
        >
          не более 15 минут.
        </Typography>
      </Typography>
      <Button
        className={classes.button}
        mode="dark"
        onClick={() => setStep(1)}
      >
        Продолжить
      </Button>
    </div>
  );
}
