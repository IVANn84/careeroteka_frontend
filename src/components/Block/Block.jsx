import React from 'react';

export default function Block({
  children,
  isDisplayed = true,
  className,
  style,

  classes,
}) {
  return isDisplayed && (
    <div
      className={`${classes.container} ${className || ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
