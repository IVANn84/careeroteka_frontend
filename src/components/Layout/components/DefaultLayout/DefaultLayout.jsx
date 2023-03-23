import React from 'react';

import {PageSkeleton} from 'Component/Skeleton';

import {useStoreLayoutComponent} from 'Component/Layout/stores';

import Header from './components/Header';
import Footer from './components/Footer';

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
            <Header/>
            <main className={classes.contentContainer}>
                <PageSkeleton isDisplayed={isLoading}>
                    {
                        typeof children === 'function'
                            ? children({isAuth})
                            : children
                    }
                </PageSkeleton>
            </main>
            <Footer/>
        </div>
    );
}