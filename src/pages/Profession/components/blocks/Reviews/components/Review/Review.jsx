import React from 'react';
import accounting from 'accounting-big';
import { StarIcon as FilledStar } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline';

import Typography from 'Component/Typography';

function Review({
  name,
  value,
  classes,
}) {
  const formatRate = valueToFormat => accounting.formatMoney(valueToFormat, {
    symbol: '',
    precision: 1,
  });

  return (
    <>
      <Typography
        className={classes.rateTitle}
        variant="B1"
        variantMobile="B2"
      >
        {name}
      </Typography>
      <span className={classes.stars}>
        {Array(Math.round(value)).fill(0)
          .map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <FilledStar key={index} />
          ))}
        {Array(5 - Math.round(value)).fill(0)
          .map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <EmptyStar key={index} />
          ))}
      </span>
      <Typography
        variant="B1"
        variantMobile="B2"
        weight="semiBold"
      >
        {formatRate(value)}
      </Typography>
    </>
  );
}

export default Review;
