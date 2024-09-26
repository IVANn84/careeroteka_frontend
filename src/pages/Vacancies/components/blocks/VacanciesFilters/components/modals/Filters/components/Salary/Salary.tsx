import React, { useEffect, useState } from 'react';
import accounting from 'accounting-big';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import { useDebouncedValue } from 'Hook/useDebouncedValue';
import Typography from 'Component/Typography';
import Input from 'Component/Input';

import SalaryChart from './components/SalaryChart';

export default function Salary({ classes }) {
  const [maxSalary, setMaxSalary] = useState<number | string>();
  const debouncedValue = useDebouncedValue(maxSalary, 1500);

  const device = useDevice();

  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
      averageSalaryStore: { averageSalaryData },
    },
  } = useStoreVacanciesPage();

  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

  useEffect(() => {
    if (debouncedValue) {
      fieldsStore.setMaxSalary(debouncedValue);
    }
    setMaxSalary(filters.maxSalary);
  }, [debouncedValue, fieldsStore]);

  useEffect(() => {
    setMaxSalary(filters.maxSalary);
  }, [filters.maxSalary]);

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H5"
        variantMobile="B1"
        weightMobile="semiBold"
      >
        Зарплата
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        Средняя зарплата в предложениях
        {' '}
        <Typography
          variant="B1"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="medium"
        >
          {filters.type === 'vacancy' && formatMoney(averageSalaryData.vacancy)}
          {filters.type === 'internship'
            && formatMoney(averageSalaryData.internship)}
          {filters.type === 'freelance'
            && formatMoney(averageSalaryData.freelance)}
          {' '}
          ₽
        </Typography>
        .
      </Typography>
      {['desktop', 'tablet'].includes(device) && <SalaryChart />}
      <div className={classes.inputs}>
        <Input
          isPlaceholderAtTop
          onChange={fieldsStore.setMinSalary}
          placeholder="Минимальная з/п, ₽"
          precision={0}
          type="money"
          value={filters.minSalary}
        />
        <Input
          isPlaceholderAtTop
          onChange={setMaxSalary}
          placeholder="Максимальная з/п, ₽"
          precision={0}
          type="money"
          value={maxSalary}
        />
      </div>
    </>
  );
}
