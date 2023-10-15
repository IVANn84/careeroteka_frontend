import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';
import Divider from 'Component/Divider';

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
          onClick={onDecline}
          onKeyDown={onEnter(onDecline)}
          tabIndex={0}
        />
      </div>
      {hasDivider && (<Divider />)}
    </div>
  );
}
