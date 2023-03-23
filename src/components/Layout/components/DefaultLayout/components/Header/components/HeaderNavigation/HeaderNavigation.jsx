import React from 'react';
import {useHistory} from 'react-router-dom';

import {useStoreLayoutComponent} from 'Component/Layout/stores';

import Typography from 'Component/Typography';

export default function HeaderNavigation({
    classes,
}) {
    const history = useHistory();
    
    const {
        isAuth,
        logout,
    } = useStoreLayoutComponent();
    
    const gotoLogin = () => {
        sessionStorage.setItem('unauthorizedFromUrl', window.location.pathname + window.location.hash + window.location.search);
        history.push('/login');
    };
    
    const onLogout = () => {
        logout(() => history.push('/'));
    };
    
    const onKeyDown = fn => ({key}) => {
        if (key === 'Enter') {
            fn();
        }
    };
    
    return isAuth
        ? (
            <div className={classes.container}>
                <Typography
                    variant='B1'
                    variantMobile='B2'
                    tabIndex={0}
                    onKeyDown={onKeyDown(onLogout)}
                    onClick={onLogout}>
                    Выйти
                </Typography>
            </div>
        )
        : (
            <div className={classes.container}>
                <Typography
                    variant='B1'
                    variantMobile='B2'
                    tabIndex={0}
                    onKeyDown={onKeyDown(gotoLogin)}
                    onClick={gotoLogin}>
                    Войти
                </Typography>
            </div>
        );
}