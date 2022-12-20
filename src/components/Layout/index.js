import React, {useEffect} from 'react';

import DefaultLayout from './components/DefaultLayout';
import {useStoreLayoutComponent} from 'Component/Layout/stores';

const Layout = props => {
    const {
        reset,
        fetchCurrentUser,
    } = useStoreLayoutComponent();
    
    useEffect(() => {
        fetchCurrentUser();
        
        return reset;
    }, []);
    
    return (
        <DefaultLayout {...props}/>
    );
};

export default Layout;