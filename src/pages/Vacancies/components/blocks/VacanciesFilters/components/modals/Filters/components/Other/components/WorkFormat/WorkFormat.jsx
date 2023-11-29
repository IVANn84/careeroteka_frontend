import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';

const variants = [
  {
    value: 'in_office',
    name: 'Офис',
  },
  {
    value: 'remote',
    name: 'Удаленка',
  },
  {
    value: 'hybrid',
    name: 'Гибрид',
  },
];

export default function WorkFormat({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const onClick = value => fieldsStore.setWorkFormat(value);

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="H4"
      >
        Формат работы
      </Typography>
      <div className={classes.variants}>
        {variants.map(variant => (
          <Typography
            className={`${classes.variant} ${fieldsStore.workFormat.includes(variant.value)
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
