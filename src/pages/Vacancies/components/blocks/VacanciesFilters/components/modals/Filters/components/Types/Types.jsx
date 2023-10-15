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
            className={fieldsStore.typeVacancy === type.id ? classes.selectedVariant : ''}
            key={type.id}
            onClick={() => fieldsStore.setTypeVacancy(type.id)}
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
