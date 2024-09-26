import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import { IconProps } from 'Component/Icon/Icon';
import Icon from 'Component/Icon';

interface Props {
  className?: string;
  children: React.ReactNode;
  iconName: IconProps['name'];
  onClick?: () => void;
  isActive?: boolean;
  classes: { [className: string]: boolean };
}

export default function Tab({
  className,
  children,
  iconName,
  onClick,
  isActive,
  classes,
}: Props) {
  const device = useDevice();

  return (
    <div
      className={`${classes.tab} ${isActive ? classes.selectedTab : ''} ${
        className || ''
      }`}
      onClick={onClick}
      onKeyDown={onEnter(onClick)}
      role="button"
      tabIndex={0}
    >
      <Icon
        height={['desktop', 'tablet'].includes(device) ? 48 : 38}
        name={iconName}
        width={['desktop', 'tablet'].includes(device) ? 48 : 38}
      />
      <Typography variant="B2" variantMobile="C1">
        {children}
      </Typography>
    </div>
  );
}
