import React, {useRef} from 'react';

import MainBlock from './components/blocks/Main';
import Articles from './components/blocks/Articles';
import Professions from './components/blocks/Professions';

export default function Main({
    dispatcher,
    
    classes,
}) {
    const $professions = useRef(null);
    
    return (
        <div className={classes.container}>
            <MainBlock $professions={$professions}/>
            <Articles/>
            <Professions
                ref={$professions}
                dispatcher={dispatcher}/>
        </div>
    );
}