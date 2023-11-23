import React from 'react';
import accounting from 'accounting-big';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
import Divider from 'Component/Divider';

const types = [
  {
    value: 'vacancy',
    name: 'Вакансия',
    salary: 200000,
  },
  {
    value: 'intership',
    name: 'Стажировка',
    salary: 20000,
  },
  {
    value: 'freelance',
    name: 'Фриланс',
    salary: 100000,
  },
];

export default function Types({
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
      <div className={classes.variants}>
        {types.map(type => (
          <button
            className={fieldsStore.typeVacancy === type.value ? classes.selectedVariant : ''}
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
              {`${formatMoney(type.salary)} ₽`}
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
      <Divider />
    </>
  );
}
