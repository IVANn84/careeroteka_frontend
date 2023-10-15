import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
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
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="H4"
      >
        Размер компании
      </Typography>
      <div className={classes.variants}>
        {variants.map(variant => (
          <Typography
            className={`${classes.variant} ${fieldsStore.companySizes.includes(variant.id)
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
