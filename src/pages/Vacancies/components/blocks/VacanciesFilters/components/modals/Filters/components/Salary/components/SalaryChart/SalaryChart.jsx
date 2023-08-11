import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { stepBar } from 'Page/Vacancies/stores/FiltersModal/vacancies/views';

import BarChart from 'Component/BarChart';
import MultiRangeSlider from 'Component/MultiRangeSlider';
import { getNoun } from 'Util/getNoun';

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

  const { maxSalary } = vacanciesStore;

  const onChangeMinMax = ({ min: minValue, max: maxValue }) => {
    fieldsStore.setMinSalary(minValue);
    fieldsStore.setMaxSalary(maxValue);
  };

  return (
    <div className={classes.container}>
      <div className={classes.chart}>
        <BarChart
          data={vacanciesStore.vacancyListDataChart}
          options={options}
        />
      </div>
      <MultiRangeSlider
        className={classes.slider}
        minRange={0}
        maxRange={maxSalary}
        minValue={fieldsStore.minSalary}
        maxValue={fieldsStore.maxSalary}
        step={1}
        onChange={onChangeMinMax}
      />
    </div>
  );
}
