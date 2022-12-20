import React, {useRef} from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/solid';

import ArticleList from 'Component/Articles';
import Typography from 'Component/Typography';

export default function Articles({
    classes,
}) {
    const $sliderButtonRight = useRef(null);
    
    return (
        <div>
            <div className={classes.header}>
                <Typography
                    variant='H2'
                    variantMobile='H3'
                    component='h2'>
                    Полезные статьи
                </Typography>
                <div className={classes.navigation}>
                    <ArrowRightIcon
                        ref={$sliderButtonRight}
                        title='Дальше'/>
                </div>
            </div>
            <ArticleList buttonRightRef={$sliderButtonRight}/>
        </div>
    );
}