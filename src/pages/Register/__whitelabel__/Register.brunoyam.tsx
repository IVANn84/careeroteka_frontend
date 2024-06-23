/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useHistory } from 'react-router';
import React, { useCallback, useEffect, useState } from 'react';

import { onEnter } from 'Util/onEnter';
import { Theme } from 'Theme/theme';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useStoreRegisterPage } from 'Page/Register/stores';
import { useDebouncedValue } from 'Hook/useDebouncedValue';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

export default function Register({ classes }) {
  const history = useHistory();
  const [val, setValue] = useState('');
  const [error, setError] = useState(true);
  const debouncedValue = useDebouncedValue(val, 500);

  const {
    entityStore,
    fieldsStore,
    signup,
    reset,
  } = useStoreRegisterPage();

  const {
    filtersModalStore: {
      coursesByPartnerStore,
    },
  } = useStoreVacanciesPage();

  useEffect(() => {
    void coursesByPartnerStore.fetchCoursesByPartner();
  }, [coursesByPartnerStore]);

  useEffect(() => {
    if (debouncedValue) {
      const value = coursesByPartnerStore.values.find(({ name }) => name === debouncedValue);

      if (value) {
        fieldsStore.setCourseId(value?.id);
        setError(false);
      } else {
        fieldsStore.setCourseId(null);
        setError(true);
      }
    } else {
      setError(true);
    }
  }, [coursesByPartnerStore, debouncedValue, fieldsStore]);

  useEffect(() => reset, [reset]);

  const onFilterChanged = useCallback(fn => value => {
    fn(value);
  }, []);

  const gotoLogin = () => history.push('/login');
  const gotoVerify = () => history.push('/verify-email', { email: fieldsStore.email });

  const onSignup = (e: React.FormEvent) => {
    e.preventDefault();
    signup(gotoVerify);
  };

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
      <form className={classes.inputs} onSubmit={onSignup}>
        <Input
          error={entityStore.errors?.email}
          onChange={fieldsStore.setEmail}
          placeholder="Введите e-mail"
          type="text"
          value={fieldsStore.email}
        />
        <Input
          className={classes.searchInput}
          hasHint
          hintOptions={coursesByPartnerStore.values
            .map(({ id, name }) => ({ id, name }))}
          isClearable
          isDisabled={coursesByPartnerStore.isLoading}
          isSearchable
          onChange={value => setValue(value)}
          onClear={() => {
            setError(true);
            fieldsStore.setCourseId(null);
          }}
          onHintSelect={onFilterChanged(value => {
            setError(false);
            setValue(value?.name);
            fieldsStore.setCourseId(value?.id);
          })}
          placeholder="Выберите курс"
          type="text"
          value={val}
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
        <Button
          className={classes.button}
          isDisabled={
          entityStore.isLoading
          || !fieldsStore.email
          || !fieldsStore.password
          || !fieldsStore.confirmPassword
          || error
        }
          mode="primary"
          type="submit"
        >
          Продолжить
        </Button>
      </form>
      <div className={classes.links}>
        <Typography
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
          Регистируясь в
          {' '}
          {Theme.title}
          , я принимаю условия
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
