import { useHistory } from 'react-router-dom';
import React from 'react';
import mainHeaderImage from 'Image/main-header.png';

import Typography from 'Component/Typography';
import Button from 'Component/Button';

export default function Main({
  $professions,

  classes,
}) {
  const history = useHistory();

  const onClickFindProfession = () => window.scrollTo({
    top: $professions.current.getBoundingClientRect().top + window.scrollY,
    behavior: 'smooth',
  });

  const gotoCreatePlan = () => history.push('/create-plan');

  return (
    <div className={classes.container}>
      <div className={classes.about}>
        <Typography
          component="h1"
          variant="H1"
          variantMobile="H1"
        >
          Вики профессий
        </Typography>
        <Typography
          variant="B1"
          variantMobile="B1"
        >
          Энциклопедия о карьере с данными от реальных специалистов и экспертов
        </Typography>
        <div className={classes.actions}>
          <Button onClick={onClickFindProfession}>
            Найти профессию
          </Button>
          <Button
            onClick={gotoCreatePlan}
            variant="outlined"
          >
            Создать план обучения
          </Button>
        </div>
      </div>
      <div className={classes.image}>
        <img
          alt="Главная"
          src={mainHeaderImage}
        />
      </div>
    </div>
  );
}
