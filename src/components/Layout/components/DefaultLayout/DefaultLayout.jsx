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
                            <ExternalLink to='https://vk.com'>
                                <Icon name='vk'/>
                            </ExternalLink>
                            <ExternalLink href='https://vk.com'>
                                <Icon name='telegram'/>
                            </ExternalLink>
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
                    </div>
                    <div className={classes.footerLinksMobile}>
                        <ExternalLink to='https://vk.com'>
                            <Icon name='vk'/>
                        </ExternalLink>
                        <ExternalLink to='https://telegram.com'>
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