import React from 'react';
import accounting from 'accounting-big';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Divider from 'Component/Divider';

import SalaryChart from './components/SalaryChart';

export default function Salary({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      averageSalaryStore: {
        averageSalaryData,
      },
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H4"
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
          {fieldsStore.type === 'vacancy' && formatMoney(averageSalaryData.vacancy)}
          {fieldsStore.type === 'internship' && formatMoney(averageSalaryData.internship)}
          {fieldsStore.type === 'freelance' && formatMoney(averageSalaryData.freelance)}
          {' '}
          ₽
        </Typography>
        .
      </Typography>
      {device === 'desktop' && <SalaryChart />}
      <div className={classes.inputs}>
        <Input
          isPlaceholderAtTop
          onChange={fieldsStore.setMinSalary}
          placeholder="Минимальная з/п, ₽"
          precision={0}
          type="money"
          value={fieldsStore.minSalary}
        />
        <Input
          isPlaceholderAtTop
          onChange={fieldsStore.setMaxSalary}
          placeholder="Максимальная з/п, ₽"
          precision={0}
          type="money"
          value={fieldsStore.maxSalary}
        />
      </div>
      {device === 'desktop' && <Divider />}
    </>
  );
}
