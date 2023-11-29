import React from 'react';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';

export default function Option({
  value,

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
        variant="B1"
        variantMobile="B2"
      >
        {value}
      </Typography>
    </div>
  );
}
