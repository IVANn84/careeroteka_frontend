import React, { useEffect, useRef } from 'react';
import { StarIcon as FilledStar } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar, HeartIcon } from '@heroicons/react/24/outline';
import { getSnapshot } from 'mobx-state-tree';

import { useStoreLayoutComponent } from 'Component/Layout/stores';

import { useSlider } from 'Hook/useSlider';

import Typography from 'Component/Typography';
import { useRedirectToLogin } from 'Hook/useRedirectToLogin';
import { onEnter } from 'Util/onEnter';
import ListSkeleton from './components/ListSkeleton';

import { useStoreCoursesSliderComponent } from './stores';

export default function CoursesSlider({
  buttonRightRef,
  buttonLeftRef,
  courses = [],
  isLoading,

  classes,
}) {
  const redirectToLogin = useRedirectToLogin();

  const {
    isAuth,
  } = useStoreLayoutComponent();

  const {
    likeList,
    toggleLike,
    fetchLikeList,
    isLoadingLike,
    reset,
  } = useStoreCoursesSliderComponent();

  useEffect(() => {
    if (isAuth) {
      fetchLikeList();
    }
    return reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const $slider = useRef(null);
  useSlider({
    $slider,
    $sliderButtonRight: buttonRightRef,
    $sliderButtonLeft: buttonLeftRef,
    slideList: getSnapshot(courses),
  });

  const onClickCourse = id => {
    if (!isAuth) {
      return redirectToLogin(true);
    }

    window.open(`/courses/${id}`, '_blank');
  };

  const onClickLike = (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    if (isLoadingLike.get(id)) {
      return;
    }

    if (!isAuth) {
      return redirectToLogin(true);
    }

    toggleLike(id);
  };

  const getHeartColor = id => {
    if (isLoadingLike.get(id)) {
      return 'gray';
    }
    if (likeList.some(item => item.course === id)) {
      return 'red';
    }
    return '#FFF';
  };

  return (
    <div
      ref={$slider}
      className={classes.slider}
    >
      {isLoading
        ? (
          <ListSkeleton />
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
              role="button"
              tabIndex={0}
              onKeyDown={onEnter(() => onClickCourse(id))}
              onClick={() => onClickCourse(id)}
            >
              <div className={classes.content}>
                <HeartIcon
                  className={classes.like}
                  fill={getHeartColor(id)}
                  onClick={event => onClickLike(event, id)}
                />
                <div
                  className={classes.logo}
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className={classes.info}>
                  <div>
                    <Typography
                      variant="C1"
                      variantMobile="C1"
                      className={classes.type}
                    >
                      {type}
                      ,
                      {company}
                    </Typography>
                    <Typography
                      variant="B1"
                      variantMobile="B1"
                      weight="semiBold"
                      className={classes.name}
                    >
                      {name}
                    </Typography>
                  </div>
                  <div className={classes.rating}>
                    {Array(Math.round(rating)).fill(0)
                      .map((value, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <FilledStar key={index} />
                      ))}
                    {Array(5 - Math.round(rating)).fill(0)
                      .map((value, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <EmptyStar key={index} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
