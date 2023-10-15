import React, { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import Typography from 'Component/Typography';
import CoursesList from 'Component/CoursesSlider';
import Block from 'Component/Block';

export default function Courses({
  classes,
}) {
  const {
    entityStore,
  } = useStoreProfessionPage();

  const $sliderButtonRight = useRef(null);

  return (
    <Block mode="dark">
      <div className={classes.header}>
        <Typography
          component="h2"
          variant="H2"
          variantMobile="H3"
        >
          Список курсов
        </Typography>
        <div className={classes.navigation}>
          <ArrowRightIcon
            ref={$sliderButtonRight}
            title="Дальше"
          />
        </div>
      </div>
      <CoursesList
        buttonRightRef={$sliderButtonRight}
        courses={entityStore.entity?.courses}
        isLoading={entityStore.isLoadingCourses}
      />
    </Block>
  );
}
