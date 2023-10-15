import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import { onEnter } from 'Util/onEnter';

import Typography from 'Component/Typography';

const variants = [
  {
    id: 1,
    name: 'Офис',
  },
  {
    id: 2,
    name: 'Удаленка',
  },
  {
    id: 3,
    name: 'Гибрид',
  },
];

export default function WorkFormats({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const onClick = id => fieldsStore.setWorkFormats(id);

  return (
    <>
      <Typography
        variant="H4"
        variantMobile="H4"
        component="p"
        className={classes.title}
      >
        Формат работы
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
            className={`${classes.variant} ${fieldsStore.workFormats.includes(variant.id)
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
