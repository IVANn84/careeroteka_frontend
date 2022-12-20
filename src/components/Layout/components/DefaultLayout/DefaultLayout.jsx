import React from 'react';
import {NavLink} from 'react-router-dom';
import moment from 'moment';

import Icon from 'Component/Icon';
import ExternalLink from 'Component/ExternalLink';
import Typography from 'Component/Typography';
import {PageSkeleton} from 'Component/Skeleton';

import {useStoreLayoutComponent} from 'Component/Layout/stores';

/**
 * Основной лейаут
 * @param {JSX.Element | Function} children
 * @param {Object} classes - Классы со стилями
 * @returns {JSX.Element}
 */
export default function DefaultLayout({
    children,
    
    classes,
}) {
    const {
        isLoading,
        isAuth,
    } = useStoreLayoutComponent();
    
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <NavLink
                    className={classes.headerTitle}
                    to='/'
                    exact>
                    careeroteka
                </NavLink>
            </div>
            <main className={classes.contentContainer}>
                {isLoading
                    ? (
                        <PageSkeleton/>
                    )
                    : typeof children === 'function'
                        ? children({isAuth})
                        : children
                }
            </main>
            <div className={classes.footerContainer}>
                <div className={classes.footer}>
                    <div className={classes.footerLogo}>
                        <span className={classes.footerTitle}>
                            careeroteka
                        </span>
                        <div className={classes.footerLinksDesktop}>
                            <a
                                href='https://vk.com'
                                rel='noopener noreferrer'
                                target='_blank'>
                                <Icon name='vk'/>
                            </a>
                            <a
                                href='https://vk.com'
                                rel='noopener noreferrer'
                                target='_blank'>
                                <Icon name='telegram'/>
                            </a>
                        </div>
                    </div>
                    <div className={classes.footerNavigation}>
                        <Typography
                            variant='B1'
                            variantMobile='B2'>
                            <NavLink to='/about'>
                                О нас
                            </NavLink>
                        </Typography>
                        <Typography
                            variant='B1'
                            variantMobile='B2'>
                            <NavLink to='/donate'>
                                Купите нам кофе
                            </NavLink>
                        </Typography>
                        <Typography
                            variant='B1'
                            variantMobile='B2'>
                            <NavLink to='/bug'>
                                Нашли ошибку?
                            </NavLink>
                        </Typography>
                        <Typography
                            variant='B1'
                            variantMobile='B2'>
                            <NavLink to='/faq'>
                                FAQ
                            </NavLink>
                        </Typography>
                        <Typography
                            variant='B1'
                            variantMobile='B2'>
                            <NavLink to='/'>
                                Кураторам
                            </NavLink>
                        </Typography>
                        <Typography
                            variant='B1'
                            variantMobile='B2'>
                            <NavLink to='/'>
                                Курсам
                            </NavLink>
                        </Typography>
                    </div>
                    <div className={classes.footerLinksMobile}>
                        <ExternalLink
                            to='https://vk.com'
                            target='_blank'>
                            <Icon name='vk'/>
                        </ExternalLink>
                        <ExternalLink
                            to='https://telegram.com'
                            target='_blank'>
                            <Icon name='telegram'/>
                        </ExternalLink>
                    </div>
                    <div className={classes.copyrightMobile}>
                        <Typography
                            variant='B1'
                            variantMobile='B2'
                            component='div'>
                            ООО «Careeroteka»
                        </Typography>
                        <Typography
                            variant='B1'
                            variantMobile='B2'
                            component='div'>
                            © {moment().year()}
                        </Typography>
                    </div>
                </div>
                <div className={classes.copyrightDesktop}>
                    <Typography
                        variant='B1'
                        variantMobile='B2'>
                        © {moment().year()}
                    </Typography>
                    <Typography
                        variant='B1'
                        variantMobile='B2'>
                        ООО «Careeroteka»
                    </Typography>
                </div>
            </div>
        </div>
    );
}