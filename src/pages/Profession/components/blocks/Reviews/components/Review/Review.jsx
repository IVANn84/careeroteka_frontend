import React from 'react';
import { StarIcon as FilledStar } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline';
import accounting from 'accounting-big';

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
        variant="B1"
        variantMobile="B2"
        className={classes.rateTitle}
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
