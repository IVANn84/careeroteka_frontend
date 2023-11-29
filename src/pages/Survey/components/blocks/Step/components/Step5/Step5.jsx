import { useHistory } from 'react-router';
import React from 'react';

import { useRedirectToLogin } from 'Hook/useRedirectToLogin';
import Typography from 'Component/Typography';
import { useStoreLayoutComponent } from 'Component/Layout/stores';
import Button from 'Component/Button';

export default function Step5({
  classes,
}) {
  const redirectToLogin = useRedirectToLogin();
  const history = useHistory();

  const {
    isAuth,
  } = useStoreLayoutComponent();

  const gotoMain = () => history.push('/');
  const gotoCreatePlan = () => {
    if (isAuth) {
      history.push('/create-plan');
    } else {
      redirectToLogin(false);
    }
  };

  return (
    <div className={classes.container}>
      <Typography
        className={`${classes.row} ${classes.center}`}
        component="h1"
        variant="H1"
        variantMobile="H1"
      >
        Спасибо, теперь мы знаем о таких специалистах немного больше!
      </Typography>
      <Typography
        className={classes.center}
        variant="B1"
        variantMobile="B2"
      >
        На основе этих данных мы также формируем индивидуальные программы обучения из курсов,
        книг и вебинаров. Можем собрать и вам.
        <p>Это бесплатно, понадобится только регистрация.</p>
      </Typography>
      <div className={classes.buttons}>
        <Button
          mode="dark"
          onClick={gotoMain}
          variant="outlined"
        >
          Вернуться в Вики
        </Button>
        <Button
          mode="dark"
          onClick={gotoCreatePlan}
        >
          Создать учебный план
        </Button>
      </div>
    </div>
  );
}
