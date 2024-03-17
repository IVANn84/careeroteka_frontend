import React, { useCallback } from 'react';

import { throttle } from 'Util/throttle';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import MultiRangeSlider from 'Component/MultiRangeSlider';

import Column from './components';

export default function SalaryChart({ classes }) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
      vacanciesStore,
    },
  } = useStoreVacanciesPage();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChangeMinMax = useCallback(
    throttle(({ min: minValue, max: maxValue }) => {
      fieldsStore.setMinSalary(minValue);
      fieldsStore.setMaxSalary(maxValue);
    }, 10),
    [],
  );

  return (
    <div className={classes.container}>
      <div className={classes.chart}>
        {vacanciesStore.vacancyList.map(({ salary, count }) => (
          <Column
            count={count}
            key={salary}
            maxValue={filters.maxSalary}
            minValue={filters.minSalary}
            salary={salary}
          />
        ))}
      </div>
      <MultiRangeSlider
        className={classes.slider}
        maxRange={vacanciesStore.maxSalary()}
        maxValue={filters.maxSalary}
        minRange={0}
        minValue={filters.minSalary}
        onChange={onChangeMinMax}
        step={1}
      />
    </div>
  );
}
