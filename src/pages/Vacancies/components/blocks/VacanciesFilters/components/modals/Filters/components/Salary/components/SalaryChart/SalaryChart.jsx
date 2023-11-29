import React, { useCallback, useMemo } from 'react';
import { getSnapshot } from 'mobx-state-tree';

import { throttle } from 'Util/throttle';
import { getNoun } from 'Util/getNoun';
import { stepBar } from 'Page/Vacancies/stores/FiltersModal/vacancies/views';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import MultiRangeSlider from 'Component/MultiRangeSlider';
import BarChart from 'Component/BarChart';

const options = {
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderRadius: 5,
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 50,
      left: 50,
      right: 50,
    },
  },
  plugins: {
    datalabels: {
      backgroundColor: '#FFF',
      color: '#1A1C1F',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#1C1C3A',
      textAlign: 'center',
      font: {
        lineHeight: 1.3,
      },
      padding: {
        top: 8,
        right: 10,
        bottom: 8,
        left: 10,
      },
      formatter: (value, context) => {
        const {
          dataIndex,
          chart: {
            data: { labels },
          },
        } = context;

        const rangeStart = labels.length - 1 === dataIndex
          ? labels[dataIndex - 1]
          : labels[dataIndex] - stepBar;

        const rangeEnd = labels.length - 1 === dataIndex
          ? labels[dataIndex]
          : labels[dataIndex] - 1;

        return [
          `${value} ${getNoun(value, ['предложение', 'предложения', 'предложений'])}`,
          `${rangeStart} - ${rangeEnd} ₽`,
        ];
      },
      display: context => context.active,
    },
  },
};

export default function SalaryChart({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      vacanciesStore,
    },
  } = useStoreVacanciesPage();

  const { maxSalary, vacancyList } = vacanciesStore;

  const vacancyListDataChart = useMemo(() => ({
    labels: vacancyList.map(({ salary }) => salary),
    datasets: [
      {
        data: vacancyList.map(({ count }) => count),
        categoryPercentage: 1,
        backgroundColor: '#86B0F8',
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [getSnapshot(vacancyList)]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChangeMinMax = useCallback(throttle(({ min: minValue, max: maxValue }) => {
    fieldsStore.setMinSalary(minValue);
    fieldsStore.setMaxSalary(maxValue);
  }, 10), []);

  return (
    <div className={classes.container}>
      <div className={classes.chart}>
        <BarChart
          data={vacancyListDataChart}
          options={options}
        />
      </div>
      <MultiRangeSlider
        className={classes.slider}
        maxRange={maxSalary}
        maxValue={fieldsStore.maxSalary}
        minRange={0}
        minValue={fieldsStore.minSalary}
        onChange={onChangeMinMax}
        step={1}
      />
    </div>
  );
}
