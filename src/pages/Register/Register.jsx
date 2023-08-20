/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useStoreRegisterPage } from 'Page/Register/stores';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { onEnter } from 'Util/onEnter';

import Input from 'Component/Input';
import Button from 'Component/Button';
import Typography from 'Component/Typography';

export default function Register({ classes }) {
  const history = useHistory();

  const {
    isLoading, signup, reset, fieldsStore,
  } = useStoreRegisterPage();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email обязателен')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Неверный формат email'),
    password: Yup.string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен содержать не менее 6 символов'),
    confirmPassword: Yup.string()
      .required('Введите повторный пароль')
      .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
  });

  const initialValues = {
    email: fieldsStore.email,
    password: fieldsStore.password,
    confirmPassword: fieldsStore.confirmPassword,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  useEffect(() => reset, [reset]);

  useEffect(() => {
    if (fieldsStore.email !== formik.values.email) {
      fieldsStore.setEmail(formik.values.email);
    }
    if (fieldsStore.password !== formik.values.password) {
      fieldsStore.setPassword(formik.values.password);
    }
    if (fieldsStore.confirmPassword !== formik.values.confirmPassword) {
      fieldsStore.repeatPassword(formik.values.confirmPassword);
    }
  }, [
    fieldsStore,
    reset,
    formik.values.email,
    formik.values.password,
    formik.values.confirmPassword,
  ]);

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
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          error={formik.touched.email && formik.errors.email}
        />

        <Input
          name="password"
          type="password"
          placeholder="Введите пароль"
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          error={formik.touched.password && formik.errors.password}
        />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Повторите пароль"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange('confirmPassword')}
          onBlur={formik.handleBlur('confirmPassword')}
          error={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
      </form>
      <Button
        className={classes.button}
        mode="primary"
        onClick={() => signup(gotoLogin)}
        isDisabled={
          !formik.values.email
          || !formik.values.password
          || !formik.values.confirmPassword
          || !formik.isValid
          || isLoading
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
