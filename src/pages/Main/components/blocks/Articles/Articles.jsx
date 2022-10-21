import React, {useRef} from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/solid';

import mainHeaderImage from 'Image/main-header.png';
import {InitSlider} from 'Util/slider';

export default function Articles({
    classes,
}) {
    const $slider = useRef(null);
    const $sliderButtonRight = useRef(null);
    InitSlider({
        $slider,
        $sliderButtonRight,
    });
    
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
            <div
                ref={$slider}
                className={classes.slider}>
                {Array(10)
                    .fill(1)
                    .map((item, index) => (
                        <a
                            key={index}
                            className={classes.sliderItem}
                            href="/"
                            target="_blank"
                            style={{backgroundImage: `url(${mainHeaderImage})`}}/>
                    ))}
            </div>
        </div>
    );
}