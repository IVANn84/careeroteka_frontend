import React from 'react';

interface Props {
  children: React.ReactNode;
  isDisplayed: boolean;
  classes: {[className: string]: string};
  /* eslint-disable react/no-unused-prop-types */
  // Абсолютное ли позиционирование
  isAbsolute?: boolean;
  indicatorSize?: number;
  /* eslint-enable react/no-unused-prop-types */
}

export default function Preloader({
  children,
  isDisplayed,

  classes,
}: Props) {
  return isDisplayed
    ? (
      <div className={classes.container}>
        <div className={classes.indicator} />
      </div>
    )
    : (children || null);
}
