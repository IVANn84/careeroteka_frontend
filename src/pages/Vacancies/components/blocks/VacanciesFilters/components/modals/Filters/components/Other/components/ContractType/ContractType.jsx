import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';

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
    },
  } = useStoreVacanciesPage();

  const onClick = value => fieldsStore.setContractType(value);

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="H4"
      >
        Формат трудоустройства
      </Typography>
      <div className={classes.variants}>
        {variants.map(variant => (
          <Typography
            className={`${classes.variant} ${fieldsStore.contractType.includes(variant.value)
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
    </>
  );
}
