import React from 'react';
import accounting from 'accounting-big';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Typography from 'Component/Typography';
import Divider from 'Component/Divider';
import Input from 'Component/Input';
import SalaryChart from './components/SalaryChart';

export default function Salary({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

  return (
    <>
      <Typography
        variant="H4"
        variantMobile="H4"
        component="p"
        className={classes.title}
      >
        Зарплата
      </Typography>
      <Typography
        variant="B1"
        variantMobile="B2"
        component="p"
        className={classes.description}
      >
        Средняя зарплата в предложениях
        {' '}
        <Typography
          variant="B1"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="semiBold"
        >
          {formatMoney(300234)}
          {' '}
          ₽
        </Typography>
        .
      </Typography>
      <SalaryChart />
      <div className={classes.inputs}>
        <Input
          type="money"
          precision={0}
          placeholder="Минимальная з/п, ₽"
          isPlaceholderAtTop
          value={fieldsStore.minSalary}
          onChange={fieldsStore.setMinSalary}
        />
        <Input
          type="money"
          precision={0}
          placeholder="Максимальная з/п, ₽"
          isPlaceholderAtTop
          value={fieldsStore.maxSalary}
          onChange={fieldsStore.setMaxSalary}
        />
      </div>
      <Divider />
    </>
  );
}
