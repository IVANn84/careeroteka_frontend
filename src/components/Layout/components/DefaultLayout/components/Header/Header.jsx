import React from 'react';
import {NavLink} from 'react-router-dom';

import HeaderNavigation from './components/HeaderNavigation';

import {useStoreLayoutComponent} from 'Component/Layout/stores';

export default function Header({
    classes,
}) {
    const {
        isLoading,
    } = useStoreLayoutComponent();
    
    return (
        <div className={classes.container}>
            <NavLink
                className={classes.title}
                to='/'
                exact>
                careeroteka
            </NavLink>
            {!isLoading && (
                <HeaderNavigation/>
            )}
        </div>
    );
}