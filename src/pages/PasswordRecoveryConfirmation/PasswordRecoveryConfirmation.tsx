/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useHistory, useParams } from 'react-router';
import React, { useEffect, useState } from 'react';

import { onEnter } from 'Util/onEnter';
import { useStorePasswordRecovery } from 'Page/PasswordRecovery/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

export default function PasswordRecoveryConfirmation({ classes }) {
  const { uid } = useParams<{ uid: string }>();
  const history = useHistory();
  const [isReset, setReset] = useState(false);

  const {
    reset, entityStore, fieldsStore, resetPassword,
  } = useStorePasswordRecovery();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => reset, []);

  const gotoSignup = () => history.push('/signup');
  const gotoLogin = () => history.push('/login');

  const onReset = (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword(uid, setReset);
  };

  return (
    isReset ? (
      <div className={classes.container_success}>
        <Typography
          component="h1"
          variant="H1"
          variantMobile="H1"
        >
          Пароль успешно изменен!
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

    ) : (
      <div className={classes.container}>
        <Typography
          className={classes.title}
          component="h1"
          variant="H1"
          variantMobile="H4"
        >
          Восстановление пароля
        </Typography>
        <form className={classes.inputs} onSubmit={onReset}>
          <Input
            error={entityStore.errors?.password}
            onChange={fieldsStore.setPassword}
            placeholder="Введите пароль"
            type="password"
            value={fieldsStore.password}
          />
          <Input
            error={entityStore.errors?.confirmPassword}
            onChange={fieldsStore.setConfirmPassword}
            placeholder="Повторите пароль"
            type="password"
            value={fieldsStore.confirmPassword}
          />
          <Button
            className={classes.button}
            isDisabled={
              entityStore.isLoading
              || !fieldsStore.password
              || !fieldsStore.confirmPassword
            }
            mode="primary"
            type="submit"
          >
            Восстановить пароль
          </Button>
        </form>
        <div className={classes.links}>
          <Typography
            className={classes.linkContainer}
            component="p"
            variant="B2"
            variantMobile="B2"
          >
            Еще нет аккаунта?
            {' '}
            <span
              className={classes.link}
              onClick={gotoSignup}
              onKeyDown={onEnter(gotoSignup)}
            >
              Зарегистрируйтесь
            </span>
          </Typography>
        </div>
      </div>
    )
  );
}
