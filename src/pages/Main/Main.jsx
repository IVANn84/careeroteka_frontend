import React from 'react';

import MainBlock from './components/blocks/Main';
import Articles from './components/blocks/Articles';
import Professions from './components/blocks/Professions';

export default function Main({
    dispatcher,
    
    classes,
}) {
    return (
        <div className={classes.container}>
            <MainBlock/>
            <Articles/>
            <Professions dispatcher={dispatcher}/>
        </div>
    );
}