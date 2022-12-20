import React, {useRef} from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/solid';

import {useStoreProfessionPage} from 'Page/Profession/stores';

import CoursesList from 'Component/Courses';
import Block from 'Component/Block';
import Typography from 'Component/Typography';

export default function Courses({
    classes,
}) {
    const {
        entityStore,
    } = useStoreProfessionPage();
    
    const $sliderButtonRight = useRef(null);
    
    return (
        <Block mode='dark'>
            <div className={classes.header}>
                <Typography
                    variant='H2'
                    variantMobile='H3'
                    component='h2'>
                    Список курсов
                </Typography>
                <div className={classes.navigation}>
                    <ArrowRightIcon
                        ref={$sliderButtonRight}
                        title='Дальше'/>
                </div>
            </div>
            <CoursesList
                buttonRightRef={$sliderButtonRight}
                isLoading={entityStore.isLoadingCourses}
                courses={entityStore.entity?.courses}/>
        </Block>
    );
}