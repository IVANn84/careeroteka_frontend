import React, { useCallback } from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Dropdown from 'Component/Dropdown';

const variants = [
  {
    value: 'startup',
    name: 'Стартап',
  },
  {
    value: 'medium',
    name: 'Средняя',
  },
  {
    value: 'corporation',
    name: 'Корпорация',
  },
];

export default function CompanySize({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  const onClick = value => fieldsStore.setCompanySize(value);

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
        Размер компании
      </Typography>
      {device === 'desktop' ? (
        <div className={classes.variants}>
          {variants.map(variant => (
            <Typography
              className={`${classes.variant} ${filters.companySize.includes(variant.value)
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
          checkIsSelected={({ value }) => filters.companySize.includes(value)}
          isClearable
          mode="light"
          onSelect={onFilterChanged(value => fieldsStore.setCompanySize(value?.value))}
          options={variants}
          placeholder="Выберите размер компании"
          selectedValue={variants.filter(({ value }) => filters.companySize.includes(value)).map(({ name }) => name).join(', ')}
        />
      )}
    </>
  );
}
