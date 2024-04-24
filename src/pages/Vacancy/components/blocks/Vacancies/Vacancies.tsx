import React, { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';
import Block from 'Component/Block';

import VacanciesSlider from './components/VacanciesSlider';

export default function Vacancies({
  classes,
}) {
  const $sliderButtonRight = useRef<SVGSVGElement>(null);

  return (
    <Block mode="dark">
      <div className={classes.header}>
        <Typography
          component="h2"
          variant="H2"
          variantMobile="H3"
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
