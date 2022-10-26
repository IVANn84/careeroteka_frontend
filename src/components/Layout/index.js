import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import DefaultLayout from './components/DefaultLayout';

import connector from './connector';
import dispatcher from './dispatcher';

const Layout = props => {
    useEffect(() => {
        props.dispatcher.fetchCurrentUser();
    }, []);
    
    return (
        <DefaultLayout {...props}/>
    );
};

export default connect(connector, dispatcher)(Layout);