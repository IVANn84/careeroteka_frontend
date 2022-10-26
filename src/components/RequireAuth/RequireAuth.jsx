import {useEffect} from 'react';

/**
 * Проверка авторизации, если не авторизован, то редирект на страницу авторизации
 * @param {JSX.Element} children
 * @param {Boolean} isAuth - Авторизован ли пользователь
 * @param {Object} history
 * @param {Object} location
 * @returns {JSX.Element | null}
 */
export default function RequireAuth({
    children,
    isAuth,
    history,
    location,
}) {
    useEffect(() => {
        if (!isAuth) {
            sessionStorage.setItem('unauthorizedFromUrl', location.pathname + location.hash + location.search);
            history.push('/login');
        }
    }, [isAuth]);
    
    return isAuth
        ? children
        : null;
}