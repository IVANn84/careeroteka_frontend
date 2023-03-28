import React from 'react';

import {PageSkeleton} from 'Component/Skeleton';

import {useStoreLayoutComponent} from 'Component/Layout/stores';

import Header from './components/Header';
import Footer from './components/Footer';

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