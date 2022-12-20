import React, {useEffect} from 'react';

import Main from './components/blocks/Main';
import Description from './components/blocks/Description';
import AverageSalaries from './components/blocks/AverageSalaries';
import Directions from './components/blocks/Directions';
import Skills from './components/blocks/Skills';
import SalaryInCapital from './components/blocks/SalaryInCapital';
import SalaryInRegion from './components/blocks/SalaryInRegion';
import Courses from './components/blocks/Courses';
import Reviews from './components/blocks/Reviews';
import Survey from './components/blocks/Survey';

import {useStoreProfessionPage} from 'Page/Profession/stores';
import {useDevice} from 'Hook/useDevice';

export default function Profession({
    match: {
        params: {
            id,
        },
    },
    classes,
}) {
    const deviceType = useDevice();
    
    const {
        entityStore,
        reset,
    } = useStoreProfessionPage();
    
    useEffect(() => {
        entityStore.fetch(id);
        
        return reset;
    }, []);
    
    return (
        <div className={classes.container}>
            <Main/>
            <div className={classes.inlineBlocks}>
                <Description/>
                <AverageSalaries/>
            </div>
            <Directions/>
            <Skills/>
            <div className={classes.inlineBlocks}>
                <SalaryInCapital/>
                <SalaryInRegion/>
            </div>
            {deviceType === 'desktop' && !!entityStore.entity?.courses?.length && (
                <Courses/>
            )}
            <Reviews/>
            <Survey/>
        </div>
    );
}