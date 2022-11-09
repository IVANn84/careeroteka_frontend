import React, {useRef} from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/solid';

import ArticleList from 'Component/Articles';

export default function Articles({
    classes,
}) {
    const $sliderButtonRight = useRef(null);
    
    return (
        <div>
            <div className={classes.header}>
                <h2>
                    Полезные статьи
                </h2>
                <div className={classes.navigation}>
                    <ArrowRightIcon
                        ref={$sliderButtonRight}
                        title="Дальше"/>
                </div>
            </div>
            <ArticleList buttonRightRef={$sliderButtonRight}/>
        </div>
    );
}