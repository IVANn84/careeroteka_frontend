import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Typography from 'Component/Typography';
import { onEnter } from 'Util/onEnter';

export default function Area({
  areaName,

  removeArea,
  onSelect,

  classes,
}) {
  return (
    <div
      role="button"
      className={classes.container}
      tabIndex={0}
      onKeyDown={onEnter(onSelect)}
      onClick={onSelect}
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
          width={25}
          height={25}
          tabIndex={0}
          onKeyDown={onEnter(removeArea)}
          onClick={removeArea}
        />
      )}
    </div>
  );
}
