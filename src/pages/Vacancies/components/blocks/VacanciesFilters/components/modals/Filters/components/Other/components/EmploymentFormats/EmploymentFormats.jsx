import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
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
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="H4"
      >
        Формат занятости
      </Typography>
      <div className={classes.variants}>
        {variants.map(variant => (
          <Typography
            className={`${classes.variant} ${fieldsStore.employmentFormats.includes(variant.id)
              ? classes.selected
              : ''}`}
            key={variant.id}
            onClick={() => onClick(variant.id)}
            onKeyDown={onEnter(() => onClick(variant.id))}
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
