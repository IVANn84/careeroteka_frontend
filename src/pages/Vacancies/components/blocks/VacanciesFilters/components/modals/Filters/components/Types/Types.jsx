import React from 'react';
import accounting from 'accounting-big';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
import Divider from 'Component/Divider';

const types = [
  {
    value: 'vacancy',
    name: 'Вакансия',
  },
  {
    value: 'intership',
    name: 'Стажировка',
  },
  {
    value: 'freelance',
    name: 'Фриланс',
  },
];

export default function Types({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      averageSalaryStore,
    },
  } = useStoreVacanciesPage();

  const { averageSalaryData, isLoading } = averageSalaryStore;

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
        variantMobile="H4"
      >
        Тип предложения
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        Выберите, какой вариант искать. Мы показываем цену за месяц работы.
      </Typography>
      {!isLoading && (
      <div className={classes.variants}>
        {types.map(type => (
          <button
            className={fieldsStore.type === type.value ? classes.selectedVariant : ''}
            key={type.value}
            onClick={() => fieldsStore.setTypeVacancy(type.value)}
            type="button"
          >
            <Typography
              component="p"
              variant="B2"
              variantMobile="B2"
              weight="semiBold"
              weightMobile="semiBold"
            >
              {type.name}
            </Typography>
            <Typography
              component="p"
              variant="B2"
              variantMobile="B2"
            >
              {`${formatMoney(averageSalaryData[type.value])} ₽`}
            </Typography>
            <Typography
              component="p"
              variant="B2"
              variantMobile="B2"
            >
              в среднем
            </Typography>
          </button>
        ))}
      </div>
      )}
      <Divider />
    </>
  );
}
