import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import { onEnter } from 'Util/onEnter';

import Typography from 'Component/Typography';

const variants = [
  {
    id: 1,
    name: 'Трудовой',
  },
  {
    id: 2,
    name: 'ИП',
  },
  {
    id: 3,
    name: 'Самозанятость',
  },
  {
    id: 4,
    name: 'ГПХ',
  },
  {
    id: 5,
    name: 'Контракт',
  },
];

export default function EmployabilityFormats({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const onClick = id => fieldsStore.setEmployabilityFormats(id);

  return (
    <>
      <Typography
        variant="H4"
        variantMobile="H4"
        component="p"
        className={classes.title}
      >
        Формат трудоустройства
      </Typography>
      <div className={classes.variants}>
        {variants.map(variant => (
          <Typography
            key={variant.id}
            variant="B1"
            variantMobile="B2"
            role="button"
            tabIndex={0}
            onClick={() => onClick(variant.id)}
            onKeyDown={onEnter(() => onClick(variant.id))}
            className={`${classes.variant} ${fieldsStore.employabilityFormats.includes(variant.id)
              ? classes.selected
              : ''}`}
          >
            {variant.name}
          </Typography>
        ))}
      </div>
    </>
  );
}
