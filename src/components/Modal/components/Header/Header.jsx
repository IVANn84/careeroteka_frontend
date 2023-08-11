import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { onEnter } from 'Util/onEnter';

import Divider from 'Component/Divider';
import Typography from 'Component/Typography';

export default function Header({
  classes,
  children,
  hasDivider = true,
  className,
  onDecline,
}) {
  return (
    <div>
      <div className={`${classes.container} ${className || ''}`}>
        <Typography
          variant="H2"
          variantMobile="H2"
        >
          {children}
        </Typography>
        <XMarkIcon
          tabIndex={0}
          onKeyDown={onEnter(onDecline)}
          onClick={onDecline}
        />
      </div>
      {hasDivider && (<Divider />)}
    </div>
  );
}
