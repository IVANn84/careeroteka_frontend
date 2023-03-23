import React, {useEffect} from 'react';

import {useStoreLoginPage} from 'Page/Login/stores';

import Input from 'Component/Input';
import Button from 'Component/Button';
import Typography from 'Component/Typography';

export default function Login({
    classes,
}) {
    const {
        isLoading,
        error,
        login,
        reset,
        fieldsStore,
    } = useStoreLoginPage();
    
    useEffect(() => reset, []);
    
    return (
        <div className={classes.container}>
            <Typography
                className={classes.title}
                variant='H1'
                variantMobile='H1'
                component='h1'>
                Войти в сервис
            </Typography>
            <div className={classes.inputs}>
                <Input
                    type='text'
                    placeholder='Почта'
                    value={fieldsStore.email}
                    isRequired
                    onChange={fieldsStore.setEmail}
                    isDisabled={isLoading}
                    onSubmit={login}
                    isClearable/>
                <Input
                    type='password'
                    placeholder='Пароль'
                    value={fieldsStore.password}
                    isRequired
                    onChange={fieldsStore.setPassword}
                    isDisabled={isLoading}
                    error={error}
                    onSubmit={login}
                    isClearable/>
            </div>
            <Button
                className={classes.button}
                mode='primary'
                isDisabled={isLoading || !fieldsStore.email || !fieldsStore.password}
                onClick={login}>
                Продолжить
            </Button>
        </div>
    );
}