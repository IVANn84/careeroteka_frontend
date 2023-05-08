import React from 'react';

export default function Footer({
  classes,
  children,
}) {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
}
