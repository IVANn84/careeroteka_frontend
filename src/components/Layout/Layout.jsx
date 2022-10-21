import React from 'react';
import {NavLink} from 'react-router-dom';
import moment from 'moment';

import Icon from 'Component/Icon';

/**
 * Основной лейаут
 * @param {JSX.Element} children
 * @param {Object} classes - Классы со стилями
 * @returns {JSX.Element}
 */
export default function Layout({
    children,
    
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
                {children}
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