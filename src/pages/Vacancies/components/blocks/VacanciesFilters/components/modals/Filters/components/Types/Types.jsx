import React from 'react';
import accounting from 'accounting-big';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Typography from 'Component/Typography';
import Divider from 'Component/Divider';

const types = [
  {
    id: 1,
    name: 'Вакансия',
    salary: 200000,
  },
  {
    id: 2,
    name: 'Стажировка',
    salary: 20000,
  },
  {
    id: 3,
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
        variant="H4"
        variantMobile="H4"
        component="p"
        className={classes.title}
      >
        Тип предложения
      </Typography>
      <Typography
        variant="B1"
        variantMobile="B2"
        component="p"
        className={classes.description}
      >
        Выберите, какой вариант искать. Мы показываем цену за месяц работы.
      </Typography>
      <div className={classes.variants}>
        {types.map(type => (
          <button
            key={type.id}
            type="button"
            className={fieldsStore.typeVacancy === type.id ? classes.selectedVariant : ''}
            onClick={() => fieldsStore.setTypeVacancy(type.id)}
          >
            <Typography
              variant="B2"
              variantMobile="B2"
              weight="semiBold"
              weightMobile="semiBold"
              component="p"
            >
              {type.name}
            </Typography>
            <Typography
              variant="B2"
              variantMobile="B2"
              component="p"
            >
              {`${formatMoney(type.salary)} ₽`}
            </Typography>
            <Typography
              variant="B2"
              variantMobile="B2"
              component="p"
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
