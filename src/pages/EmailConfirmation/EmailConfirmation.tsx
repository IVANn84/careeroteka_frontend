import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Typography from 'Component/Typography';
import Button from 'Component/Button';
import EmailApi from 'Api/email';

export default function EmailConfirmation({ classes }) {
  const { uid } = useParams<{ uid: string }>();
  const history = useHistory();
  const [isVerify, setVerify] = useState(null);

  useEffect(() => {
    void EmailApi.SendConfirmation(uid)
      .then(res => {
        setVerify(!!res.data?.success);
      });
  }, []); //eslint-disable-line

  const gotoLogin = () => history.push('/login');
  const gotoSignup = () => history.push('/signup');

  if (isVerify === true) {
    return (
      <div className={classes.container}>
        <Typography
          component="h1"
          variant="H1"
          variantMobile="H1"
        >
          Дело сделано!
        </Typography>
        <Typography
          className={classes.info}
          component="p"
          variant="B1"
          variantMobile="B2"
        >
          А теперь продолжим находить работу мечты.
        </Typography>
        <Button
          className={classes.button}
          mode="primary"
          onClick={gotoLogin}
        >
          Продолжить
        </Button>
      </div>
    );
  }

  if (isVerify === false) {
    return (
      <div className={classes.container_error}>
        <Typography
          component="h1"
          variant="H1"
          variantMobile="H1"
        >
          В процессе подтверждения
          e-mail произошла ошибка
        </Typography>
        <Typography
          className={classes.info}
          component="p"
          variant="B1"
          variantMobile="B2"
        >
          Вернитесь к этапу регистрации.
        </Typography>
        <Button
          className={classes.button}
          mode="primary"
          onClick={gotoSignup}
        >
          Вернуться к регистрации
        </Button>
      </div>
    );
  }

  return null;
}
