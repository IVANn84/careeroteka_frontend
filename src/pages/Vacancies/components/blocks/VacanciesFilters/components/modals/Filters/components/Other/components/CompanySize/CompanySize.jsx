import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';

const variants = [
  {
    value: 'startup',
    name: 'Стартап',
  },
  {
    value: 'medium',
    name: 'Средняя',
  },
  {
    value: 'corporation',
    name: 'Корпорация',
  },
];

export default function CompanySize({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const onClick = value => fieldsStore.setCompanySize(value);

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
            className={`${classes.variant} ${fieldsStore.companySize.includes(variant.value)
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
