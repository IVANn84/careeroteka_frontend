import React, { useCallback } from 'react';

import { throttle } from 'Util/throttle';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import MultiRangeSlider from 'Component/MultiRangeSlider';

import Column from './components';

export default function SalaryChart({ classes }) {
  const {
    filtersModalStore: { fieldsStore, vacanciesStore },
  } = useStoreVacanciesPage();

  const { maxSalary, vacancyList } = vacanciesStore;

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
        {vacancyList.map(({ salary, count }) => (
          <Column
            count={count}
            key={salary}
            maxValue={fieldsStore.maxSalary}
            minValue={fieldsStore.minSalary}
            salary={salary}
          />
        ))}
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
