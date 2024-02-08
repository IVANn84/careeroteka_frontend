import React from 'react';

import { getNoun } from 'Util/getNoun';
import { stepBar } from 'Page/Vacancies/stores/FiltersModal/vacancies/views';
import Typography from 'Component/Typography';

const { salaryChart } = window.theme;

function Column({
  count, classes, salary, minValue, maxValue,
}) {
  const bg = salary >= minValue && salary <= maxValue + stepBar
    ? salaryChart.bar.backgroundColor
    : salaryChart.bar.backgroundColorSecondary;

  return (
    <div className={classes.bar} style={{ height: count, backgroundColor: bg }}>
      <div className={classes.label}>
        <Typography component="p" variant="C1" variantMobile="C1">
          <span className={classes.count}>
            {count}
            {' '}
          </span>
          {getNoun(count, ['предложение', 'предложения', 'предложений'])}
        </Typography>
      </div>
    </div>
  );
}

export default Column;
