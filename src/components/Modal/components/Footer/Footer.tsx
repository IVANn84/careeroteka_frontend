import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  classes: {[className: string]: string};
}

export default function Footer({
  classes,
  className,
  children,
}: Props) {
  return (
    <div className={`${classes.container} ${className || ''}`}>
      {children}
    </div>
  );
}
