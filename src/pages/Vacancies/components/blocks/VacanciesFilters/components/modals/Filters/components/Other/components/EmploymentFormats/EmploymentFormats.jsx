import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import { onEnter } from 'Util/onEnter';

import Typography from 'Component/Typography';

const variants = [
  {
    id: 1,
    name: 'Полная',
  },
  {
    id: 2,
    name: 'Частичная',
  },
  {
    id: 3,
    name: 'Фриланс',
  },
  {
    id: 4,
    name: 'Стажировка',
  },
];

export default function EmploymentFormats({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const onClick = id => fieldsStore.setEmploymentFormats(id);

  return (
    <>
      <Typography
        variant="H4"
        variantMobile="H4"
        component="p"
        className={classes.title}
      >
        Формат занятости
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
            className={`${classes.variant} ${fieldsStore.employmentFormats.includes(variant.id)
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
