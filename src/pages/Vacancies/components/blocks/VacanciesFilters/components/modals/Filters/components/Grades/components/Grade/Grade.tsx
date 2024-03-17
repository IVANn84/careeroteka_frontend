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
      fieldsStore: { filters },
    },
  } = useStoreVacanciesPage();

  const $popup = useRef<HTMLParagraphElement>();

  const [popupRight, setPopupRight] = useState<number>();
  const [containerRight, setContainerRight] = useState<number>();

  useEffect(() => {
    setPopupRight($popup.current?.getBoundingClientRect().right);
    setContainerRight($container.current?.getBoundingClientRect().right);
  }, [$popup, $container]);

  return (
    <div
      className={classes.container}
      onClick={() => onClick(value.value)}
      onKeyDown={onEnter(() => onClick(value.value))}
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
        {filters.experience.includes(value.value) && (
        <div className={classes.check}>
          <CheckIcon />
        </div>
        )}
      </div>
    </div>
  );
}
