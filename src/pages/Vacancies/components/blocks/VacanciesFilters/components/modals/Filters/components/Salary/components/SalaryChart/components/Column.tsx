import React from 'react';

import { getNoun } from 'Util/getNoun';
import { Theme } from 'Theme/theme';
import { STEP_BAR } from 'Page/Vacancies/stores/FiltersModal/vacancies';
import Typography from 'Component/Typography';

const { salaryChart } = Theme;

interface Props {
  count: number;
  salary: number;
  minValue: number;
  maxValue: number;
  classes: {[className: string]: string};
}

function Column({
  count,
  salary,
  minValue,
  maxValue,
  classes,
}: Props) {
  const bg = salary >= minValue && salary <= maxValue + STEP_BAR
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
