import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';

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
    },
  } = useStoreVacanciesPage();

  const onClick = value => fieldsStore.setEmploymentFormat(value);

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
            className={`${classes.variant} ${fieldsStore.employmentFormat.includes(variant.value)
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
