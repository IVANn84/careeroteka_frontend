import React, { useCallback } from 'react';
import accounting from 'accounting-big';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Dropdown from 'Component/Dropdown';

const types = [
  {
    value: 'vacancy',
    name: 'Вакансия',
  },
  {
    value: 'internship',
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
      fieldsStore: { filters },
      averageSalaryStore,
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  const { averageSalaryData, isLoading } = averageSalaryStore;

  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

  const onFilterChanged = useCallback(fn => value => {
    fn(value);
  }, []);

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H5"
        variantMobile="B1"
        weightMobile="semiBold"
      >
        Тип предложения
      </Typography>
      {device === 'desktop' && (
        <Typography
          className={classes.description}
          component="p"
          variant="B1"
          variantMobile="B2"
        >
          Выберите, какой вариант искать. Мы показываем цену за месяц работы.
        </Typography>
      )}
      {!isLoading && (
        <div className={classes.variants}>
          {device === 'desktop' ? types.map(type => (
            <button
              className={filters.type === type.value ? classes.selectedVariant : ''}
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
          )) : (
            <Dropdown
              checkIsSelected={({ value }) => filters.type === value}
              isClearable
              mode="light"
              onSelect={onFilterChanged(type => fieldsStore.setTypeVacancy(type?.value))}
              options={types.map(type => ({ value: type.value, name: `${type.name} (≈ ${formatMoney(averageSalaryData[type.value])} ₽)` }))}
              placeholder="Выберите тип предложения"
              selectedValue={types.filter(type => filters.type === type.value)
                .map(type => `${type.name} (≈ ${formatMoney(averageSalaryData[type.value])} ₽)`).join('')}
            />
          )}
        </div>
      )}
    </>
  );
}
