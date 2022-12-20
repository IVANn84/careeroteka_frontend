import React, {useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {useStoreLayoutComponent} from 'Component/Layout/stores';

/**
 * Проверка авторизации, если не авторизован, то редирект на страницу авторизации
 */
export default function withAuth(Component) {
    function WithAuth(props) {
        const location = useLocation();
        const history = useHistory();
        const {
            isAuth,
            isLoading,
        } = useStoreLayoutComponent();
        
        useEffect(() => {
            if (!isAuth && !isLoading) {
                sessionStorage.setItem('unauthorizedFromUrl', location.pathname + location.hash + location.search);
                history.push('/login');
            }
        }, [isAuth, isLoading]);
        
        return isAuth
            ? (
                <Component {...props}/>
            )
            : null;
    }
    
    return observer(WithAuth);
}