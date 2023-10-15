import React, { useEffect, useRef, useState } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Typography from 'Component/Typography';
import { onEnter } from 'Util/onEnter';
import { CheckIcon } from '@heroicons/react/24/solid';

export default function Grade({
  value,
  $container,
  onClick,
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const $popup = useRef();

  const [popupRight, setPopupRight] = useState();
  const [containerRight, setContainerRight] = useState();

  useEffect(() => {
    setPopupRight($popup.current?.getBoundingClientRect().right);
    setContainerRight($container.current?.getBoundingClientRect().right);
  }, []);

  return (
    <div
      role="button"
      className={classes.container}
      tabIndex={0}
      onClick={() => onClick(value.id)}
      onKeyDown={onEnter(() => onClick(value.id))}
    >
      <div className={classes.icons}>
        <div
          className={classes.iconCircle}
          style={{ backgroundColor: value.color }}
        />
        <div className={classes.iconDescription}>i</div>
        <Typography
          variant="B2"
          variantMobile="B2"
          component="p"
          className={classes.descriptionPopup}
          style={{
            left: popupRight > containerRight
              ? `calc(30% - ${popupRight - containerRight}px)`
              : '30%',
          }}
          ref={$popup}
        >
          <span>{value.name}</span>
          {' – '}
          {value.description}
        </Typography>
      </div>
      <div className={classes.info}>
        <Typography
          variant="B2"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="semiBold"
          component="p"
        >
          {value.name}
        </Typography>
        {fieldsStore.gradesVacancy.includes(value.id) && (
        <div className={classes.check}>
          <CheckIcon />
        </div>
        )}
      </div>
    </div>
  );
}
