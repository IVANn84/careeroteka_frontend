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
    entityStore,
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

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(redirectAfterLogin);
  };

  const gotoRecovery = () => history.push('/password-recovery');
  const gotoRegistration = () => history.push('/signup');

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        component="h1"
        variant="H1"
        variantMobile="H4"
      >
        Войти в сервис
      </Typography>
      <form className={classes.inputs} onSubmit={onLogin}>
        <Input
          error={entityStore.errors.email}
          onChange={fieldsStore.setEmail}
          placeholder="Введите e-mail"
          type="text"
          value={fieldsStore.email}
        />
        <Input
          error={entityStore.errors.password}
          onChange={fieldsStore.setPassword}
          placeholder="Введите пароль"
          type="password"
          value={fieldsStore.password}
        />
        <Button
          className={classes.button}
          isDisabled={entityStore.isLoading || !fieldsStore.email || !fieldsStore.password}
          mode="primary"
          type="submit"
        >
          Продолжить
        </Button>
      </form>
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
          component="p"
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
