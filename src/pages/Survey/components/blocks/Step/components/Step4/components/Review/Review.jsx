/* eslint-disable react/no-array-index-key */
import React from 'react';
import { StarIcon as FilledStar } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline';

import Typography from 'Component/Typography';

function Review({
  name,
  description,
  value,

  onRate,

  classes,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <Typography
          className={classes.title}
          variant="B1"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="semiBold"
        >
          {name}
        </Typography>
        <Typography
          className={classes.description}
          variant="B2"
          variantMobile="B2"
        >
          {description}
        </Typography>
      </div>
      <span className={classes.stars}>
        {Array(Math.round(value)).fill(0)
          .map((element, index) => (
            <FilledStar
              key={index}
              onClick={() => onRate(index + 1)}
            />
          ))}
        {Array(5 - Math.round(value)).fill(0)
          .map((element, index) => (
            <EmptyStar
              key={index}
              onClick={() => onRate(value + index + 1)}
            />
          ))}
      </span>
    </div>
  );
}

export default Review;
