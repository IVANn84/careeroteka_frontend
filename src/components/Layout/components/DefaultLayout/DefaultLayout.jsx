import React from 'react';
import {NavLink} from 'react-router-dom';
import moment from 'moment';

import Icon from 'Component/Icon';
import Preloader from 'Component/Preloader';

/**
 * Основной лейаут
 * @param {JSX.Element | Function} children
 * @param {Boolean} isLoading
 * @param {Boolean} isAuth - Авторизован ли пользователь
 * @param {Object} classes - Классы со стилями
 * @returns {JSX.Element}
 */
export default function DefaultLayout({
    children,
    isLoading,
    isAuth,
    
    classes,
}) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <NavLink
                    className={classes.headerTitle}
                    to="/"
                    exact>
                    careeroteka
                </NavLink>
            </div>
            <main className={classes.contentContainer}>
                <Preloader
                    isDisplayed={isLoading}
                    isAbsolute>
                    {typeof children === 'function'
                        ? children({isAuth})
                        : children}
                </Preloader>
            </main>
            <div className={classes.footerContainer}>
                <div className={classes.footer}>
                    <div className={classes.footerLogo}>
                        <span className={classes.footerTitle}>
                            careeroteka
                        </span>
                        <div className={classes.footerLinksDesktop}>
                            <a
                                href="https://vk.com"
                                rel="noopener noreferrer"
                                target="_blank">
                                <Icon name="vk"/>
                            </a>
                            <a
                                href="https://vk.com"
                                rel="noopener noreferrer"
                                target="_blank">
                                <Icon name="telegram"/>
                            </a>
                        </div>
                    </div>
                    <div className={classes.footerNavigation}>
                        <NavLink to="/about">
                            О нас
                        </NavLink>
                        <NavLink to="/donate">
                            Купите нам кофе
                        </NavLink>
                        <NavLink to="/bug">
                            Нашли ошибку?
                        </NavLink>
                        <NavLink to="/faq">
                            FAQ
                        </NavLink>
                        <NavLink to="/">
                            Кураторам
                        </NavLink>
                        <NavLink to="/">
                            Курсам
                        </NavLink>
                    </div>
                    <div className={classes.footerLinksMobile}>
                        <a
                            href="https://vk.com"
                            rel="noopener noreferrer"
                            target="_blank">
                            <Icon name="vk"/>
                        </a>
                        <a
                            href="https://vk.com"
                            rel="noopener noreferrer"
                            target="_blank">
                            <Icon name="telegram"/>
                        </a>
                    </div>
                </div>
                <div className={classes.copyright}>
                    <span>
                        © {moment().year()}
                    </span>
                    <span>
                        ООО «Careeroteka»
                    </span>
                </div>
            </div>
        </div>
    );
}