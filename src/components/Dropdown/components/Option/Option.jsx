import React from 'react';

import Typography from 'Component/Typography';
import { onEnter } from 'Util/onEnter';

export default function Option({
  value,

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
        variant="B1"
        variantMobile="B2"
      >
        {value}
      </Typography>
    </div>
  );
}
