import React, {useEffect} from 'react';
import {useStoreRegisterPage} from 'Page/Register/stores';
import {useHistory} from 'react-router';

import Input from 'Component/Input';
import Button from 'Component/Button';
import Typography from 'Component/Typography';

export default function Register({classes}) {

    const history = useHistory();

    const {
        isLoading,
        error,
        signup,
        reset,
        fieldsStore,
    } = useStoreRegisterPage();

    useEffect(() => reset, []);

    const gotoLogin = () => history.push('/login');


    return (
        <div className={classes.container}>
            <Typography
                className={classes.title}
                variant='H1'
                variantMobile='H1'
                component='h1'
      >
        Ускорьте&nbsp;свой&nbsp;рост&nbsp;уже сегодня
            </Typography>
            <div className={classes.inputs}>
                <Input
                    type='text'
                    placeholder='Введите почту'
                    value={fieldsStore.email}
                    isRequired
                    onChange={fieldsStore.setEmail}
                    isDisabled={isLoading}
                    onSubmit={signup}
                    isClearable
        />
                <Input
                    type='password'
                    placeholder='Введите пароль'
                    value={fieldsStore.password}
                    isRequired
                    onChange={fieldsStore.setPassword}
                    isDisabled={isLoading}
                    error={error}
                    onSubmit={signup}
                    isClearable
        />
                <Input
                    type='password'
                    placeholder='Повторите пароль'
                    value={fieldsStore.confirmPassword}
                    isRequired
                    onChange={fieldsStore.repeatPassword}
                    isDisabled={isLoading}
                    error={error}
                    onSubmit={signup}
                    isClearable
        />
            </div>
            <Button
                className={classes.button}
                mode='primary'
                isDisabled={isLoading || !fieldsStore.email || !fieldsStore.password || !fieldsStore.confirmPassword}
                onClick={signup}
      >
        Продолжить
            </Button>
            <div className={classes.links}>
                <Typography
                    className={classes.registration}
                    variant='B2'
                    variantMobile='B2'
        >
          Уже есть аккаунт?{' '}
                    <span
                        className={classes.link}
                        onClick={gotoLogin}
          >
            Войти
                    </span>
                </Typography>
            </div>
            <div className={classes.links}>
                <Typography
                    className={classes.registration}
                    variant='C1'
                    variantMobile='C1'
        >
          Регистируясь в Сareeroteka, я принимаю условия{' '}
                    <span
                        className={classes.link}
            // onClick={gotoRegistration}
          >
            Пользовательского соглашения{' '}
                    </span>
          и{' '}
                    <span
                        className={classes.link}
            // onClick={gotoRegistration}
          >
            Оферты
                    </span>
                </Typography>
            </div>
        </div>
    );
}
