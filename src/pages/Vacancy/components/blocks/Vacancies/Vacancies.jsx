import React, { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import Block from 'Component/Block';
import Typography from 'Component/Typography';
import VacanciesSlider from './components/VacanciesSlider';

export default function Vacancies({
  classes,
}) {
  const $sliderButtonRight = useRef(null);

  return (
    <Block mode="dark">
      <div className={classes.header}>
        <Typography
          variant="H2"
          variantMobile="H3"
          component="h2"
        >
          Похожие вакансии
        </Typography>
        <div className={classes.navigation}>
          <ArrowRightIcon
            ref={$sliderButtonRight}
            title="Дальше"
          />
        </div>
      </div>
      <VacanciesSlider buttonRightRef={$sliderButtonRight} />
    </Block>
  );
}
