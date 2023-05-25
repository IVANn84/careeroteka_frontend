/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useStoreRegisterPage } from 'Page/Register/stores';
import { useHistory } from 'react-router';
import { useObserver } from 'mobx-react-lite';
import { useFormik } from 'formik';
import { autorun } from 'mobx';
import * as Yup from 'yup';

import Input from 'Component/Input';
import Button from 'Component/Button';
import Typography from 'Component/Typography';

function Register({ classes }) {
  const history = useHistory();

  const {
    isLoading, signup, reset, fieldsStore,
  } = useStoreRegisterPage();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Неправильный формат электронной почты')
      .required('Email обязателен')
      .matches(/^\S+@\S+$/i, 'Неверный формат email'),
    password: Yup.string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен содержать не менее 8 символов'),
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //     'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву,
    // одну цифру и один специальный символ',
    //   ),
    confirmPassword: Yup.string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен содержать не менее 6 символов'),
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //     'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву,
    // одну цифру и один специальный символ',
    //   ),
  });

  const initialValues = {
    email: fieldsStore.email,
    password: fieldsStore.password,
    confirmPassword: fieldsStore.confirmPassword,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      signup();
    },
  });

  console.log(!formik.isValid);
  console.log(isLoading);
  console.log(!fieldsStore.email);
  console.log(!fieldsStore.password);
  console.log(!fieldsStore.confirmPassword);

  useEffect(() => {
    reset();

    autorun(() => {
      fieldsStore.setEmail(formik.values.email);
      fieldsStore.setPassword(formik.values.password);
      fieldsStore.repeatPassword(formik.values.confirmPassword);
    });

    return () => {
      autorun(() => {
        fieldsStore.setEmail(null);
        fieldsStore.setPassword(null);
        fieldsStore.repeatPassword(null);
      });
    };
  }, [
    fieldsStore,
    reset,
    formik.values.email,
    formik.values.password,
    formik.values.confirmPassword,
  ]);

  const gotoLogin = () => history.push('/login');

  return useObserver(() => (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="H1"
        variantMobile="H1"
        component="h1"
      >
        Ускорьте&nbsp;свой&nbsp;рост&nbsp;уже сегодня
      </Typography>
      <form onSubmit={formik.handleSubmit} className={classes.inputs}>
        <Input
          name="email"
          type="text"
          placeholder="Введите почту"
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />

        <Input
          name="password"
          type="password"
          placeholder="Введите пароль"
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Повторите пароль"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange('confirmPassword')}
          onBlur={formik.handleBlur('confirmPassword')}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
        />

        <Button
          className={classes.button}
          mode="primary"
          onClick={signup}
          isDisabled={
            !formik.isValid
            || isLoading
            || !fieldsStore.email
            || !fieldsStore.password
            || !fieldsStore.confirmPassword
          }
        >
          Продолжить
        </Button>
      </form>
      <div className={classes.links}>
        <Typography
          className={classes.registration}
          variant="B2"
          variantMobile="B2"
        >
          Уже есть аккаунт?
          {' '}
          <span className={classes.link} onClick={gotoLogin}>
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
  ));
}

export default Register;
