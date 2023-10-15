import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
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
            className={`${classes.variant} ${fieldsStore.employabilityFormats.includes(variant.id)
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
