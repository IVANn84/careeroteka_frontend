/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useHistory } from 'react-router';
import React, { useEffect } from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreRegisterPage } from 'Page/Register/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

export default function Register({ classes }) {
  const history = useHistory();

  const {
    entityStore,
    fieldsStore,
    signup,
    reset,
  } = useStoreRegisterPage();

  useEffect(() => reset, [reset]);

  const gotoLogin = () => history.push('/login');

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        component="h1"
        variant="H1"
        variantMobile="H1"
      >
        Ускорьте свой рост уже сегодня
      </Typography>
      <form className={classes.inputs}>
        <Input
          error={entityStore.errors?.email}
          onChange={fieldsStore.setEmail}
          placeholder="Введите почту"
          type="text"
          value={fieldsStore.email}
        />

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
      </form>
      <Button
        className={classes.button}
        isDisabled={
          entityStore.isLoading
          || !fieldsStore.email
          || !fieldsStore.password
          || !fieldsStore.confirmPassword
        }
        mode="primary"
        onClick={() => signup(gotoLogin)}
      >
        Продолжить
      </Button>
      <div className={classes.links}>
        <Typography
          className={classes.registration}
          variant="B2"
          variantMobile="B2"
        >
          Уже есть аккаунт?
          {' '}
          <span
            className={classes.link}
            onClick={gotoLogin}
            onKeyDown={onEnter(gotoLogin)}
          >
            Войти
          </span>
        </Typography>
      </div>
      <div className={classes.links}>
        <Typography
          className={classes.registration}
          variant="C1"
          variantMobile="C1"
        >
          Регистируясь в Сareeroteka, я принимаю условия
          {' '}
          <span className={classes.link}>Пользовательского соглашения </span>
          и
          {' '}
          <span className={classes.link}>Оферты</span>
        </Typography>
      </div>
    </div>
  );
}
