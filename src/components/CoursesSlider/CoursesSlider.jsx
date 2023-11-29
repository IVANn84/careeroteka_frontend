import React, { useEffect, useRef } from 'react';
import { getSnapshot } from 'mobx-state-tree';
import { StarIcon as FilledStar } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar, HeartIcon } from '@heroicons/react/24/outline';

import { onEnter } from 'Util/onEnter';
import { useSlider } from 'Hook/useSlider';
import { useRedirectToLogin } from 'Hook/useRedirectToLogin';
import Typography from 'Component/Typography';
import { useStoreLayoutComponent } from 'Component/Layout/stores';

import { useStoreCoursesSliderComponent } from './stores';
import ListSkeleton from './components/ListSkeleton';

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
      className={classes.slider}
      ref={$slider}
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
              onClick={() => onClickCourse(id)}
              onKeyDown={onEnter(() => onClickCourse(id))}
              role="button"
              tabIndex={0}
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
                      className={classes.type}
                      variant="C1"
                      variantMobile="C1"
                    >
                      {type}
                      ,
                      {company}
                    </Typography>
                    <Typography
                      className={classes.name}
                      variant="B1"
                      variantMobile="B1"
                      weight="semiBold"
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
