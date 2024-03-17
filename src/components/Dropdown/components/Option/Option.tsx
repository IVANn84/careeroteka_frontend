import React from 'react';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';

interface Props {
  value: React.ReactNode;
  onSelect: () => void;
  classes: {[className: string]: string};
  // eslint-disable-next-line react/no-unused-prop-types
  isSelected?: boolean;
}

export default function Option({
  value,
  onSelect,
  classes,
}: Props) {
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
