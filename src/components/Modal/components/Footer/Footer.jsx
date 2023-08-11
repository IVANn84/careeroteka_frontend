import React from 'react';

export default function Footer({
  classes,
  className,
  children,
}) {
  return (
    <div className={`${classes.container} ${className || ''}`}>
      {children}
    </div>
  );
}
