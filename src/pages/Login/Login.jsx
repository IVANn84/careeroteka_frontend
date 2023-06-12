/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { useStoreLoginPage } from 'Page/Login/stores';

import Input from 'Component/Input';
import Button from 'Component/Button';
import Typography from 'Component/Typography';
// import { onEnter } from 'Util/onEnter';

export default function Login({
  classes,
}) {
  const history = useHistory();

  const {
    isLoading,
    error,
    login,
    reset,
    fieldsStore,
  } = useStoreLoginPage();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => reset, []);

  // Если пользователь авторизовался, то редиректим на прошлую страницу или на главную
  const redirectAfterLogin = () => {
    const unauthorizedFromUrl = sessionStorage.getItem('unauthorizedFromUrl');

    if (unauthorizedFromUrl) {
      sessionStorage.removeItem('unauthorizedFromUrl');
      history.push(unauthorizedFromUrl);
    } else {
      history.push('/');
    }
  };

  const onLogin = () => login(redirectAfterLogin);

  const gotoRecovery = () => history.push('/password-recovery');
  const gotoRegistration = () => history.push('/signup');

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="H1"
        variantMobile="H1"
        component="h1"
      >
        Войти в сервис
      </Typography>
      <div className={classes.inputs}>
        <Input
          type="text"
          placeholder="Почта"
          value={fieldsStore.email}
          isRequired
          onChange={fieldsStore.setEmail}
          isDisabled={isLoading}
          onSubmit={onLogin}
          isClearable
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={fieldsStore.password}
          isRequired
          onChange={fieldsStore.setPassword}
          isDisabled={isLoading}
          error={error}
          onSubmit={onLogin}
          isClearable
        />
      </div>
      <Button
        className={classes.button}
        mode="primary"
        isDisabled={isLoading || !fieldsStore.email || !fieldsStore.password}
        onClick={onLogin}
      >
        Продолжить
      </Button>
      <div className={classes.links}>
        <Typography
          className={classes.link}
          variant="B2"
          variantMobile="B2"
          component="p"
          tabIndex={0}
          onClick={gotoRecovery}
        >
          Забыли пароль?
        </Typography>
        <Typography
          className={classes.registration}
          variant="B2"
          variantMobile="B2"
        >
          Еще нет аккаунта?
          {' '}
          <span
            className={classes.link}
            onClick={gotoRegistration}
          >
            Зарегистрируйтесь
          </span>
        </Typography>
      </div>
    </div>
  );
}
