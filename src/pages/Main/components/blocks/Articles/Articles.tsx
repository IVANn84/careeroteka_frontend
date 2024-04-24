import React, { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';
import ArticlesSlider from 'Component/ArticlesSlider';

export default function Articles({
  classes,
}) {
  const $sliderButtonRight = useRef(null);

  return (
    <div>
      <div className={classes.header}>
        <Typography
          component="h2"
          variant="H2"
          variantMobile="H3"
        >
          Полезные статьи
        </Typography>
        <div className={classes.navigation}>
          <ArrowRightIcon
            ref={$sliderButtonRight}
            title="Дальше"
          />
        </div>
      </div>
      <ArticlesSlider buttonRightRef={$sliderButtonRight} />
    </div>
  );
}
