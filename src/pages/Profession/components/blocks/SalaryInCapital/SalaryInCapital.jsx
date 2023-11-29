import React from 'react';
import accounting from 'accounting-big';

import { getCountDecimal } from 'Util/getCountDecimal';
import { useStoreProfessionPage } from 'Page/Profession/stores';
import Typography from 'Component/Typography';
import Block from 'Component/Block';
import BarChart from 'Component/BarChart';

import BarChartSkeleton from './components/BarChartSkeleton';

export default function SalaryInCapital({
  classes,
}) {
  const {
    entityStore,
  } = useStoreProfessionPage();

  const yMin = Math
    .min(...(entityStore.entity?.statistic?.inCapital?.map(({ salary }) => salary)) || []);

  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '%',
    format: {
      pos: '+%v%s',
      neg: '-%v%s',
      zero: '%v%s',
    },
    thousand: ' ',
    decimal: ',',
    precision: getCountDecimal(entityStore.entity?.statistic?.percentInCapital)
      ? 1
      : 0,
  });

  const data = {
    labels: entityStore.entity?.statistic?.inCapital?.map(({ month }) => month) || [],
    datasets: [
      {
        data: entityStore.entity?.statistic?.inCapital?.map(({ salary }) => salary) || [],
        backgroundColor: '#9A00E2',
      },
    ],
  };

  return (
    <Block
      className={classes.container}
      isSlim
    >
      <div className={classes.header}>
        <Typography
          component="h2"
          variant="H3"
          variantMobile="H5"
        >
          Зарплата в столице
        </Typography>
        {!entityStore.isLoadingStatistic && (
        <Typography
          className={entityStore.entity?.statistic?.percentInCapital < 0
            ? classes.negative
            : classes.positive}
          variant="H3"
          variantMobile="B1"
          weightMobile="semiBold"
        >
          {formatMoney(entityStore.entity?.statistic?.percentInCapital)}
        </Typography>
        )}
      </div>
      <div>
        <BarChartSkeleton isDisplayed={entityStore.isLoadingStatistic}>
          <BarChart
            data={data}
            yMin={yMin}
          />
        </BarChartSkeleton>
      </div>
    </Block>
  );
}
