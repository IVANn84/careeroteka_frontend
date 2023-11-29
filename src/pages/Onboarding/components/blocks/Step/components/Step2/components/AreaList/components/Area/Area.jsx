import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';

export default function Area({
  areaName,

  removeArea,
  onSelect,

  classes,
}) {
  return (
    <div
      className={classes.container}
      onClick={onSelect}
      onKeyDown={onEnter(onSelect)}
      role="button"
      tabIndex={0}
    >
      <Typography
        className={classes.title}
        variant="B1"
        variantMobile="B2"
      >
        {areaName}
      </Typography>
      {removeArea && (
        <XMarkIcon
          className={classes.removeButton}
          height={25}
          onClick={removeArea}
          onKeyDown={onEnter(removeArea)}
          tabIndex={0}
          width={25}
        />
      )}
    </div>
  );
}
