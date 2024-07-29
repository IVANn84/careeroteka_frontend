import React, { useCallback } from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Dropdown from 'Component/Dropdown';

const variants = [
  {
    value: 'office',
    name: 'Офис',
  },
  {
    value: 'remote',
    name: 'Удаленка',
  },
  {
    value: 'hybrid',
    name: 'Гибрид',
  },
];

export default function WorkFormat({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  const onClick = value => fieldsStore.setWorkFormat(value);

  const onFilterChanged = useCallback(fn => value => {
    fn(value);
  }, []);

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="B1"
        variantMobile="B1"
        weightMobile="semiBold"
      >
        Формат работы
      </Typography>
      {device === 'desktop' ? (
        <div className={classes.variants}>
          {variants.map(variant => (
            <Typography
              className={`${classes.variant} ${filters.workFormat.includes(variant.value)
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
          checkIsSelected={({ value }) => filters.workFormat.includes(value)}
          isClearable
          mode="light"
          onSelect={onFilterChanged(value => fieldsStore.setWorkFormat(value?.value))}
          options={variants}
          placeholder="Выберите формат работы"
          selectedValue={variants.filter(({ value }) => filters.workFormat.includes(value)).map(({ name }) => name).join(', ')}
        />
      )}
    </>
  );
}
