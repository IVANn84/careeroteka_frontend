import React from 'react';

interface Props {
  children: React.ReactNode;
  isDisplayed?: boolean;
  className?: string;
  style?: React.CSSProperties;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  mode?: 'light' | 'dark';
  isSlim?: boolean;
  padding?: number | string | number[][];
  paddingMobile?: number | string | number[][];
  borderRadius?: number | string | number[][];
  borderRadiusMobile?: number | string | number[][];
  /* eslint-enable  react/no-unused-prop-types */
}

export default function Block({
  children,
  isDisplayed = true,
  className,
  style,

  classes,
}: Props) {
  return isDisplayed && (
    <div
      className={`${classes.container} ${className || ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
