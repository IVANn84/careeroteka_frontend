import React, { useCallback } from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Dropdown from 'Component/Dropdown';

const variants = [
  {
    value: 'full_time',
    name: 'Полная',
  },
  {
    value: 'part_time',
    name: 'Частичная',
  },
  {
    value: 'freelance',
    name: 'Фриланс',
  },
  {
    value: 'probation',
    name: 'Стажировка',
  },
];

export default function EmploymentFormat({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  const onClick = value => fieldsStore.setEmploymentFormat(value);

  const onFilterChanged = useCallback(fn => value => {
    fn(value);
  }, []);

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="B1"
        weightMobile="semiBold"
      >
        Формат занятости
      </Typography>
      {device === 'desktop' ? (
        <div className={classes.variants}>
          {variants.map(variant => (
            <Typography
              className={`${classes.variant} ${filters.employmentFormat.includes(variant.value)
                ? classes.selected
                : ''}`}
              key={variant.value}
              onClick={() => onClick(variant.value)}
              onKeyDown={onEnter(() => onClick(variant.value))}
              role="button"
              tabIndex={0}
              variant="B1"
              variantMobile="B2"
            >
              {variant.name}
            </Typography>
          ))}
        </div>
      ) : (
        <Dropdown
          checkIsSelected={({ value }) => filters.employmentFormat.includes(value)}
          isClearable
          mode="light"
          onSelect={onFilterChanged(value => fieldsStore.setEmploymentFormat(value?.value))}
          options={variants}
          placeholder="Выберите формат занятости"
          selectedValue={variants.filter(({ value }) => filters.employmentFormat.includes(value)).map(({ name }) => name).join(', ')}
        />
      )}
    </>
  );
}
