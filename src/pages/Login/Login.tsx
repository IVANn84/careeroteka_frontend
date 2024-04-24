import { useHistory } from 'react-router';
import React, { useEffect } from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreLoginPage } from 'Page/Login/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

export default function Login({
  classes,
}) {
  const history = useHistory();

  const {
    login,
    reset,
    stateStore,
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
        component="h1"
        variant="H1"
        variantMobile="H1"
      >
        Войти в сервис
      </Typography>
      <div className={classes.inputs}>
        <Input
          isClearable
          isDisabled={stateStore.isLoading}
          isRequired
          onChange={fieldsStore.setEmail}
          onSubmit={onLogin}
          placeholder="Почта"
          type="text"
          value={fieldsStore.email}
        />
        <Input
          error={stateStore.error}
          isClearable
          isDisabled={stateStore.isLoading}
          isRequired
          onChange={fieldsStore.setPassword}
          onSubmit={onLogin}
          placeholder="Пароль"
          type="password"
          value={fieldsStore.password}
        />
      </div>
      <Button
        className={classes.button}
        isDisabled={stateStore.isLoading || !fieldsStore.email || !fieldsStore.password}
        mode="primary"
        onClick={onLogin}
      >
        Продолжить
      </Button>
      <div className={classes.links}>
        <Typography
          className={classes.link}
          component="p"
          onClick={gotoRecovery}
          tabIndex={0}
          variant="B2"
          variantMobile="B2"
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
            onKeyDown={onEnter(gotoRegistration)}
            role="button"
            tabIndex={0}
          >
            Зарегистрируйтесь
          </span>
        </Typography>
      </div>
    </div>
  );
}
