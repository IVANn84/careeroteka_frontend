/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useStoreRegisterPage } from 'Page/Register/stores';
import { useHistory } from 'react-router';

import { onEnter } from 'Util/onEnter';

import Input from 'Component/Input';
import Button from 'Component/Button';
import Typography from 'Component/Typography';

export default function Register({ classes }) {
  const history = useHistory();

  const {
    isLoading,
    errors,
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
        variant="H1"
        variantMobile="H1"
        component="h1"
      >
        Ускорьте свой рост уже сегодня
      </Typography>
      <form className={classes.inputs}>
        <Input
          name="email"
          type="text"
          placeholder="Введите почту"
          value={fieldsStore.email}
          onChange={fieldsStore.setEmail}
          error={errors.email}
        />

        <Input
          name="password"
          type="password"
          placeholder="Введите пароль"
          value={fieldsStore.password}
          onChange={fieldsStore.setPassword}
          error={errors.password}
        />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Повторите пароль"
          value={fieldsStore.confirmPassword}
          onChange={fieldsStore.setConfirmPassword}
          error={errors.confirmPassword}
        />
      </form>
      <Button
        className={classes.button}
        mode="primary"
        onClick={() => signup(gotoLogin)}
        isDisabled={
          isLoading
          || !fieldsStore.email
          || !fieldsStore.password
          || !fieldsStore.confirmPassword
        }
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
