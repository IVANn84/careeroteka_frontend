import React, { useEffect, useRef, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [$popup, $container, window.screen.width]);

  return (
    <div
      className={classes.container}
      onClick={() => onClick(value.id)}
      onKeyDown={onEnter(() => onClick(value.id))}
      role="button"
      tabIndex={0}
    >
      <div className={classes.icons}>
        <div
          className={classes.iconCircle}
          style={{ backgroundColor: value.color }}
        />
        <div className={classes.iconDescription}>i</div>
        <Typography
          className={classes.descriptionPopup}
          component="p"
          ref={$popup}
          style={{
            left: popupRight > containerRight
              ? `calc(30% - ${popupRight - containerRight}px)`
              : '30%',
          }}
          variant="B2"
          variantMobile="B2"
        >
          <span>{value.name}</span>
          {' – '}
          {value.description}
        </Typography>
      </div>
      <div className={classes.info}>
        <Typography
          component="p"
          variant="B2"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="semiBold"
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
