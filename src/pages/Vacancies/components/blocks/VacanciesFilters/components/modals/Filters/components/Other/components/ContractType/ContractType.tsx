import React, { useCallback } from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Dropdown from 'Component/Dropdown';

const variants = [
  {
    value: 'employment_contract',
    name: 'Трудовой',
  },
  {
    value: 'private_entrepreneur',
    name: 'ИП',
  },
  {
    value: 'self_employment',
    name: 'Самозанятость',
  },
  {
    value: 'gph',
    name: 'ГПХ',
  },
];

export default function ContractType({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  const onClick = value => fieldsStore.setContractType(value);

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
        Формат трудоустройства
      </Typography>
      {device === 'desktop' ? (
        <div className={classes.variants}>
          {variants.map(variant => (
            <Typography
              className={`${classes.variant} ${filters.contractType.includes(variant.value)
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
          checkIsSelected={({ value }) => filters.contractType.includes(value)}
          isClearable
          mode="light"
          onSelect={onFilterChanged(value => fieldsStore.setContractType(value?.value))}
          options={variants}
          placeholder="Выберите формат трудоустройства"
          selectedValue={variants.filter(({ value }) => filters.contractType.includes(value)).map(({ name }) => name).join(', ')}
        />
      )}
    </>
  );
}
