import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {StarIcon as FilledStar} from '@heroicons/react/24/solid';
import {StarIcon as EmptyStar, HeartIcon} from '@heroicons/react/24/outline';
import {getSnapshot} from 'mobx-state-tree';

import {useStoreLayoutComponent} from 'Component/Layout/stores';

import {useSlider} from 'Hook/useSlider';

import Typography from 'Component/Typography';
import ListSkeleton from './components/ListSkeleton';

export default function Courses({
    buttonRightRef,
    buttonLeftRef,
    courses = [],
    isLoading,
    
    classes,
}) {
    const {
        isAuth,
    } = useStoreLayoutComponent();
    
    const history = useHistory();
    
    const $slider = useRef(null);
    useSlider({
        $slider,
        $sliderButtonRight: buttonRightRef,
        $sliderButtonLeft: buttonLeftRef,
        slideList: getSnapshot(courses),
    });
    
    const onClickCourse = id => {
        if (!isAuth) {
            return history.push('/registration');
        }
        
        window.open(`/courses/${id}`, '_blank');
    };
    
    const onClickLike = (event, id) => {
        event.preventDefault();
        event.stopPropagation();
    
        if (!isAuth) {
            return history.push('/registration');
        }
    
        // eslint-disable-next-line no-console
        console.log(id);
    };
    
    return (
        <div
            ref={$slider}
            className={classes.slider}>
            {isLoading
                ? (
                    <ListSkeleton/>
                )
                : courses
                    .map(({
                        id,
                        image,
                        name,
                        company,
                        rating,
                        type,
                    }) => (
                        <div
                            key={id}
                            onClick={() => onClickCourse(id)}>
                            <div className={classes.content}>
                                <HeartIcon
                                    className={classes.like}
                                    fill='#FFF'
                                    onClick={event => onClickLike(event, id)}/>
                                <div
                                    className={classes.logo}
                                    style={{backgroundImage: `url(${image})`}}/>
                                <div className={classes.info}>
                                    <div>
                                        <Typography
                                            variant='C1'
                                            variantMobile='C1'
                                            className={classes.type}>
                                            {type}, {company}
                                        </Typography>
                                        <Typography
                                            variant='B1'
                                            variantMobile='B1'
                                            weight='semiBold'
                                            className={classes.name}>
                                            {name}
                                        </Typography>
                                    </div>
                                    <div className={classes.rating}>
                                        {Array(Math.round(rating)).fill(0)
                                            .map((value, index) => (
                                                <FilledStar key={index}/>
                                            ))
                                        }
                                        {Array(5 - Math.round(rating)).fill(0)
                                            .map((value, index) => (
                                                <EmptyStar key={index}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
        </div>
    );
}