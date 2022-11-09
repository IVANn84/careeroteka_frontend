import React, {useRef} from 'react';
import {Link} from 'react-router-dom';

import relocation1Image from 'Image/articles/relocation-1.svg';
import relocation2Image from 'Image/articles/relocation-2.svg';
import aboutUsImage from 'Image/articles/about-us.svg';
import buildCareerPlanImage from 'Image/articles/build-career-plan.svg';

import {InitSlider} from 'Util/slider';

const articleList = [
    {
        id: 1,
        image: relocation1Image,
    },
    {
        id: 2,
        image: relocation2Image,
    },
    {
        id: 3,
        image: aboutUsImage,
    },
    {
        id: 4,
        image: buildCareerPlanImage,
    },
];

export default function Articles({
    buttonRightRef,
    buttonLeftRef,
    currentArticleId,
    
    classes,
}) {
    const $slider = useRef(null);
    InitSlider({
        $slider,
        $sliderButtonRight: buttonRightRef,
        $sliderButtonLeft: buttonLeftRef,
    });
    
    return (
        <div
            ref={$slider}
            className={classes.slider}>
            {articleList
                .filter(({id}) => id !== currentArticleId)
                .map(({id, image}) => (
                    <Link
                        key={id}
                        to={`/article/${id}`}
                        target="_blank"
                        className={classes.sliderItem}
                        style={{backgroundImage: `url(${image})`}}/>
                ))}
        </div>
    );
}