import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';
import Divider from 'Component/Divider';

interface Props {
  children: React.ReactNode;
  hasDivider?: boolean;
  className?: string;
  classes: {[className: string]: string};
  onDecline: () => void;
}

export default function Header({
  classes,
  children,
  hasDivider = true,
  className,
  onDecline,
}: Props) {
  return (
    <div>
      <div className={`${classes.container} ${className || ''}`}>
        <Typography
          variant="H2"
          variantMobile="H5"
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
