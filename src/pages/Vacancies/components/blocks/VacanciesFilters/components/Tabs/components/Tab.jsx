import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Icon from 'Component/Icon';

export default function Tab({
  className,
  children,
  iconName,
  onClick,
  isActive,
  classes,
}) {
  const device = useDevice();

  return (
    <div
      className={`${classes.tab} ${isActive ? classes.selectedTab : ''} ${className || ''}`}
      onClick={onClick}
      onKeyDown={onEnter(onClick)}
      role="button"
      tabIndex={0}
    >
      <Icon
        height={device === 'desktop' ? 48 : 38}
        name={iconName}
        width={device === 'desktop' ? 48 : 38}
      />
      <Typography variant="B2" variantMobile="C1">
        {children}
      </Typography>
    </div>
  );
}
