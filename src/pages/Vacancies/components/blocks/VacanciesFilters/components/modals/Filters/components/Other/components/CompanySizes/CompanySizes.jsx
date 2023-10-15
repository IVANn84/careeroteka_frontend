import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import { onEnter } from 'Util/onEnter';

import Typography from 'Component/Typography';

const variants = [
  {
    id: 1,
    name: 'Стартап',
  },
  {
    id: 2,
    name: 'Малая',
  },
  {
    id: 3,
    name: 'Средняя',
  },
  {
    id: 4,
    name: 'Корпорация',
  },
];

export default function CompanySizes({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const onClick = id => fieldsStore.setCompanySizes(id);

  return (
    <>
      <Typography
        variant="H4"
        variantMobile="H4"
        component="p"
        className={classes.title}
      >
        Размер компании
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
            className={`${classes.variant} ${fieldsStore.companySizes.includes(variant.id)
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
